(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3105"],{"5abe":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@RequestParam"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('http://localhost:7000/test?age=18&name=Tom&name=Amy\n\n@GetMapping("/test")\npublic String test(@RequestParam("age") Integer age,\n                   @RequestParam("name") List<String> names,\n                   @RequestParam Map<String, String> params) {\n\tSystem.out.println(age);\t// 18\n\tSystem.out.println(names);\t// [Tom, Amy]\n\tSystem.out.println(params);\t// {age=18, name=Tom}\n\treturn "test";\n}\n            ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@RequestAttribute"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('http://localhost:7000/test\n\n@GetMapping("/test")\npublic String test(HttpServletRequest request) {\n\trequest.setAttribute("name", "Tom");\n\trequest.setAttribute("age", 18);\n\treturn "forward:/demo";\n}\n\n@GetMapping("/demo")\n@ResponseBody\npublic String demo(@RequestAttribute("name") String name,\n                   @RequestAttribute("age") Integer age,\n                   HttpServletRequest request) {\n\tSystem.out.println(name);       // Tom\n\tSystem.out.println(age);        // 18\n\tObject objName = request.getAttribute("name");\n\tObject objAge = request.getAttribute("age");\n\tSystem.out.println(objName);    // Tom\n\tSystem.out.println(objAge);     // 18\n\treturn "demo";\n}\n            ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@PathVariable"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('http://localhost:7000/person/tom/test/18\n\n@GetMapping("/person/{name}/test/{age}")\npublic String person(@PathVariable("name") String name,\n                     @PathVariable("age") Integer age,\n                     @PathVariable Map<String, String> params) {\n\tSystem.out.println(name);\t// tom\n\tSystem.out.println(age);\t// 18\n\tSystem.out.println(params); // {name=tom, age=18}\n\treturn "person";\n}\n            ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@RequestBody"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('http://127.0.0.1:7000/test\n{\n    "name": "Tom",\n    "age": 18\n}\n\n@PostMapping("/test")\npublic String test(@RequestBody String content) {\n\tSystem.out.println(content); // { "name": "Tom", "age": 18}\n\treturn "test";\n}\n            ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@RequestHeader"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('http://localhost:7000/test\n\n@GetMapping("/test")\npublic String test(@RequestHeader("User-Agent") String userAgent,\n                   @RequestHeader Map<String, String> headers) {\n\tSystem.out.println(userAgent); // Mozilla/5.0 (Windows NT 6.3; Win64; x64) App...\n\tSystem.out.println(headers);   // {host=localhost:7000, ...}\n\treturn "test";\n}\n            ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"@CookieValue"},scopedSlots:t._u([{key:"sourceCode",fn:function(){return[n("pre",[t._v('@CookieValue("_ga") String _ga,\n@CookieValue("_ga") Cookie cookie\n\ncookie.getName()\ncookie.getValue()\n            ')])]},proxy:!0}])})],1)])])},r=[],s=n("32f4"),a={name:"RequestTag",components:{CodeContainer:s["a"]}},i=a,u=n("2877"),l=Object(u["a"])(i,o,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d3105.938e4c41.js.map