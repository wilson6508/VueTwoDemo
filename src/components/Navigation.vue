<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-for="(item, itemIndex) in routesArr" :key="itemIndex">
            <li class="me-2">
              <router-link
                class="nav-link"
                active-class="active"
                style="color: white"
                :to="item.path"
                >{{ item.label }}</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routesArr: [
        { label: "文字說明", path: "/Description" },
        { label: "功能展示", path: "/FlowChart" },
        { label: "中國測試", path: "/ChinaTest" },
        { label: "下載測試", path: "/DownloadTest" },
      ],
    };
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
a {
  cursor: pointer;
}
.active {
  color: yellow !important;
}
</style>
