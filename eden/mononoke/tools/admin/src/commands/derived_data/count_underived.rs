/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use anyhow::Result;
use bulk_derivation::BulkDerivation;
use clap::builder::PossibleValuesParser;
use clap::Args;
use context::CoreContext;
use futures::stream;
use futures::stream::StreamExt;
use futures::stream::TryStreamExt;
use mononoke_app::args::ChangesetArgs;
use mononoke_types::DerivableType;
use repo_derived_data::RepoDerivedDataRef;
use strum::IntoEnumIterator;

use super::Repo;

#[derive(Args)]
pub(super) struct CountUnderivedArgs {
    #[clap(flatten)]
    changeset_args: ChangesetArgs,

    #[clap(short = 'T', long, value_parser = PossibleValuesParser::new(DerivableType::iter().map(|t| DerivableType::name(&t))))]
    derived_data_type: String,
}

pub(super) async fn count_underived(
    ctx: &CoreContext,
    repo: &Repo,
    args: CountUnderivedArgs,
) -> Result<()> {
    let cs_ids = args.changeset_args.resolve_changesets(ctx, repo).await?;
    let derived_data_type = DerivableType::from_name(&args.derived_data_type)?;
    let manager = repo.repo_derived_data().manager();

    stream::iter(cs_ids)
        .map(|cs_id| async move {
            let underived =
                BulkDerivation::count_underived(manager, ctx, cs_id, None, None, derived_data_type)
                    .await?;
            Ok((cs_id, underived))
        })
        .buffer_unordered(10)
        .try_for_each(|(cs_id, underived)| async move {
            println!("{}: {}", cs_id, underived);
            Ok(())
        })
        .await
}
