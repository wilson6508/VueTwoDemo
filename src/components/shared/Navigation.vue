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
        {
          label: "Docker",
          path: "",
          children: [
            { label: "Compose", path: "/Docker/Compose" },
            { label: "Container", path: "/Docker/Container" },
            { label: "Dockerfile", path: "/Docker/Dockerfile" },
            { label: "Images", path: "/Docker/Images" },
            { label: "Network", path: "/Docker/Network" },
            { label: "Volume", path: "/Docker/Volume" },
          ],
        },
        {
          label: "Front",
          path: "",
          children: [
            { label: "Axios", path: "/front/Axios" },
          ],
        },
        {
          label: "Interview",
          path: "",
          children: [
            { label: "Resume", path: "/Interview/Resume" },
            { label: "Fpc", path: "/Interview/Fpc" },
            { label: "Pegatron", path: "/Interview/Pegatron" },
            { label: "Intelligent", path: "/Interview/Intelligent" },
            { label: "OneZeroFour", path: "/Interview/OneZeroFour" },
            { label: "Platinum", path: "/Interview/Platinum" },
          ],
        },
        { label: "文字說明", path: "/Description", children: [] },
        { label: "功能展示", path: "/FlowChart", children: [] },
        { label: "UsaStock", path: "/UsaPrice", children: [] },
        { label: "Structure", path: "/Structure", children: [] },
        {
          label: "Java",
          path: "",
          children: [
            { label: "Generics", path: "/Java/Generics" },
            { label: "InnerClass", path: "/Java/InnerClass" },
            { label: "Lambda", path: "/Java/Lambda" },
            { label: "Reflection", path: "/Java/Reflection" },
          ],
        },
        {
          label: "LeetCode",
          path: "",
          children: [
            { label: "1_TwoSum", path: "/LeetCode/1_TwoSum" },
            { label: "9_PalindromeNumber", path: "/LeetCode/9_PalindromeNumber" },
            { label: "12_IntegerToRoman", path: "/LeetCode/12_IntegerToRoman" },
            { label: "17_LetterCombinations", path: "/LeetCode/17_LetterCombinations" },
            { label: "20_ValidParentheses", path: "/LeetCode/20_ValidParentheses" },
            { label: "120_MinimumTotal", path: "/LeetCode/120_MinimumTotal" },
            { label: "804_UniqueMorseCode", path: "/LeetCode/804_UniqueMorseCode" },
          ],
        },
        {
          label: "SpringBoot",
          path: "",
          children: [
            { label: "Actuator", path: "/SpringBoot/Actuator" },
            { label: "Aop", path: "/SpringBoot/Aop" },
            { label: "Cache", path: "/SpringBoot/Cache" },
            { label: "EhCache", path: "/SpringBoot/EhCache" },
            { label: "GoogleSheet", path: "/SpringBoot/GoogleSheet" },
            { label: "Lombok", path: "/SpringBoot/Lombok" },
            { label: "Profile", path: "/SpringBoot/Profile" },
            { label: "RequestTag", path: "/SpringBoot/RequestTag" },
            { label: "Retry", path: "/SpringBoot/Retry" },
            { label: "SimpleCache", path: "/SpringBoot/SimpleCache" },
            { label: "UnitTesting", path: "/SpringBoot/UnitTesting" },
          ],
        },
        {
          label: "Linux",
          path: "",
          children: [
            { label: "Archive", path: "/Linux/Archive" },
            { label: "Awk", path: "/Linux/Awk" },
            { label: "ControlFlow", path: "/Linux/ControlFlow" },
            { label: "DeleteLog", path: "/Linux/DeleteLog" },
            { label: "File", path: "/Linux/File" },
            { label: "Process", path: "/Linux/Process" },
          ],
        },
        {
          label: "MQ",
          path: "",
          children: [
            { label: "BlockingQueue", path: "/MQ/BlockingQueue" },
          ],
        },
        {
          label: "MySQL",
          path: "",
          children: [
            { label: "DCL", path: "/MySQL/DCL" },
            { label: "DDL", path: "/MySQL/DDL" },
            { label: "DML", path: "/MySQL/DML" },
            { label: "DQL", path: "/MySQL/DQL" },
            { label: "SubQuery", path: "/MySQL/SubQuery" },
          ],
        },
        {
          label: "Redis",
          path: "",
          children: [
            { label: "Hash", path: "/Redis/Hash" },
            { label: "Lock", path: "/Redis/Lock" },
            { label: "LogicalExpire", path: "/Redis/LogicalExpire" },
            { label: "Lua", path: "/Redis/Lua" },
            { label: "Mutex", path: "/Redis/Mutex" },
            { label: "Set", path: "/Redis/Set" },
            { label: "SortedSet", path: "/Redis/SortedSet" },
            { label: "Streams", path: "/Redis/Streams" },
            { label: "String", path: "/Redis/String" }
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
