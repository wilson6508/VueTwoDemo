(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcdc8"],{"2a14":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"DemoService"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("import org.springframework.stereotype.Service;\n\nimport java.util.Locale;\n\n@Service\npublic class DemoService {\n\n    public void demo01(int i) {\n        System.out.println(i * 10);\n    }\n\n    public void demo02(String str) {\n        System.out.println(str.toUpperCase(Locale.ROOT));\n    }\n\n}\n            ")])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"ApplicationTests"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v('import com.service.DemoService;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.MethodSource;\nimport org.junit.jupiter.params.provider.ValueSource;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\n\nimport java.util.stream.Stream;\n\n@SpringBootTest\nclass ApplicationTests {\n\n    @Autowired\n    DemoService demoService;\n\n    @ParameterizedTest\n    @ValueSource(ints = {1, 2, 3, 4, 5})\n    void testParameterized01(int i) {\n        demoService.demo01(i);\n    }\n\n    static Stream<String> stringProvider() {\n        return Stream.of("apple", "banana", "cat");\n    }\n\n    @ParameterizedTest\n    @MethodSource(value = "stringProvider")\n    void testParameterized02(String str) {\n        demoService.demo02(str);\n    }\n\n}\n\n            ')])]},proxy:!0}])})],1)])])},o=[],i=n("32f4"),a={name:"UnitTesting",components:{CodeContainer:i["a"]}},s=a,c=n("2877"),p=Object(c["a"])(s,r,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0bcdc8.c8231038.js.map