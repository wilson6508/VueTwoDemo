<template>
  <div>
    <Navigation />
    <keep-alive include="BasicDemo">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
