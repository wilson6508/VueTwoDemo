<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <div class="text-center m-5">
              <img src="@/assets/structure.png" alt="" /><br>
              <img src="@/assets/structure.png" alt="" />
            </div>
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "Resume",
  components: {
    CodeContainer,
  },
};
</script>
