(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a47"],{"3c67":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row m-4"},[o("div",{staticClass:"col-md-8 col-12"},[o("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[o("pre",[e._v("select * from emp where dept_id = (select id from dept where condition);\nselect * from emp where salary > any (select salary from emp where condition);\n            ")])]},proxy:!0}])})],1)]),o("div",{staticClass:"row m-4"},[o("div",{staticClass:"col-md-8 col-12"},[o("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[o("pre",[e._v("select * from emp where (age, salary) = (select age, salary from emp where condition);\nselect * from emp where (age, salary) in (select age, salary from emp where condition);\nselect e.*, d.* from (select * from emp where condition) e left join dept d on e.dept_id = d.id;\n            ")])]},proxy:!0}])})],1)])])},n=[],s=o("32f4"),c={name:"SubQuery",components:{CodeContainer:s["a"]}},a=c,i=o("2877"),l=Object(i["a"])(a,r,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c4a47.a7dc58f1.js.map