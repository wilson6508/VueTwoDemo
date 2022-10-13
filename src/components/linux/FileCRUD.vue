<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
建立
mkdir dirName
vim fileName
touch /home/fileName

讀取
cat fileName
more fileName
less fileName

刪除
rmdir dirName
rm -r dirName/
rm fileName

複製
cp -r dirName/ /home/
cp fileName /home/

移動
mv fileName /home/

更名
mv oldFileName newFileName

查找
find /root -name fileName
find /root -name "*.cfg"
find /root -user userName
find /root -size +2M
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
  name: "FileCRUD",
  components: {
    CodeContainer,
  },
};
</script>
