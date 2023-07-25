(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4f8d"],{"095c":function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"row m-4"},[e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"pom.xml",language:"html"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n            ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"gradle",language:"html"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("compile group: 'org.springframework.boot', name: 'spring-boot-starter-actuator'\n            ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"application.yml"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n  endpoint:\n    shutdown:\n      enabled: true\n        ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"application.properties"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("management.endpoints.web.exposure.include=*\nmanagement.endpoint.shutdown.enabled=true\n        ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"postman"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("Get\nhttp://127.0.0.1:8086/actuator/env\nhttp://127.0.0.1:8086/actuator/health\nhttp://127.0.0.1:8086/actuator/scheduledtasks\nhttp://127.0.0.1:8086/actuator/metrics/system.cpu.usage\n"),e("hr"),n._v("\nPost\nhttp://127.0.0.1:8086/actuator/shutdown\n        ")])]},proxy:!0}])})],1),e("hr"),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"AdminApi",language:"html"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("<dependency>\n    <groupId>de.codecentric</groupId>\n    <artifactId>spring-boot-admin-starter-server</artifactId>\n    <version>2.6.1</version>\n</dependency>\n            ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("server.port=10001\n            ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"",language:"js"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("import de.codecentric.boot.admin.server.config.EnableAdminServer;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@EnableAdminServer\n@SpringBootApplication\npublic class Application {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n\n}\n            ")])]},proxy:!0}])})],1),e("hr"),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:"WebServerApi",language:"html"},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("<dependency>\n    <groupId>de.codecentric</groupId>\n    <artifactId>spring-boot-admin-starter-client</artifactId>\n    <version>2.6.1</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n            ")])]},proxy:!0}])})],1),e("div",{staticClass:"col-md-8 col-12"},[e("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[e("pre",[n._v("server:\n  port: 10002\nspring:\n  application:\n    name: WebServerApi\n  boot:\n    admin:\n      client:\n        url: http://127.0.0.1:10001\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n            ")])]},proxy:!0}])})],1)])])},r=[],a=e("32f4"),i={name:"Actuator",components:{CodeContainer:a["a"]}},s=i,c=e("2877"),d=Object(c["a"])(s,o,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a4f8d.8e4801de.js.map