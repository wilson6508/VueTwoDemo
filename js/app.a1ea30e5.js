(function(t){function e(e){for(var n,s,i=e[0],u=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/VueTwoDemo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation"),r("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("div",{staticClass:"d-flex justify-content-start"},[r("div",{staticClass:"mt-2 mb-1 text-light"},[r("router-link",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"},attrs:{to:"/Home"}},[t._v("首頁")]),r("router-link",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"},attrs:{to:"/"}},[t._v("根目錄")]),r("a",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"}},[t._v("美國股市")]),r("a",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"}},[t._v("運動賽事")]),r("a",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"}},[t._v("Test01")]),r("a",{staticClass:"ms-3 navbar-brand",staticStyle:{cursor:"pointer"}},[t._v("Test02")])],1)])])])},i=[],u={name:"Navigation",data:function(){return{test:123}}},l=u,c=r("2877"),p=Object(c["a"])(l,s,i,!1,null,null,null),f=p.exports,v={name:"App",components:{Navigation:f}},d=v,b=Object(c["a"])(d,a,o,!1,null,null,null),m=b.exports,y=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("Home")])},_=[],g={name:"Home"},w=g,O=Object(c["a"])(w,h,_,!1,null,null,null),j=O.exports;n["a"].use(y["a"]);var x=[{path:"/",meta:{title:"根目錄"}},{path:"/Home",component:j,meta:{title:"首頁"}}],S=new y["a"]({mode:"history",base:"/VueTwoDemo/",routes:x});S.afterEach((function(t){document.title=t.meta.title||"VueTwoDemo"}));var C=S;n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.a1ea30e5.js.map