(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25682315"],{"0b2a":function(t,e,i){},"160f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-4"},[i("div",{staticClass:"alert alert-primary",staticStyle:{width:"200px"},attrs:{id:"item_left"}}),i("div",{staticClass:"alert alert-primary",staticStyle:{width:"200px"},attrs:{id:"item_right"}}),i("button",{on:{click:t.test}},[t._v("OK")]),i("button",{on:{click:t.test2}},[t._v("OK")])])},a=[],c=i("e193"),s={name:"Description",data:function(){return{}},methods:{test:function(){var t=c["jsPlumb"].getInstance();t.connect({source:"item_left",target:"item_right",endpoint:"Rectangle"}),t.draggable("item_left"),t.draggable("item_right"),t.bind("click",(function(t,e){c["jsPlumb"].remove(t.targetId+"")}))},test2:function(){var t=c["jsPlumb"].getInstance();t.remove("item_left")}}},r=s,l=(i("1c08"),i("2877")),o=Object(l["a"])(r,n,a,!1,null,"6afb118e",null);e["default"]=o.exports},"1c08":function(t,e,i){"use strict";i("0b2a")}}]);
//# sourceMappingURL=chunk-25682315.80763c3f.js.map