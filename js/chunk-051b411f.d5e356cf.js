(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-051b411f"],{"160f":function(l,e,t){"use strict";t.r(e);var c=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",{staticClass:"row m-5 text-center"},[t("div",{staticClass:"col-2"}),t("div",{staticClass:"card col-8"},[t("div",{staticClass:"card-body",staticStyle:{height:"650px"}},[t("ul",{staticClass:"nav nav-tabs"},l._l(l.tabArr,(function(e){return t("li",{key:e.value,staticClass:"nav-item"},[t("span",{staticClass:"nav-link my-tab",class:{active:e.value===l.chooseTab},on:{click:function(t){l.chooseTab=e.value}}},[l._v(" "+l._s(e.label)+" ")])])})),0),l._l(l.infoObj,(function(e,c){return t("div",{directives:[{name:"show",rawName:"v-show",value:c===l.chooseTab,expression:"key === chooseTab"}],key:c,staticClass:"mt-4"},[t("BasicTable",{attrs:{tableInfo:e}})],1)}))],2)]),t("div",{staticClass:"col-2"})])},o=[],a=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("table",{staticClass:"table"},[t("thead",[t("tr",l._l(l.tableInfo.columns,(function(e){return t("th",{key:e.key},[l._v(" "+l._s(e.label)+" ")])})),0)]),t("tbody",l._l(l.tableInfo.rows,(function(e,c){return t("tr",{key:c},l._l(l.tableInfo.columns,(function(c){return t("td",{key:c.key},[l._v(" "+l._s(e[c.key])+" ")])})),0)})),0)])},s=[],n={name:"BasicTable",props:["tableInfo"]},i=n,u=t("2877"),r=Object(u["a"])(i,a,s,!1,null,null,null),b=r.exports,f={name:"Description",components:{BasicTable:b},data:function(){return{chooseTab:"plugin",tabArr:[{value:"plugin",label:"使用套件"},{value:"schedule",label:"工作日程"},{value:"reference",label:"參考資料"}],infoObj:{plugin:{columns:[{key:"col1",label:"使用套件"},{key:"col2",label:"主要用途"}],rows:[{col1:"jsplumb",col2:"連線功能、移動區塊功能"},{col1:"vuedraggable",col2:"拖曳功能"},{col1:"nanoid",col2:"建立uuid"},{col1:"bootstrap",col2:"版面CSS"}]},schedule:{columns:[{key:"col1",label:"項目"},{key:"col2",label:"工時"}],rows:[{col1:"找尋套件",col2:"大約 4 個小時"},{col1:"閱讀資料",col2:"大約 6 個小時"},{col1:"主要功能",col2:"大約 12 個小時"},{col1:"額外功能",col2:"大約 4 個小時"},{col1:"其它",col2:"大約 4 個小時"}]},reference:{columns:[{key:"col1",label:"參考資料"},{key:"col2",label:"參考網址"}],rows:[{col1:"jsPlumb",col2:"https://docs.jsplumbtoolkit.com/community/lib/anchors"},{col1:"jsplumb 中文基础教程",col2:"https://wdd.js.org/jsplumb-chinese-tutorial/#/"},{col1:"Jsplumb基础教程(vue+jsplumb+d3)",col2:"https://blog.csdn.net/weixin_39085822/article/details/106879459"},{col1:"jsPlumb應用指南(一)概念部分",col2:"https://www.twblogs.net/a/5cfe4bdebd9eee14029f03c5"}]}}}}},d=f,p=(t("f3f7"),Object(u["a"])(d,c,o,!1,null,"0ea71cf8",null));e["default"]=p.exports},a000:function(l,e,t){},f3f7:function(l,e,t){"use strict";t("a000")}}]);
//# sourceMappingURL=chunk-051b411f.d5e356cf.js.map