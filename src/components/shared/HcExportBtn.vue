<template>
  <div>
    <div class="form-check form-check-inline form-switch me-0 ps-2">
      <div class="dropdown d-inline-block">
        <button
          class="btn btn-dark btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="d-none d-sm-inline-block">下載圖片</span>
        </button>
        <div class="dropdown-menu dropdown-menu-end py-0">
          <a class="dropdown-item" style="cursor: pointer" @click="exportFig('png')">下載 PNG 圖檔</a>
          <a class="dropdown-item" style="cursor: pointer" @click="exportFig('jpeg')">下載 JPEG 圖檔</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" style="cursor: pointer" @click="exportFig('full')">圖片全幕</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import offlineExporting from "highcharts/modules/offline-exporting";

exportingInit(Highcharts);
offlineExporting(Highcharts);

export default {
  name: "HcExportBtn",
  props: {
    id: String,
  },
  methods: {
    exportFig(choose) {
      const chart = Highcharts.charts.filter((e) => e !== undefined).find((e) => e.userOptions.id === this.id);
      if (choose === "full") {
        chart.fullscreen.toggle();
      } else {
        chart.exportChartLocal({
          type: `image/${choose}`,
          filename: "chart",
        });
      }
    },
  },
};
</script>
