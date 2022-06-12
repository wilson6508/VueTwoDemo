<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-for="(item, itemIndex) in routesArr" :key="itemIndex">
            <!--無children-->
            <li v-if="item.children.length === 0" class="me-2">
              <router-link class="nav-link" active-class="active" style="color: white" :to="item.path">{{ item.label }}</router-link>
            </li>
            <!--有children-->
            <li v-else class="nav-item dropdown me-2">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style="color: white">{{ item.label }}</a>
              <ul class="dropdown-menu">
                <li v-for="(child, childIndex) in item.children" :key="childIndex">
                  <router-link class="dropdown-item" active-class="active" :to="child.path">{{ child.label }}</router-link>
                </li>
              </ul>
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
        { label: "首頁", path: "/Home", children: [] },
        { label: "隨便測試", path: "/123", children: [] },
        {
          label: "運動賽事",
          path: "",
          children: [
            { label: "美國職棒1", path: "11" },
            { label: "美國職棒2", path: "22" },
            { label: "美國職棒3", path: "33" },
          ],
        },
        {
          label: "運動賽事2",
          path: "",
          children: [
            { label: "美國職棒1", path: "11" },
            { label: "美國職棒2", path: "22" },
            { label: "美國職棒3", path: "33" },
          ],
        },
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
  color: yellow !important;;
  /* background-color: #0d6efd !important; */
}
</style>
