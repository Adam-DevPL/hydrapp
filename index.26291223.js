!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),console.log("HELLO 🚀");var r=document.querySelector(".number--js"),o=document.querySelector(".button-add--js"),i=document.querySelector(".button-delete--js"),c=(new Date).toISOString().slice(0,10),u=0;if(localStorage.getItem("key")){var l=JSON.parse(localStorage.getItem("key"));console.log(l[0].key),c==l[0].key?(u=l[0].glasses,r.innerHTML=u):(l.unshift({key:c,glasses:0}),r.innerHTML=u)}function s(e,t){var n=[];n[0]={key:e,glasses:t},localStorage.setItem("key",JSON.stringify(n))}o.addEventListener("click",(function(){u++,r.innerHTML=u,s(c,u)})),i.addEventListener("click",(function(){u>0&&u--,r.innerHTML=u,s(c,u)}))}]);