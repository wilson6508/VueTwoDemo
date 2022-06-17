<template>
  <div class="row m-4">
    <div class="col-12 text-end mb-3">
      <button
        type="button"
        class="btn btn-primary btn-sm ms-2"
        @click="download"
      >
        下載檔案
      </button>
      <button
        type="button"
        class="btn btn-primary btn-sm ms-2"
        @click="saveChart"
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
        <div class="card-body" style="height: 700px">
          <draggable @end="dragWidget">
            <div
              class="m-3 blue-item"
              v-for="(item, index) in sideItems"
              :key="index"
            >
              {{ item }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
    <div class="col-10">
      <div class="card" ref="card">
        <div class="card-body" id="regionId" ref="region" style="height: 700px">
          <div
            class="blue-item"
            style="position: absolute; width: 220px"
            v-for="(item, index) in mainItems"
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
import draggable from "vuedraggable";
import { jsPlumb } from "jsplumb";
import { nanoid } from "nanoid";
import html2canvas from "html2canvas";

export default {
  name: "FlowChart",
  components: {
    draggable,
  },
  data() {
    return {
      sideItems: ["蘋果", "芭樂芭樂", "火龍果"],
      mainItems: [],
      jsPlumbObj: null,
    };
  },
  mounted() {
    this.jsPlumbObj = jsPlumb.getInstance();
  },
  methods: {
    addOneAnchor(idStr) {
      let anchorStyle = {
        isSource: true,
        isTarget: true,
        maxConnections: -1, // 限制端點連線數量
        endpoint: "Dot", // 端點形狀
        paintStyle: {
          fill: "pink",
          radius: 8,
          strokeWidth: 5,
        },
        hoverPaintStyle: {
          strokeWidth: 2,
          stroke: "lightblue",
        },
        connector: ["Flowchart"],
        connectorStyle: {
          strokeWidth: 2,
          stroke: "green",
        },
        connectorHoverStyle: {
          strokeWidth: 2,
          stroke: "red",
        },
        connectorOverlays: [["Arrow", { width: 14, length: 14, location: 1 }]],
      };
      this.jsPlumbObj.addEndpoint(idStr, { anchor: "Top" }, anchorStyle);
      this.jsPlumbObj.addEndpoint(idStr, { anchor: "Right" }, anchorStyle);
      this.jsPlumbObj.addEndpoint(idStr, { anchor: "Bottom" }, anchorStyle);
      this.jsPlumbObj.addEndpoint(idStr, { anchor: "Left" }, anchorStyle);
      this.jsPlumbObj.draggable(idStr, { containment: "regionId" }); // 限制節點拖曳區域
    },
    dragWidget(event) {
      const { clientX, clientY } = event.originalEvent;
      const { left, top, width, height } =
        this.$refs.region.getBoundingClientRect();
      if (
        clientX > left &&
        clientX < left + width &&
        clientY > top &&
        clientY < top + height
      ) {
        const curConId = nanoid();
        this.mainItems.push({
          id: curConId,
          label: event.item.innerText,
          top: clientY - top + "px",
          left: clientX - left + "px",
        });
        this.$nextTick(() => {
          this.addOneAnchor(curConId);
        });
      } else {
        alert(" Please drag to the content box ");
      }
    },
    clearArea() {
      this.jsPlumbObj.deleteEveryEndpoint();
      this.mainItems = [];
    },
    saveChart() {
      // sessionStorage.setItem("msg03", JSON.stringify(this.mainItems));
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
        this.mainItems.push(item);
      }
      this.$nextTick(() => {
        this.mainItems.forEach((e) => this.addOneAnchor(e.id));
      });
    },
    download() {
      html2canvas(this.$refs.card).then((canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.setAttribute("download", "圖片canvas.png");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
      });
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