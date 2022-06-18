<template>
  <div class="row m-4">
    <div class="col-12 text-end mb-3">
      <button
        type="button"
        class="btn btn-primary btn-sm ms-2"
        @click="saveFile"
      >
        儲存檔案
      </button>
      <button
        type="button"
        class="btn btn-primary btn-sm ms-2"
        @click="readFile"
      >
        讀取檔案
      </button>
      <button
        type="button"
        class="btn btn-danger btn-sm ms-2"
        @click="clearArea"
      >
        清空版面
      </button>
    </div>
    <div class="col-2">
      <div class="card">
        <div class="card-body" style="height: 650px">
          <Draggable @end="setItem">
            <div
              class="m-3 blue-item"
              v-for="(item, index) in leftItems"
              :key="index"
            >
              {{ item }}
            </div>
          </Draggable>
        </div>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
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
      leftItems: ["A", "B"],
      rightItems: [],
      jsPlumbObj: null,
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
    setItem(event) {
      const { clientX, clientY } = event.originalEvent;
      const { left, top, width, height } =
        this.$refs.region.getBoundingClientRect();
      if (
        clientX > left &&
        clientX < left + width &&
        clientY > top &&
        clientY < top + height
      ) {
        const uuid = nanoid();
        const label = event.item.innerText;
        this.rightItems.push({
          id: uuid,
          label: label,
          top: clientY - top - 30 + "px",
          left: clientX - left - 110 + "px",
        });
        this.$nextTick(() => {
          this.setAnchor(uuid, label);
        });
      }
    },
    setAnchor(uuid, label) {
      const isBottom = label === "B";
      const tempArr = [
        { xVal: 0.25, yVal: +isBottom },
        { xVal: 0.5, yVal: +!isBottom },
        { xVal: 0.75, yVal: +isBottom },
      ];
      for (const temp of tempArr) {
        this.jsPlumbObj.addEndpoint(
          uuid,
          { anchor: [temp.xVal, temp.yVal, 0, 0] },
          this.anchorStyle
        );
      }
      this.jsPlumbObj.draggable(uuid, { containment: "regionId" }); // 限制節點拖曳區域
    },
    saveFile() {
      // sessionStorage.setItem("msg03", JSON.stringify(this.rightItems));
      const tempArr = [];
      for (const temp of this.jsPlumbObj.getConnections()) {
        tempArr.push({
          sourceId: temp.sourceId,
          targetId: temp.targetId,
        });
      }
      this.jsPlumbObj.deleteEveryEndpoint();
      setTimeout(() => {
        for (const item of tempArr) {
          this.jsPlumbObj.connect({
            source: item.sourceId,
            target: item.targetId,
          });
        }
      }, 2000);
    },
    readFile() {
      this.clearArea();
      const result = sessionStorage.getItem("msg03");
      for (const item of JSON.parse(result)) {
        this.rightItems.push(item);
      }
      this.$nextTick(() => {
        this.rightItems.forEach((e) => this.addOneAnchor(e.id));
      });
    },
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