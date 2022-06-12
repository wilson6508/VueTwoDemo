<template>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/1_navigation/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
