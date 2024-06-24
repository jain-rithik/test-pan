!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("MyComponent",["React"],n):"object"==typeof exports?exports.MyComponent=n(require("react")):e.MyComponent=n(e.React)}(this,(e=>(()=>{"use strict";var n={60:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(314),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,".pan-card {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    aspect-ratio: 1.6;\r\n    border: 1px solid #ccc;\r\n    border-radius: 10px;\r\n    padding: 16px;\r\n    font-family: 'Arial, sans-serif';\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    background: linear-gradient(to right, #e2c3d6bd, #a6c6f8ba, #BCDDFD);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.pan-card-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 56px;\r\n    align-items: center;\r\n}\r\n\r\n.left-head {\r\n    width: 50%;\r\n}\r\n\r\n.right-head {\r\n    width: 40%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: end;\r\n}\r\n\r\n.pan-card-title {\r\n    font-size: 13px;\r\n    color: #333;\r\n    text-align: left;\r\n}\r\n\r\n.ln-en {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n.left-en {\r\n    letter-spacing: -0.6px;\r\n}\r\n\r\n.ln-hi {\r\n    margin-bottom: 4px;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.left-title {\r\n    display: flex;\r\n    gap: 28px;\r\n}\r\n\r\n.pan-card-emblem {\r\n    width: 10%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.pan-card-emblem img {\r\n    width: 25px;\r\n}\r\n\r\n.right-title-en {\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.pan-card-body {\r\n    text-align: left;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.pan-card-name {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    margin-bottom: 8px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.pan-card-number {\r\n    font-size: 20px;\r\n    color: #333;\r\n}\r\n\r\n.pan-card-user-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 5px;\r\n    background-color: #DACAE5;\r\n    opacity: 0.7;\r\n}\r\n\r\n.pan-card-user-icon img {\r\n    width: 45px;\r\n    opacity: 0.4;\r\n}\r\n\r\n/* Media Queries */\r\n@media only screen and (max-width: 426px) {\r\n    .pan-card{\r\n        width: 90%;\r\n    max-width: 400px;\r\n    }\r\n\r\n    .ln-hi {\r\n        margin-bottom: 4px;\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n        letter-spacing: 1px;\r\n    }\r\n\r\n    .ln-en {\r\n        font-size: 12px;\r\n        font-weight: 400;\r\n    }\r\n\r\n    .left-title {\r\n        gap: 16px;\r\n    }\r\n\r\n    .right-title-en {\r\n        letter-spacing: 0.5px;\r\n    }\r\n  }",""]);const i=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},72:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var i=t(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=r(i[o]);n[c].references--}for(var s=t(e,a),l=0;l<i.length;l++){var p=r(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},659:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},156:n=>{n.exports=e}},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var a={};t.r(a),t.d(a,{default:()=>N});var i=t(156),o=t.n(i),c=t(72),s=t.n(c),l=t(825),p=t.n(l),d=t(659),u=t.n(d),f=t(56),m=t.n(f),h=t(540),g=t.n(h),v=t(113),x=t.n(v),y=t(60),b={};b.styleTagTransform=x(),b.setAttributes=m(),b.insert=u().bind(null,"head"),b.domAPI=p(),b.insertStyleElement=g(),s()(y.A,b),y.A&&y.A.locals&&y.A.locals;const w=t.p+"images/national-emblem.png",E=t.p+"images/user.png",N=function(e){var n=e.name,r=e.number;return o().createElement("div",{className:"pan-card"},o().createElement("div",{className:"pan-card-header"},o().createElement("div",{className:"left-head"},o().createElement("div",{className:"pan-card-title left-title ln-hi"},o().createElement("span",null,"आयकर")," ",o().createElement("span",null,"विभाग")),o().createElement("div",{className:"pan-card-title ln-en left-en"},"INCOME TAX DEPARTMENT")),o().createElement("div",{className:"pan-card-emblem"},o().createElement("img",{src:w,alt:"National Emblem of India"})),o().createElement("div",{className:"right-head"},o().createElement("div",{className:"pan-card-title ln-hi"},"भारत सरकार"),o().createElement("div",{className:"pan-card-title right-title-en ln-en"},"GOVT. OF INDIA"))),o().createElement("div",{className:"pan-card-body"},o().createElement("div",null,o().createElement("div",{className:"pan-card-name"},n),o().createElement("div",{className:"pan-card-number"},r)),o().createElement("div",{className:"pan-card-user-icon"},o().createElement("img",{src:E,alt:"user icon"}))))};return a})()));