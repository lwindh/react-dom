/*! For license information please see main.cb6717a7.js.LICENSE.txt */
!function(){"use strict";var e,t,n={418:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var c,a,u=o(e),s=1;s<arguments.length;s++){for(var f in c=Object(arguments[s]))n.call(c,f)&&(u[f]=c[f]);if(t){a=t(c);for(var l=0;l<a.length;l++)r.call(c,a[l])&&(u[a[l]]=c[a[l]])}}return u}},251:function(e,t,n){n(418);var r=n(804),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,f=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:c.current}}t.jsx=s,t.jsxs=s},893:function(e,t,n){e.exports=n(251)},804:function(e){e.exports=React}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"static/js/"+e+"."+{193:"5ba6eca3",663:"024d3b10",741:"093b4c0b"}[e]+".chunk.js"},o.miniCssF=function(e){},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="react-cli:",o.l=function(n,r,i,c){if(e[n])e[n].push(r);else{var a,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var d=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="./",function(){var e={179:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var c=o.p+o.u(t),a=new Error;o.l(c,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",a.name="ChunkLoadError",a.type=i,a.request=c,r[1](a)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,c=n[0],a=n[1],u=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);u&&u(o)}for(t&&t(n);s<c.length;s++)i=c[s],o.o(e,i)&&e[i]&&e[i][0](),e[c[s]]=0},n=self.webpackChunkreact_cli=self.webpackChunkreact_cli||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=o(893),t=ReactDOM,n=o.n(t),r=ReactRouterDOM,i=o(804);function c(){var t=(0,i.lazy)((function(){return o.e(741).then(o.bind(o,741))})),n=(0,i.lazy)((function(){return o.e(193).then(o.bind(o,193))})),c=(0,i.lazy)((function(){return o.e(663).then(o.bind(o,663))}));return(0,e.jsx)(i.Suspense,Object.assign({fallback:(0,e.jsx)("h1",{children:"正在联网获取用户名..."},void 0)},{children:(0,e.jsxs)(r.Switch,{children:[(0,e.jsx)(r.Route,{exact:!0,path:"/dist/",component:t},void 0),(0,e.jsx)(r.Route,{path:"/dist/page",component:n},void 0),(0,e.jsx)(r.Route,{component:c},void 0)]},void 0)}),void 0)}n().render((0,e.jsx)((function(){return(0,e.jsx)("div",{children:(0,e.jsxs)(r.BrowserRouter,{children:[(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(r.Link,Object.assign({to:"/dist/"},{children:"首页"}),void 0)},void 0),(0,e.jsx)("li",{children:(0,e.jsx)(r.Link,Object.assign({to:"/dist/page"},{children:"Page"}),void 0)},void 0)]},void 0),(0,e.jsx)(c,{},void 0)]},void 0)},void 0)}),{},void 0),document.getElementById("app"))}()}();