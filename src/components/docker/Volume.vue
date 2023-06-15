<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
將容器與數據分離
1. 數據的持久化
2. 容器間數據共享
3. 雙向綁定
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
匿名掛載
docker run -v /etc/nginx -p 80:80 -d nginx

具名掛載
docker run -v v-nginx:/etc/nginx -p 80:80 -d nginx

指定路徑掛載
docker run \
-v /home/mysql/conf:/etc/mysql/conf.d \
-v /home/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=1234 \
-p 3306:3306 \
-d mysql:5.7.25

繼承其它容器的volume
docker run \
--volumes-from 9e54cb1d266b \
-e MYSQL_ROOT_PASSWORD=1234 \
-p 3307:3306 \
-d mysql:5.7.25
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
docker volume ls
docker volume create html
docker volume inspect html // 查看詳細資訊
docker volume rm html
docker volume prune // 刪除未使用
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
  name: "Volume",
  components: {
    CodeContainer,
  },
};
</script>
