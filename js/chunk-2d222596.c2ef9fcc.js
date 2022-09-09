(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222596"],{cddc:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:"Person"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v('public class Person {\n\n    private final String name;\n    private int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public void publicMethodWithParam(String str) {\n        System.out.println(str);\n    }\n\n    public void publicMethod() {\n        System.out.println("publicMethod");\n    }\n\n    public static void publicStaticMethod() {\n        System.out.println("publicStaticMethod");\n    }\n\n    private void privateMethod() {\n        System.out.println("privateMethod");\n    }\n\n    private static void privateStaticMethod() {\n        System.out.println("privateStaticMethod");\n    }\n\n}\n        ')])]},proxy:!0}])})],1),t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:"Example"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v('import java.lang.reflect.Field;\nimport java.lang.reflect.Method;\n\npublic class Example {\n    public static void main(String[] args) throws Exception {\n\n        Person person = new Person("Tom", 18);\n        Field[] fields = person.getClass().getDeclaredFields();\n        for (Field field : fields) {\n            if (field.getName().equals("name")) {\n                field.setAccessible(true);\n                field.set(person, "Amy");\n            }\n        }\n\n        Method[] methods = person.getClass().getDeclaredMethods();\n        for (Method method : methods) {\n            if (method.getName().equals("publicMethodWithParam")) {\n                method.invoke(person, "ABC");\n            }\n            if (method.getName().equals("publicMethod")) {\n                method.invoke(person);\n            }\n            if (method.getName().equals("publicStaticMethod")) {\n                method.invoke(null);\n            }\n            if (method.getName().equals("privateMethod")) {\n                method.setAccessible(true);\n                method.invoke(person);\n            }\n            if (method.getName().equals("privateStaticMethod")) {\n                method.setAccessible(true);\n                method.invoke(person);\n            }\n        }\n\n    }\n}\n        ')])]},proxy:!0}])})],1)])])},o=[],a=t("32f4"),s={name:"Reflection",components:{CodeContainer:a["a"]}},l=s,r=t("2877"),d=Object(r["a"])(l,i,o,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d222596.c2ef9fcc.js.map