(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6936"],{"1e6b":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v("@Service\npublic class TestService {\n\n    public BlockingQueue<Order> orderTasks = new ArrayBlockingQueue<>(10);\n\n    @PostConstruct\n    public void initialize() {\n        Thread thread = new Thread(this::test);\n        thread.start();\n    }\n\n    public void test() {\n        try {\n            Order take = orderTasks.take();\n            System.out.println(new Gson().toJson(take));\n            Thread.sleep(5000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        } finally {\n            test();\n        }\n    }\n\n}\n            ")])]},proxy:!0}])})],1)])])},s=[],o=t("32f4"),i={name:"BlockingQueue",components:{CodeContainer:o["a"]}},a=i,c=t("2877"),l=Object(c["a"])(a,r,s,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b6936.c3178797.js.map