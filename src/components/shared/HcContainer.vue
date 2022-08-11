<template>
  <Highcharts :options="figInfo" />
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";

More(Highcharts);
Highcharts.setOptions({
  yAxis: {
    minTickInterval: 1,
    labels: {
      formatter() {
        const decimals = parseInt(this.value) === this.value ? 0 : 1;
        return Highcharts.numberFormat(this.value, decimals, ".", ",");
      },
    },
  },
  lang: {
    thousandsSep: ",",
    resetZoom: "重置縮放比例",
  },
  credits: {
    enabled: false,
  },
  exporting: {
    buttons: false,
  },
});

export default {
  name: "HcContainer",
  components: {
    Highcharts: Chart,
  },
  props: {
    figInfo: {
      type: Object,
    },
  },
};
</script>
