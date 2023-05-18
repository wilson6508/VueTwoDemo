<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="'volume'">
          <template v-slot:sourceCode>
            <pre>
docker volume ls
docker volume create html
docker volume inspect html // 查看詳細資訊
docker volume rm html
docker volume prune // 刪除未使用

-v [volume file]:[container file]
-v [volume dir]:[container dir]
docker run --name my_nginx -v html:/usr/share/nginx/html -p 80:80 -d nginx
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="'掛載'">
          <template v-slot:sourceCode>
            <pre>
-v [host file]:[container file]
-v [host dir]:[container dir]

docker run \
--name mysql \
-e MYSQL_ROOT_PASSWORD=1234 \
-p 3306:3306 \
-v /tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf \
-v /tmp/mysql/data:/var/lib/mysql \
-d mysql:5.7.25
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
