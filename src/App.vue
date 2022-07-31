<template>
  <div>
    <Navigation />
    <keep-alive include="FlowChart">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navigation from "@/components/shared/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
