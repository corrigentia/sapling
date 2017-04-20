  $ CACHEDIR=`pwd`/hgcache
  $ PYTHONPATH=$TESTDIR/..:$PYTHONPATH
  $ export PYTHONPATH

  $ . "$TESTDIR/library.sh"

  $ hg init master
  $ cd master
  $ mkdir dir
  $ echo x > dir/x
  $ hg commit -qAm 'add x'
  $ echo z > dir/z
  $ hg commit -qAm 'add subdir/z'
  $ echo x >> dir/x
  $ hg commit -Am 'modify x'
  $ cat >> .hg/hgrc <<EOF
  > [extensions]
  > treemanifest=
  > 
  > [remotefilelog]
  > name=master
  > cachepath=$CACHEDIR
  > usefastdatapack=True
  > 
  > [fastmanifest]
  > usetree=True
  > usecache=False
  > 
  > [treemanifest]
  > server=True
  > EOF

  $ cd ..
  $ hg clone ssh://user@dummy/master client
  streaming all changes
  4 files to transfer, 952 bytes of data
  transferred 952 bytes in * seconds (*) (glob)
  searching for changes
  no changes found
  updating to branch default
  2 files updated, 0 files merged, 0 files removed, 0 files unresolved

  $ cd master
  $ hg backfilltree

  $ cd ../client
  $ cat >> .hg/hgrc <<EOF
  > [extensions]
  > treemanifest =
  > fastmanifest = 
  > [remotefilelog]
  > reponame = master
  > cachepath = $CACHEDIR
  > [fastmanifest]
  > usetree = True
  > usecache = False
  > EOF

Test prefetchtrees
  $ hg prefetchtrees -r '0 + 1 + 2'
  $ ls $CACHEDIR/master/packs/manifests
  2124ac8f5a09b4be86db177166fc13820dbc2805.histidx
  2124ac8f5a09b4be86db177166fc13820dbc2805.histpack
  6234687cbd154a10e8cbbe2c1e780a5c449f4e8e.dataidx
  6234687cbd154a10e8cbbe2c1e780a5c449f4e8e.datapack
  $ hg debugdatapack --long $CACHEDIR/master/packs/manifests/*.dataidx
  
  
  Node                                      Delta Base                                Delta Length
  23848a702498b36725ff386a434cc0557926067e  0000000000000000000000000000000000000000  46
  
  dir/
  Node                                      Delta Base                                Delta Length
  df7d132bbf2367134e62c458788b1da2d4709c09  0000000000000000000000000000000000000000  86
  
  
  Node                                      Delta Base                                Delta Length
  b2ed7f50be40fa0559d1a65a811deac91df7efac  0000000000000000000000000000000000000000  46
  
  dir/
  Node                                      Delta Base                                Delta Length
  4afc76c372c40e9f73c85b12b61ecaccbde6cab1  0000000000000000000000000000000000000000  86
  
  
  Node                                      Delta Base                                Delta Length
  ef362f8bbe8aa457b0cfc49f200cbeb7747984ed  0000000000000000000000000000000000000000  46
  
  dir/
  Node                                      Delta Base                                Delta Length
  bc0c2c938b929f98b1c31a8c5994396ebb096bf0  0000000000000000000000000000000000000000  43
  $ hg debughistorypack $CACHEDIR/master/packs/manifests/*.histidx
  
  
  Node          P1 Node       P2 Node       Link Node     Copy From
  b2ed7f50be40  23848a702498  000000000000  e8f3c0d20aea  
  23848a702498  ef362f8bbe8a  000000000000  2a62f70ac760  
  ef362f8bbe8a  000000000000  000000000000  ecfb693caff5  
  
  dir/
  Node          P1 Node       P2 Node       Link Node     Copy From
  4afc76c372c4  df7d132bbf23  000000000000  e8f3c0d20aea  
  df7d132bbf23  bc0c2c938b92  000000000000  2a62f70ac760  
  bc0c2c938b92  000000000000  000000000000  ecfb693caff5  
  $ hg debugdatapack --node ef362f8bbe8aa457b0cfc49f200cbeb7747984ed $CACHEDIR/master/packs/manifests/*.dataidx
  
  
  Node                                      Delta Base                                Delta SHA1                                Delta Length
  ef362f8bbe8aa457b0cfc49f200cbeb7747984ed  0000000000000000000000000000000000000000  3b295111780498d177793f9228bf736b915f0255  46
  $ hg -R ../master debugindex ../master/.hg/store/00manifesttree.i
     rev    offset  length  delta linkrev nodeid       p1           p2
       0         0      47     -1       0 ef362f8bbe8a 000000000000 000000000000
       1        47      47     -1       1 23848a702498 ef362f8bbe8a 000000000000
       2        94      47     -1       2 b2ed7f50be40 23848a702498 000000000000
  $ hg -R ../master debugindex ../master/.hg/store/00manifest.i
     rev    offset  length  delta linkrev nodeid       p1           p2
       0         0      48     -1       0 ef362f8bbe8a 000000000000 000000000000
       1        48      59      0       1 23848a702498 ef362f8bbe8a 000000000000
       2       107      59      1       2 b2ed7f50be40 23848a702498 000000000000
