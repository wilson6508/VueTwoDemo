<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-for="(item, itemIndex) in routesArr" :key="itemIndex">
            <!--無children-->
            <li v-if="item.children.length === 0" class="me-2">
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
        { label: "功能說明", path: "/Description", children: [] },
        { label: "功能展示", path: "/BasicDemo", children: [] },
        { label: "中國測試", path: "/ChinaTest", children: [] },
        { label: "下載測試", path: "/DownloadTest", children: [] },
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
