<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- <div :style="`width: ${width}%`"> -->
    <code-highlight :language="language">
      <slot name="sourceCode" />
    </code-highlight>
    <!-- </div> -->
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-tomorrow.css"; // V
import "vue-code-highlight/themes/window.css";
// import "vue-code-highlight/themes/duotone-sea.css";
// import "vue-code-highlight/themes/prism-coy.css";
// import "vue-code-highlight/themes/prism-dark.css";
// import "vue-code-highlight/themes/prism-funky.css";
// import "vue-code-highlight/themes/prism-okaidia.css"; // V
// import "vue-code-highlight/themes/prism-solarizedlight.css";
// import "vue-code-highlight/themes/prism-twilight.css";
// import "vue-code-highlight/themes/prism.css"; // V
export default {
  name: "CodeContainer",
  components: {
    CodeHighlight,
  },
  props: {
    title: String,
    language: {
      type: String,
      default: () => "js",
    },
    width: {
      type: Number,
      default: () => {
        const mobileDevices = [
          "Android",
          "webOS",
          "iPhone",
          "iPad",
          "iPod",
          "BlackBerry",
          "Windows Phone",
        ];
        const isMobileDevice = mobileDevices.some((e) =>
          navigator.userAgent.match(e)
        );
        return isMobileDevice ? 100 : 50;
      },
    },
  },
};
</script>

<style>
.language-html {
  font-size: 20px !important;
}
.language-js {
  font-size: 20px !important;
}
</style>
