"use strict";(self.webpackChunkdf_doc_source=self.webpackChunkdf_doc_source||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},i="\u5b89\u88c5",l={unversionedId:"installation",id:"installation",title:"\u5b89\u88c5",description:"\u5f53\u524d\u4f60\u53ef\u4ee5\u5728 iOS\uff0cAndroid \u4e0a\u5b89\u88c5 Valo Reader\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728 macOS \u4e0a\u5b89\u88c5 Valo Reader Beta \u7248\u672c\u3002",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/valo-reader-doc/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/valo-reader-doc/docs/intro"},next:{title:"\u4f7f\u7528",permalink:"/valo-reader-doc/docs/usage"}},c={},p=[{value:"\u5728 macOS \u4e0a\u5b89\u88c5",id:"\u5728-macos-\u4e0a\u5b89\u88c5",level:2},{value:"\u5728 iOS / iPadOS \u5b89\u88c5",id:"\u5728-ios--ipados-\u5b89\u88c5",level:2},{value:"\u5728\u5b89\u5353\u5e73\u53f0\u4e0a\u5b89\u88c5",id:"\u5728\u5b89\u5353\u5e73\u53f0\u4e0a\u5b89\u88c5",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("p",null,"\u5f53\u524d\u4f60\u53ef\u4ee5\u5728 iOS\uff0cAndroid \u4e0a\u5b89\u88c5 Valo Reader\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728 macOS \u4e0a\u5b89\u88c5 Valo Reader Beta \u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u5728-macos-\u4e0a\u5b89\u88c5"},"\u5728 macOS \u4e0a\u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u53f0\u8fd0\u884c macOS Big Sur 11.1 \u53ca\u4ee5\u4e0a\u7684 mac, \u4f60\u53ef\u4ee5\u5728 github release \u4e0a\u4e0b\u8f7d Valo Reader for macOS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/HaloWang/valo-reader-doc/releases"},"\u70b9\u51fb\u6b64\u5904\u8fdb\u5165 Github release")),(0,n.kt)("h2",{id:"\u5728-ios--ipados-\u5b89\u88c5"},"\u5728 iOS / iPadOS \u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u53f0\u8fd0\u884c iOS 13 / iPadOS 13 \u53ca\u4ee5\u4e0a\u7684 iPhone / iPad\uff0c\u4f60\u53ef\u4ee5\u524d\u5f80 App Store \u4e0b\u8f7d Valo Reader"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/cn/app/valo-reader/id6448040931"},"\u70b9\u51fb\u6b64\u5904\u8fdb\u5165 App Store")),(0,n.kt)("h2",{id:"\u5728\u5b89\u5353\u5e73\u53f0\u4e0a\u5b89\u88c5"},"\u5728\u5b89\u5353\u5e73\u53f0\u4e0a\u5b89\u88c5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u524d\u5f80 Play Store \u4e0a\u4e0b\u8f7d Valo Reader"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u4e5f\u53ef\u4ee5\u524d\u5f80 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/HaloWang/valo-reader-doc/releases"},"Github-release")," \u9875\u9762\u4e0b\u8f7d Valo Reader (Android) \u53ca\u5176\u5386\u53f2\u7248\u672c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.df.mobile"},"\u70b9\u51fb\u6b64\u5904\u8fdb\u5165 Play Store")))}u.isMDXComponent=!0}}]);