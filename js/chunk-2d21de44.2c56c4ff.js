(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de44"],{d2dd:function(e,n,o){"use strict";o.r(n);var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{staticClass:"row m-4"},[o("div",{staticClass:"col-12"},[o("CodeContainer",{attrs:{title:"Group By"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[o("pre",[e._v("使用group by的查詢欄位: 一般為聚合函數及分組欄位 (查詢其它欄位無意義)\n\nselect col_name from table_name where c1 group by col_name having c2\nwhere c1 過濾 > group by col_name 分組 > 聚合函數 > having c2 過濾\nwhere 不能用聚合函數 having可以\n\nselect gender, count(*) from emp group by gender;\nselect gender, avg(age) from emp group by gender;\nselect address, count(*) from emp where age < 30 group by address having count(*) >= 3;\n            ")])]},proxy:!0}])})],1)])])},t=[],a=o("32f4"),c={name:"DQL",components:{CodeContainer:a["a"]}},s=c,u=o("2877"),d=Object(u["a"])(s,r,t,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21de44.2c56c4ff.js.map