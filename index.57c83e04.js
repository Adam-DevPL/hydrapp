!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=1)}([function(e,n,o){},function(e,n,o){"use strict";o.r(n);o(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),console.log("HELLO 🚀");var r=document.querySelector(".number--js"),t=document.querySelector(".button-add--js"),i=document.querySelector(".button-delete--js"),c=new Date,l=[],s=c.toLocaleString("pl-PL").slice(0,10);console.log(s);var u=0;function a(e,n,o){o[0]={key:e,glasses:n},localStorage.setItem("key",JSON.stringify(o))}localStorage.getItem("key")?(l=JSON.parse(localStorage.getItem("key")),console.log(l[0].key),s==l[0].key?(u=l[0].glasses,r.innerHTML=u):(l.unshift({key:s,glasses:0}),r.innerHTML=u)):a(s,u,l),t.addEventListener("click",(function(){u++,r.innerHTML=u,a(s,u,l)})),i.addEventListener("click",(function(){u>0&&u--,r.innerHTML=u,a(s,u,l)})),window.performance&&console.info("window.performance work's fine on this browser"),1==performance.navigation.type?console.info("This page is reloaded"):console.info("This page is not reloaded")}]);