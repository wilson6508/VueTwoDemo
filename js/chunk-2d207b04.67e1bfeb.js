(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b04"],{a230:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"Java"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v("public boolean isValid(String s) {\n    char[] charArr = new char[s.length()];\n    int curIdx = 0;\n    for (char c : s.toCharArray()) {\n        switch (c) {\n            case '(':\n                charArr[curIdx++] = ')';\n                break;\n            case '{':\n                charArr[curIdx++] = '}';\n                break;\n            case '[':\n                charArr[curIdx++] = ']';\n                break;\n            default:\n                if (curIdx == 0 || charArr[--curIdx] != c) {\n                    return false;\n                }\n                break;\n        }\n    }\n    return curIdx == 0;\n}\n        ")])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"JavaScript"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('var isValid = function(s) {\n    const tempArr = [];\n\tlet curIdx = 0;\n\tfor (const str of [...s]) {\n\t\tswitch(str) {\n\t\t\tcase"(":\n\t\t\t\ttempArr[curIdx++] = ")";\n\t\t\t\tbreak;\n\t\t\tcase"{":\n\t\t\t\ttempArr[curIdx++] = "}";\n\t\t\t\tbreak;\n\t\t\tcase"[":\n\t\t\t\ttempArr[curIdx++] = "]";\n\t\t\t\tbreak;\n\t\t\tdefault:\t\n\t\t\t\tif (curIdx === 0 || tempArr[--curIdx] !== str) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t}\n\t}\n\treturn curIdx == 0;\n};\n        ')])]},proxy:!0}])})],1)])])},c=[],a=n("32f4"),s={name:"ValidParentheses",components:{CodeContainer:a["a"]}},o=s,u=n("2877"),d=Object(u["a"])(o,e,c,!1,null,null,null);r["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d207b04.67e1bfeb.js.map