(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0495"],{"40ad":function(n,e,o){"use strict";o.r(e);var r=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("div",{staticClass:"row m-4"},[o("div",{staticClass:"col-md-8 col-12"},[o("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[o("pre",[n._v("docker ps\ndocker rm container\n\ndocker start container\ndocker stop container\ndocker restart container\n\n-p [host port]:[container port]\ndocker run\ndocker run -d -p 80:80 --name my_nginx nginx:latest\ndocker exec -it my_nginx bash\n\ndocker logs my_nginx\ndocker logs -f my_nginx\ndocker logs -tf --tail 10 my_nginx\n            ")])]},proxy:!0}])})],1)]),o("div",{staticClass:"row m-4"},[o("div",{staticClass:"col-md-8 col-12"},[o("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[o("pre",[n._v("顯示容器id\ndocker ps -aq\n\n顯示最近創建的容器\ndocker ps -a -n=1\n\n刪除容器\ndocker rm -f $(docker ps -aq)\n\n強制停止\ndocker kill container\n\n從容器複製文件到宿主機\ndocker cp 容器:容器內路徑 宿主機路徑\ndocker cp containerId:/home/test.java /home\n            ")])]},proxy:!0}])})],1)])])},t=[],c=o("32f4"),s={name:"Container",components:{CodeContainer:c["a"]}},a=s,d=o("2877"),i=Object(d["a"])(a,r,t,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0c0495.5d29b9df.js.map