(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91cc012c"],{6812:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-12 text-end mb-3"},[n("button",{staticClass:"btn btn-primary btn-sm ms-2",attrs:{type:"button"},on:{click:t.saveFile}},[t._v(" 儲存檔案 ")]),n("button",{staticClass:"btn btn-primary btn-sm ms-2",attrs:{type:"button"},on:{click:t.readFile}},[t._v(" 讀取檔案 ")]),n("button",{staticClass:"btn btn-danger btn-sm ms-2",attrs:{type:"button"},on:{click:t.clearArea}},[t._v(" 清空版面 ")])]),n("div",{staticClass:"col-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body",staticStyle:{height:"650px"}},t._l(t.leftItems,(function(e,s){return n("Draggable",{key:s,on:{end:t.setItem}},[n("div",{staticClass:"m-3 blue-item"},[t._v(t._s(e))])])})),1)])]),n("div",{staticClass:"col-10"},[n("div",{staticClass:"card"},[n("Draggable",[n("div",{ref:"region",staticClass:"card-body",staticStyle:{height:"650px"},attrs:{id:"regionId"}},t._l(t.rightItems,(function(e,s){return n("div",{key:s,staticClass:"blue-item",staticStyle:{position:"absolute",width:"220px"},style:{left:e.left,top:e.top},attrs:{id:e.id}},[t._v(" "+t._s(e.label)+" ")])})),0)])],1)])])},i=[],a=n("b85c"),r=(n("d3b7"),n("159b"),n("b76a")),o=n.n(r),c=n("e193"),l=n("e1bd"),d={name:"FlowChart",components:{Draggable:o.a},data:function(){return{leftItems:["A","B"],rightItems:[],jsPlumbObj:null,anchorStyle:{isSource:!0,isTarget:!0,maxConnections:-1,endpoint:"Dot",paintStyle:{fill:"pink"},hoverPaintStyle:{strokeWidth:1,stroke:"blue"},connector:["Bezier"],connectorStyle:{stroke:"green",strokeWidth:2},connectorHoverStyle:{stroke:"red",strokeWidth:2},connectorOverlays:[["Arrow",{width:14,length:14,location:1}]]}}},mounted:function(){this.jsPlumbObj=c["jsPlumb"].getInstance()},methods:{setItem:function(t){var e=this,n=t.originalEvent,s=n.clientX,i=n.clientY,a=this.$refs.region.getBoundingClientRect(),r=a.left,o=a.top,c=a.width,d=a.height;if(s>r&&s<r+c&&i>o&&i<o+d){var b=Object(l["a"])(),u=t.item.innerText;this.rightItems.push({id:b,label:u,top:i-o-30+"px",left:s-r-110+"px"}),this.$nextTick((function(){e.setAnchor(b,u)}))}},setAnchor:function(t,e){for(var n="B"===e,s=[{xVal:.25,yVal:+n},{xVal:.5,yVal:+!n},{xVal:.75,yVal:+n}],i=0,a=s;i<a.length;i++){var r=a[i];this.jsPlumbObj.addEndpoint(t,{anchor:[r.xVal,r.yVal,0,0]},this.anchorStyle)}this.jsPlumbObj.draggable(t,{containment:"regionId"})},saveFile:function(){var t,e=this,n=[],s=Object(a["a"])(this.jsPlumbObj.getConnections());try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push({sourceId:i.sourceId,targetId:i.targetId})}}catch(r){s.e(r)}finally{s.f()}this.jsPlumbObj.deleteEveryEndpoint(),setTimeout((function(){var t,s=Object(a["a"])(n);try{for(s.s();!(t=s.n()).done;){var i=t.value;e.jsPlumbObj.connect({source:i.sourceId,target:i.targetId})}}catch(r){s.e(r)}finally{s.f()}}),2e3)},readFile:function(){var t=this;this.clearArea();var e,n=sessionStorage.getItem("msg03"),s=Object(a["a"])(JSON.parse(n));try{for(s.s();!(e=s.n()).done;){var i=e.value;this.rightItems.push(i)}}catch(r){s.e(r)}finally{s.f()}this.$nextTick((function(){t.rightItems.forEach((function(e){return t.addOneAnchor(e.id)}))}))},clearArea:function(){this.jsPlumbObj.deleteEveryEndpoint(),this.rightItems=[]}}},b=d,u=(n("7ebb"),n("2877")),h=Object(u["a"])(b,s,i,!1,null,"0a832389",null);e["default"]=h.exports},"7ebb":function(t,e,n){"use strict";n("cab6")},cab6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-91cc012c.1f404861.js.map