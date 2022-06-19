<template>
  <div class="row m-4">
    <!--3個按鈕-->
    <div class="col-12 text-end mb-3">
      <button type="button" class="btn btn-primary btn-sm ms-2" @click="saveFile">儲存檔案</button>
      <button type="button" class="btn btn-primary btn-sm ms-2" @click="readFile">讀取檔案</button>
      <button type="button" class="btn btn-danger btn-sm ms-2" @click="clearArea">清空版面</button>
    </div>
    <!--左邊元件欄-->
    <div class="col-2">
      <div class="card">
        <div class="card-body" style="height: 650px">
          <Draggable v-for="(item, index) in leftItems" :key="index" @end="setItem">
            <div class="m-3 blue-item">{{ item }}</div>
          </Draggable>
        </div>
      </div>
    </div>
    <!--右邊畫布-->
    <div class="col-10">
      <div class="card">
        <Draggable>
          <div class="card-body" id="regionId" ref="region" style="height: 650px">
            <div
              class="blue-item"
              style="position: absolute; width: 220px"
              v-for="(item, index) in rightItems"
              :key="index"
              :id="item.id"
              :style="{ left: item.left, top: item.top }"
            >
              {{ item.label }}
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import { jsPlumb } from "jsplumb";
import { nanoid } from "nanoid";

export default {
  name: "FlowChart",
  components: {
    Draggable,
  },
  data() {
    return {
      // 左側元件
      leftItems: ["A", "B"],
      // 右側元件
      rightItems: [],
      // jsPlumb工具
      jsPlumbObj: null,
      // 錨點樣式
      anchorStyle: {
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        endpoint: "Dot", // Blank Dot Image Rectangle
        paintStyle: {
          fill: "pink",
        },
        hoverPaintStyle: {
          strokeWidth: 1,
          stroke: "blue",
        },
        connector: [
          "Bezier", // Bezier Flowchart StateMachine Straight
        ],
        connectorStyle: {
          stroke: "green",
          strokeWidth: 2,
        },
        connectorHoverStyle: {
          stroke: "red",
          strokeWidth: 2,
        },
        connectorOverlays: [["Arrow", { width: 14, length: 14, location: 1 }]],
      },
    };
  },
  mounted() {
    this.jsPlumbObj = jsPlumb.getInstance();
  },
  methods: {
    // 設置右側元件
    setItem(event) {
      const { clientX, clientY } = event.originalEvent;
      const { left, top, width, height } = this.$refs.region.getBoundingClientRect();
      if (clientX > left && clientX < left + width && clientY > top && clientY < top + height) {
        const mainId = nanoid();
        const label = event.item.innerText;
        this.rightItems.push({
          id: mainId,
          label: label,
          top: clientY - top - 30 + "px",
          left: clientX - left - 110 + "px",
        });
        this.$nextTick(() => {
          this.setAnchor(mainId, label);
        });
      }
    },
    // 設置右側元件錨點
    setAnchor(mainId, label) {
      const isBottom = label === "B";
      const tempArr = [
        { xVal: 0.25, yVal: +isBottom, uuid: mainId + "0.25" },
        { xVal: 0.5, yVal: +!isBottom, uuid: mainId + "0.5" },
        { xVal: 0.75, yVal: +isBottom, uuid: mainId + "0.75" },
      ];
      for (const temp of tempArr) {
        this.jsPlumbObj.addEndpoint(
          mainId,
          { anchor: [temp.xVal, temp.yVal, 0, 0], uuid: temp.uuid },
          this.anchorStyle
        );
      }
      this.jsPlumbObj.draggable(mainId, { containment: "regionId" }); // 限制節點拖曳區域
    },
    // 儲存於localStorage
    saveFile() {
      const positionArr = this.rightItems.map((e) => {
        const domObj = document.getElementById(e.id);
        e.top = domObj.style.top;
        e.left = domObj.style.left;
        return e;
      });
      localStorage.setItem("positionArr", JSON.stringify(positionArr));
      const lineArr = [];
      for (const line of this.jsPlumbObj.getAllConnections()) {
        lineArr.push({
          sourceId: line.sourceId + line.endpoints[0].anchor.x,
          targetId: line.targetId + line.endpoints[1].anchor.x,
        });
      }
      localStorage.setItem("lineArr", JSON.stringify(lineArr));
    },
    // 讀取localStorage
    readFile() {
      if (!localStorage.getItem("positionArr")) {
        return;
      }
      this.clearArea();
      this.$nextTick(() => {
        const positionArr = localStorage.getItem("positionArr");
        for (const item of JSON.parse(positionArr)) {
          this.rightItems.push(item);
        }
        this.$nextTick(() => {
          this.rightItems.forEach((e) => this.setAnchor(e.id, e.label));
          const lineArr = localStorage.getItem("lineArr");
          for (const item of JSON.parse(lineArr)) {
            this.jsPlumbObj.connect({
              uuids: [item.sourceId, item.targetId],
            });
          }
        });
      });
    },
    // 清除版面
    clearArea() {
      this.jsPlumbObj.deleteEveryEndpoint();
      this.rightItems = [];
    },
  },
};
</script>

<style scoped>
.blue-item {
  height: 60px;
  border-radius: 8px;
  padding: 20px 10px;
  text-align: center;
  cursor: pointer;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
  color: #084298;
}
</style>