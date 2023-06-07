<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
docker ps
docker rm container

docker start container
docker stop container
docker restart container

-p [host port]:[container port]
docker run
docker run -d -p 80:80 --name my_nginx nginx:latest
docker exec -it my_nginx bash

docker logs my_nginx
docker logs -f my_nginx
docker logs -tf --tail 10 my_nginx
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
顯示容器id
docker ps -aq

顯示最近創建的容器
docker ps -a -n=1

刪除容器
docker rm -f $(docker ps -aq)

強制停止
docker kill container

從容器複製文件到宿主機
docker cp 容器:容器內路徑 宿主機路徑
docker cp containerId:/home/test.java /home
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
  name: "Container",
  components: {
    CodeContainer,
  },
};
</script>
