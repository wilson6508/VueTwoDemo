<template>
  <div>
    <h2>{{ title }}</h2>
    <div :style="`width: ${width}%`">
      <code-highlight :language="language">
        <slot name="sourceCode" />
      </code-highlight>
    </div>
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
export default {
  name: "CodeContainer",
  components: {
    CodeHighlight,
  },
  props: {
    title: String,
    language: String,
    width: {
      type: Number,
      default: 70,
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
