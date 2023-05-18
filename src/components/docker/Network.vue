<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
docker network ls
docker network create --driver bridge my-bridge

docker run -d --network host repository:tag
docker run -d --network none repository:tag
docker run -d --network my-bridge repository:tag

docker network inspect host
docker network inspect none
docker network inspect my-bridge

進到容器
ip addr
ping 8.8.8.8
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
  name: "Network",
  components: {
    CodeContainer,
  },
};
</script>
