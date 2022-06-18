<template>
  <div class="row m-5 text-center">
    <div class="col-2"></div>
    <div class="card col-8">
      <div class="card-body" style="height: 650px">
        <ul class="nav nav-tabs">
          <li class="nav-item" v-for="tab in tabArr" :key="tab.value">
            <span
              class="nav-link my-tab"
              :class="{ active: tab.value === chooseTab }"
              @click="chooseTab = tab.value"
            >
              {{ tab.label }}
            </span>
          </li>
        </ul>
        <div
          class="mt-4"
          v-for="(table, key) in infoObj"
          :key="key"
          v-show="key === chooseTab"
        >
          <BasicTable :tableInfo="table" />
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import BasicTable from "@/components/BasicTable.vue";

export default {
  name: "Description",
  components: {
    BasicTable,
  },
  data() {
    return {
      chooseTab: "plugin",
      tabArr: [
        { value: "plugin", label: "使用套件" },
        { value: "schedule", label: "工作日程" },
        { value: "reference", label: "參考資料" },
      ],
      infoObj: {
        plugin: {
          columns: [
            { key: "col1", label: "使用套件" },
            { key: "col2", label: "主要用途" },
          ],
          rows: [
            { col1: "jsplumb", col2: "連線功能、移動區塊功能" },
            { col1: "vuedraggable", col2: "拖曳功能" },
            { col1: "nanoid", col2: "建立uuid" },
            { col1: "bootstrap", col2: "版面CSS" },
          ],
        },
        schedule: {
          columns: [
            { key: "col1", label: "項目" },
            { key: "col2", label: "工時" },
          ],
          rows: [
            { col1: "找尋套件", col2: "大約 4 個小時" },
            { col1: "閱讀資料", col2: "大約 6 個小時" },
            { col1: "主要功能", col2: "大約 12 個小時" },
            { col1: "額外功能", col2: "大約 4 個小時" },
            { col1: "其它", col2: "大約 4 個小時" },
          ],
        },
        reference: {
          columns: [
            { key: "col1", label: "參考資料" },
            { key: "col2", label: "參考網址" },
          ],
          rows: [
            {
              col1: "jsPlumb",
              col2: "https://docs.jsplumbtoolkit.com/community/lib/anchors",
            },
            {
              col1: "jsplumb 中文基础教程",
              col2: "https://wdd.js.org/jsplumb-chinese-tutorial/#/",
            },
            {
              col1: "Jsplumb基础教程(vue+jsplumb+d3)",
              col2: "https://blog.csdn.net/weixin_39085822/article/details/106879459",
            },
            {
              col1: "jsPlumb應用指南(一)概念部分",
              col2: "https://www.twblogs.net/a/5cfe4bdebd9eee14029f03c5",
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.my-tab {
  color: black;
  cursor: pointer;
}
</style>