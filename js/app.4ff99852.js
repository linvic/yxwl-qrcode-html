(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-586306fb":"87a62f6a","chunk-5efdab35":"076b6253"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-586306fb":1,"chunk-5efdab35":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-586306fb":"1fdac701","chunk-5efdab35":"0220186c"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],l.parentNode.removeChild(l),n(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/qrcode/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("9eee"),{name:"App"}),i=u,c=(n("5c0b"),n("2877")),s=Object(c["a"])(i,o,a,!1,null,null,null),f=s.exports,d=(n("d3b7"),n("8c4f"));r["default"].use(d["a"]);var l=new d["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("chunk-586306fb").then(n.bind(null,"6511"))}},{path:"/index",name:"index",component:function(e){return n.e("chunk-5efdab35").then(function(){var t=[n("1e4b")];e.apply(null,t)}.bind(this)).catch(n.oe)},hidden:!0}]}),p=n("2f62"),h="Robot-Token";function m(){return localStorage.getItem(h)}function v(e){return localStorage.setItem(h,e)}function b(){return localStorage.removeItem(h)}n("c975"),n("ac1f"),n("5319");var g=n("bc3a"),y=n.n(g),k=n("d399"),w=n("2241"),E="http://192.168.1.107:9092";r["default"].prototype.$https=y.a;var O,S=0;function x(){0===S&&(O=k["a"].loading({duration:0,mask:!1,forbidClick:!0,message:"加载中..."})),S++}function P(){S<=0||(S--,0===S&&O.clear())}var T=y.a.create({baseURL:E,timeout:1e4,withCredentials:!1});T.interceptors.request.use((function(e){return C.getters.token&&(e.headers["token"]=(void 0)()),x(),e}),(function(e){return Promise.reject(e)})),T.interceptors.response.use((function(e){return e.headers["x-authority-retoken"],P(),e}),(function(e){return P(),e.response&&401===e.response.status&&l.replace({path:"/"}),Promise.reject(e.response.data)}));var j={state:{token:m()},mutations:{SET_TOKEN:function(e,t){e.token=t}},actions:{LoginByUsername:function(e,t){var n=e.commit;return new Promise((function(e,r){(void 0)(t).then((function(t){1===t.result&&(n("SET_TOKEN",t.model.token),v(t.model.token)),e(t)})).catch((function(e){r(e)}))}))},LogOut:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),b(),e()}))}}},_=j;r["default"].use(p["a"]);var C=new p["a"].Store({state:{},mutations:{},actions:{},modules:{user:_},getters:{token:function(e){return e.user.token}}}),L=(n("bb76"),n("5596")),N=n("2bb1"),A=n("28a2"),M=(n("d738"),n("c2d8"),n("4149"),n("598e"),n("9b0f"),n("7212")),q=n.n(M);n("a7a3");r["default"].use(w["a"]),r["default"].use(k["a"]),r["default"].use(L["a"]),r["default"].use(N["a"]),r["default"].use(A["a"]),r["default"].use(q.a),r["default"].config.productionTip=!1,new r["default"]({router:l,store:C,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},"9eee":function(e,t,n){},bb76:function(e,t){(function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1;function o(){t.body?t.body.style.fontSize=12*r+"px":t.addEventListener("DOMContentLoaded",o)}function a(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(o(),a(),e.addEventListener("resize",a),e.addEventListener("pageshow",(function(e){e.persisted&&a()})),r>=2){var u=t.createElement("body"),i=t.createElement("div");i.style.border=".5px solid transparent",u.appendChild(i),n.appendChild(u),1===i.offsetHeight&&n.classList.add("hairlines"),n.removeChild(u)}})(window,document)}});
//# sourceMappingURL=app.4ff99852.js.map