<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="d-flex justify-content-start">
        <div class="mt-2 mb-1 text-light">
          <a class="ms-3 navbar-brand" style="cursor: pointer">首頁</a>
          <a class="ms-3 navbar-brand" style="cursor: pointer">美國股市</a>
          <a class="ms-3 navbar-brand" style="cursor: pointer">運動賽事</a>
          <a class="ms-3 navbar-brand" style="cursor: pointer">Test01</a>
          <a class="ms-3 navbar-brand" style="cursor: pointer">Test02</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      test: 123,
    };
  },
};
</script>
