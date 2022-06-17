<template>
  <div class="m-4">
    <div id="item_left" class="alert alert-primary" style="width: 200px"></div>
    <div id="item_right" class="alert alert-primary" style="width: 200px"></div>
    <button @click="test">OK</button>
    <button @click="test2">OK</button>
  </div>
</template>

<script>
/* eslint-disable */
import { jsPlumb } from "jsplumb";

export default {
  name: "Description",
  data() {
    return {};
  },
  methods: {
    test() {
      const jspObj = jsPlumb.getInstance();
      jspObj.connect({
        source: "item_left",
        target: "item_right",
        endpoint: "Rectangle",
      });

      jspObj.draggable("item_left");
      jspObj.draggable("item_right");

      jspObj.bind("click", function (conn, originalEvent) {
        jsPlumb.remove(conn.targetId + "");
      });

      // const common = {
      //   endpoint: "Rectangle",
      //   connector: ["Bezier"],
      //   anchor: ["Left", "Right"],
      // };
      // const jspObj = jsPlumb.getInstance();
      // jspObj.connect(
      //   {
      //     source: "item_left",
      //     target: "item_right",
      //     paintStyle: { stroke: "lightgray", strokeWidth: 3 },
      //     endpointStyle: {
      //       fill: "lightgray",
      //       outlineStroke: "darkgray",
      //       outlineWidth: 2,
      //     },
      //     overlays: [["Arrow", { width: 12, length: 12, location: 0.5 }]],
      //   },
      //   common
      // );
      // jspObj.draggable("item_left");
      // jspObj.draggable("item_right");
    },
    test2() {
      const jspObj = jsPlumb.getInstance();
      jspObj.remove("item_left");
    },
  },
  // beforeDestroy() {
  //   jspObj = null;
  // },
  // mounted() {
  //   jspObj.ready(() => {
  //     jspObj.connect({
  //       source: "item_left",
  //       target: "item_right",
  //       endpoint: "Dot",
  //     });
  //   });
  // },
};
</script>

<style scoped>
.item {
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
}
</style>