<template>
  <div class="row m-4">
    <!-- <div class="col-12 text-end mb-3">
      <button type="button" class="btn btn-primary btn-sm ms-2">
        儲存檔案
      </button>
      <button type="button" class="btn btn-primary btn-sm ms-2">
        讀取檔案
      </button>
      <button
        type="button"
        class="btn btn-danger btn-sm ms-2"
        @click="clearArea"
      >
        清空版面
      </button>
    </div> -->
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
      <div class="card">
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

export default {
  name: "BasicDemo",
  components: {
    draggable,
  },
  data() {
    return {
      sideItems: ["A", "B"],
      mainItems: [],
      current: null,
    };
  },
  mounted() {
    this.current = jsPlumb.getInstance();
  },
  methods: {
    addOneAnchor(idStr, aabb) {
      let anchorStyle = {
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        // Set the type of endpoint
        endpoint: "Dot",
        // Set the style of anchor
        paintStyle: {
          fill: "pink",
          radius: 8,
          strokeWidth: 1,
        },
        hoverPaintStyle: {
          strokeWidth: 2,
          stroke: "lightblue",
        },
        // Set connection line
        // connector: "StateMachine",
        connector: [
          "Bezier",
          // { gap: 10, cornerRadius: 5, alwaysRespectStubs: true },
        ],
        // Set the style of line
        connectorStyle: {
          strokeWidth: 2,
          stroke: "green",
        },
        connectorHoverStyle: {
          strokeWidth: 2,
          stroke: "red",
        },
        // Set the style of arrow
        connectorOverlays: [["Arrow", { width: 14, length: 14, location: 1 }]],
        // anchors: ["Right", "Left"],
      };
      const isBottom = aabb === "B";
      this.current.addEndpoint(
        idStr,
        { anchor: [0.25, +isBottom, 0, 0] },
        anchorStyle
      );
      this.current.addEndpoint(
        idStr,
        { anchor: [0.5, +!isBottom, 0, 0] },
        anchorStyle
      );
      this.current.addEndpoint(
        idStr,
        { anchor: [0.75, +isBottom, 0, 0] },
        anchorStyle
      );
      this.current.draggable(idStr, { containment: "regionId" }); // 限制節點拖曳區域
    },
    dragWidget(event) {
      console.log(event);
      const { clientX, clientY } = event.originalEvent;
      const { left, top, width, height } =
        this.$refs.region.getBoundingClientRect();
      if (
        clientX > left &&
        clientX < left + width &&
        clientY > top &&
        clientY < top + height
      ) {
        const curConId = "new_con_id_" + this.mainItems.length;
        this.mainItems.push({
          id: curConId,
          label: event.item.innerText,
          top: clientY - top - 30 + "px",
          left: clientX - left - 110 + "px",
        });
        this.$nextTick(() => {
          this.addOneAnchor(curConId, event.item.innerText);
        });
      } else {
        alert(" Please drag to the content box ");
      }
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