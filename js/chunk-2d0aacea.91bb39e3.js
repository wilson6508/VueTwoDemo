(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aacea"],{"131c":function(n,e,a){"use strict";a.r(e);var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("div",{staticClass:"row m-4"},[a("div",{staticClass:"col-md-8 col-12"},[a("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[a("pre",[n._v("docker build -t image_name:ver .\ndocker build -f dockerfile_name -t image_name:ver .\n            ")])]},proxy:!0}])})],1)]),a("div",{staticClass:"row m-4"},[a("div",{staticClass:"col-md-8 col-12"},[a("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[a("pre",[n._v("FROM openjdk:8-jdk-alpine\nCOPY ./docker-demo.jar /tmp/app.jar\nEXPOSE 8090\nENTRYPOINT java -jar /tmp/app.jar\n            ")])]},proxy:!0}])})],1)]),a("div",{staticClass:"row m-4"},[a("div",{staticClass:"col-md-8 col-12"},[a("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[a("pre",[n._v("FROM ubuntu:16.04\nENV JAVA_DIR=/usr/local\n\nCOPY ./jdk8.tar.gz $JAVA_DIR/\nCOPY ./docker-demo.jar /tmp/app.jar\n\nRUN cd $JAVA_DIR \\\n && tar -xf ./jdk8.tar.gz \\\n && mv ./jdk1.8.0_144 ./java8\n\nENV JAVA_HOME=$JAVA_DIR/java8\nENV PATH=$PATH:$JAVA_HOME/bin\n\nEXPOSE 8090\nENTRYPOINT java -jar /tmp/app.jar\n            ")])]},proxy:!0}])})],1)])])},o=[],r=a("32f4"),c={name:"Dockerfile",components:{CodeContainer:r["a"]}},s=c,d=a("2877"),i=Object(d["a"])(s,t,o,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0aacea.91bb39e3.js.map