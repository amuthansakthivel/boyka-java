"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6019],{167:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(4715),o=(n(5721),n(167));const i={title:"IFingersActionsListener",sidebar_position:5},a=void 0,s={unversionedId:"actions/interfaces/listeners/elements/fingers-actions-listener",id:"actions/interfaces/listeners/elements/fingers-actions-listener",title:"IFingersActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/fingers-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/fingers-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/fingers-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/fingers-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1689839584,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:5,frontMatter:{title:"IFingersActionsListener",sidebar_position:5},sidebar:"api",previous:{title:"IFingerActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/finger-actions-listener"},next:{title:"ITextBoxActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/text-box-actions-listeners"}},l={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onZoomIn (locator)</code>",id:"on-zoom-in",level:2},{value:"<code>onZoomOut (locator)</code>",id:"on-zoom-out",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the multiple fingers related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,o.kt)("h2",{id:"on-zoom-in"},(0,o.kt)("inlineCode",{parentName:"h2"},"onZoomIn (locator)")),(0,o.kt)("p",null,"This method will get executed after zooming in on the element located by using the provided element locator."),(0,o.kt)("h2",{id:"on-zoom-out"},(0,o.kt)("inlineCode",{parentName:"h2"},"onZoomOut (locator)")),(0,o.kt)("p",null,"This method will get executed after zooming out on the element located by using the provided element locator."))}u.isMDXComponent=!0}}]);