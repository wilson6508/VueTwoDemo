(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b5671ce"],{bcf5:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body",staticStyle:{height:"700px"}},[n("draggable",{on:{end:t.dragWidget}},t._l(t.sideItems,(function(e,i){return n("div",{key:i,staticClass:"m-3 blue-item"},[t._v(" "+t._s(e)+" ")])})),0)],1)])]),n("div",{staticClass:"col-10"},[n("div",{staticClass:"card"},[n("div",{ref:"region",staticClass:"card-body",staticStyle:{height:"700px"},attrs:{id:"regionId"}},t._l(t.mainItems,(function(e,i){return n("div",{key:i,staticClass:"blue-item",staticStyle:{position:"absolute",width:"220px"},style:{left:e.left,top:e.top},attrs:{id:e.id}},[t._v(" "+t._s(e.label)+" ")])})),0)])])])},s=[],o=n("b76a"),r=n.n(o),a=n("e193"),c={name:"BasicDemo",components:{draggable:r.a},data:function(){return{sideItems:["A","B"],mainItems:[],current:null}},mounted:function(){this.current=a["jsPlumb"].getInstance()},methods:{addOneAnchor:function(t,e){var n={isSource:!0,isTarget:!0,maxConnections:-1,endpoint:"Dot",paintStyle:{fill:"pink",radius:8,strokeWidth:1},hoverPaintStyle:{strokeWidth:2,stroke:"lightblue"},connector:["Bezier"],connectorStyle:{strokeWidth:2,stroke:"green"},connectorHoverStyle:{strokeWidth:2,stroke:"red"},connectorOverlays:[["Arrow",{width:14,length:14,location:1}]]},i="B"===e;this.current.addEndpoint(t,{anchor:[.25,+i,0,0]},n),this.current.addEndpoint(t,{anchor:[.5,+!i,0,0]},n),this.current.addEndpoint(t,{anchor:[.75,+i,0,0]},n),this.current.draggable(t,{containment:"regionId"})},dragWidget:function(t){var e=this;console.log(t);var n=t.originalEvent,i=n.clientX,s=n.clientY,o=this.$refs.region.getBoundingClientRect(),r=o.left,a=o.top,c=o.width,d=o.height;if(i>r&&i<r+c&&s>a&&s<a+d){var l="new_con_id_"+this.mainItems.length;this.mainItems.push({id:l,label:t.item.innerText,top:s-a-30+"px",left:i-r-110+"px"}),this.$nextTick((function(){e.addOneAnchor(l,t.item.innerText)}))}else alert(" Please drag to the content box ")}}},d=c,l=(n("f674"),n("2877")),u=Object(l["a"])(d,i,s,!1,null,"6e6651e6",null);e["default"]=u.exports},f674:function(t,e,n){"use strict";n("f751")},f751:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5b5671ce.5c3a5c88.js.map