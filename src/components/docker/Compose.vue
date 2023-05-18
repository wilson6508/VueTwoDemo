<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
vim docker-compose.yml
docker-compose build --no-cache
docker-compose up -d
docker-compose down
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "Compose",
  components: {
    CodeContainer,
  },
};
</script>
