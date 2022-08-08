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
            <!--有children-->
            <li v-else class="nav-item dropdown me-2">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                :style="`color: ${isChild(item.children)}`"
                >{{ item.label }}</a
              >
              <ul class="dropdown-menu">
                <li
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                >
                  <router-link
                    class="dropdown-item"
                    active-class="active"
                    :to="child.path"
                    >{{ child.label }}</router-link
                  >
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
        { label: "文字說明", path: "/Description", children: [] },
        { label: "功能展示", path: "/FlowChart", children: [] },
        // {
        //   label: "緩存功能",
        //   path: "",
        //   children: [
        //     { label: "基礎說明", path: "/CacheBasic" },
        //   ],
        // },
        {
          label: "LeetCode",
          path: "",
          children: [
            { label: "1_TwoSum", path: "/1_TwoSum" },
            { label: "9_PalindromeNumber", path: "/9_PalindromeNumber" },
            { label: "12_IntegerToRoman", path: "/12_IntegerToRoman" },
            { label: "20_ValidParentheses", path: "/20_ValidParentheses" },
          ],
        },
      ],
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
  methods: {
    isChild(children) {
      const paths = children.map((child) => child.path);
      return paths.includes(this.routePath) ? "yellow" : "white";
    },
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
  /* background-color: #0d6efd !important; */
}
</style>
