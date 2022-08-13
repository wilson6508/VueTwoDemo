<template>
  <div class="row m-4">
    <div class="col-md-8 col-12" :key="priceKey">
      <HcExportBtn v-if="false" :id="priceFig.id" class="text-end mb-2" />
      <HcContainer :figInfo="priceFig" />
    </div>
    <div class="col-4">
      <div class="form-check form-check-inline" v-for="stockId in stockIdArr" :key="stockId">
        <input class="form-check-input" type="radio" name="RadioStockId" :id="stockId" :value="stockId" v-model="selectStockId">
        <label class="form-check-label" :for="stockId">{{ stockId }}</label>
      </div>
      <br>
      <div class="form-check form-check-inline mt-3" v-for="month in monthArr" :key="month">
        <input class="form-check-input" type="radio" name="RadioMonth" :id="month" :value="month" v-model="selectMonth">
        <label class="form-check-label" :for="month">{{ month }}</label>
      </div>
      <div class="row mt-3">
        <div class="col-12 text-center">
          <button @click="getData" type="button" class="col btn btn-primary btn-sm">查詢</button>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-12 mt-4" :key="volumeKey">
      <HcExportBtn v-if="false" :id="volumeFig.id" class="text-end mb-2" />
      <HcContainer :figInfo="volumeFig" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HcExportBtn from "@/components/shared/HcExportBtn.vue";
import HcContainer from "@/components/shared/HcContainer.vue";

export default {
  name: "UsaPrice",
  components: {
    HcExportBtn,
    HcContainer,
  },
  data() {
    return {
      selectStockId: "SPY",
      stockIdArr: ["AMAT", "QQQM", "SPY", "VTI"],
      selectMonth: "2022-05",
      monthArr: ["2022-04", "2022-05", "2022-06", "2022-07", "2022-08"],
      priceKey: 1,
      volumeKey: 2,
      priceFig: {
        id: "price",
        chart: {
          type: "line",
          // zoomType: "x",
          marginLeft: 150,
        },
        title: {
          text: "收盤價",
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          tickMarkPlacement: "on",
          tickInterval: 1,
          categories: [],
        },
        yAxis: {
          title: {
            text: "美元",
            rotation: 0,
            align: "high",
          },
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
            dataLabels: {
              enabled: false,
            },
          },
        },
        series: [],
      },
      volumeFig: {
        id: "volume",
        chart: {
          type: "column",
        },
        title: {
          text: "成交量",
        },
        legend: {
          enabled: false,
        },        
        plotOptions: {
          series: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        xAxis: {
          categories: [],
        },
        yAxis: {
          title: {
            text: "(股)",
            rotation: 0,
            // align: "high",
          },
        },
        series: [
        ],
      },
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      const apiUrl = "http://127.0.0.1:8087/databaseApi/normal";
      const postBody = {
        moduleName: "stock_read_usa_price_log",
        parameter: `${this.selectStockId};${this.selectMonth}`,
      };
      const { success, data: { result } } = await this.postApi(apiUrl, postBody);
      if (success) {
        this.priceFig.series = [];
        this.priceFig.series.push({
          name: this.selectStockId,
          data: result.map((item) => item.close),
        });
        this.volumeFig.series = [];
        this.volumeFig.series.push({
          name: this.selectStockId,
          data: result.map((item) => { 
            if (item.volume.includes("M")) {
              return parseFloat(item.volume) * 1000000;
            }
            return parseInt(item.volume)
          }),
        });
        const categories = new Set();
        result.forEach((item) => categories.add(item.date));
        this.priceFig.xAxis.categories = Array.from(categories);
        this.volumeFig.xAxis.categories = Array.from(categories);
        this.priceKey += 2;
        this.volumeKey += 2;
      }
    },
    postApi(url, params) {
      return axios
        .post(url, params)
        .then((res) => ({ success: res.data.success, data: res.data }))
        .catch((err) => ({ success: false, data: err }));
    },
  },
};
</script>
