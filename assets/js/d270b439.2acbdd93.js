"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7477],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){return function(t){var n=c(t.components);return a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||s[u]||o;return n?a.createElement(g,m(m({ref:t},l),{},{components:n})):a.createElement(g,m({ref:t},l))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_position:16},i=void 0,m={unversionedId:"commands/goto",id:"commands/goto",title:"goto",description:"goto | go |  | up | update | co | checkout",source:"@site/docs/commands/goto.md",sourceDirName:"commands",slug:"/commands/goto",permalink:"/docs/commands/goto",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/goto.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"githelp",permalink:"/docs/commands/githelp"},next:{title:"graft",permalink:"/docs/commands/graft"}},d={},l=[{value:"goto | go |  | up | update | co | checkout",id:"goto--go----up--update--co--checkout",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"goto--go----up--update--co--checkout"},"goto | go |  | up | update | co | checkout"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"update working copy to a given commit")),(0,r.mdx)("p",null,"Update your working copy to the given destination commit. More\nprecisely, make the destination commit the current commit and update the\ncontents of all files in your working copy to match their state in the\ndestination commit."),(0,r.mdx)("p",null,"By default, if you attempt to go to a commit while you have pending\nchanges, and the destination commit is not an ancestor or descendant of\nthe current commit, the checkout will abort. However, if the destination\ncommit is an ancestor or descendant of the current commit, the pending\nchanges will be merged with the destination."),(0,r.mdx)("p",null,"Use one of the following flags to modify this behavior:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"--check: abort if there are pending changes\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"--clean: permanently discard any pending changes (use with caution)\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"--merge: always attempt to merge the pending changes into the destination\n")),(0,r.mdx)("p",null,"If merge conflicts occur during update, Sapling enters an unfinished\nmerge state. If this happens, fix the conflicts manually and then run\n",(0,r.mdx)("inlineCode",{parentName:"p"},"sl commit")," to exit the unfinished merge state and save your changes\nin a new commit. Alternatively, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl goto --clean")," to discard your\npending changes."),(0,r.mdx)("p",null,"Specify null as the destination commit to get an empty working copy\n(sometimes known as a bare repository)."),(0,r.mdx)("p",null,"Returns 0 on success, 1 if there are unresolved files."),(0,r.mdx)("h2",{id:"arguments"},"arguments"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,r.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,r.mdx)("th",{parentName:"tr",align:null},"default"),(0,r.mdx)("th",{parentName:"tr",align:null},"description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-C")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--clean")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"discard uncommitted changes (no backup)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-c")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--check")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"require clean working copy")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-m")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--merge")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"merge uncommitted changes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-r")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"revision")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--inactive")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"update without activating bookmarks")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-B")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--bookmark")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"create new bookmark")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-t")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--tool")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"specify merge tool")))))}c.isMDXComponent=!0}}]);