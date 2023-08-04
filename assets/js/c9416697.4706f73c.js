"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9173],{167:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(5721);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:e},c),{},{components:n})):r.createElement(f,a({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6938:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(4715),i=(n(5721),n(167));const o={title:"SettingUtils",sidebar_position:3},a=void 0,l={unversionedId:"utils/settings-util",id:"utils/settings-util",title:"SettingUtils",description:"loadSetting",source:"@site/docs/api/utils/settings-util.md",sourceDirName:"utils",slug:"/utils/settings-util",permalink:"/boyka-framework/api/utils/settings-util",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/settings-util.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1689839584,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:3,frontMatter:{title:"SettingUtils",sidebar_position:3},sidebar:"api",previous:{title:"JsonUtil",permalink:"/boyka-framework/api/utils/json-util"},next:{title:"StringUtils",permalink:"/boyka-framework/api/utils/string-utils"}},s={},p=[{value:"<code>loadSetting</code>",id:"loadsetting",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"loadsetting"},(0,i.kt)("inlineCode",{parentName:"h2"},"loadSetting")),(0,i.kt)("p",null,"This method is used to load the ",(0,i.kt)("inlineCode",{parentName:"p"},"boyka-config.json")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.utils.SettingUtils.loadSetting;\n. . .\nloadSetting ();\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can explore all the available methods from the return object of ",(0,i.kt)("inlineCode",{parentName:"p"},"loadSetting")," method.")))}d.isMDXComponent=!0}}]);