<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
回當前用戶資料夾
cd
回之前位置
cd -

建立
mkdir dir_name
vim file_name
touch file_name

刪除文件
rm file_name
刪除資料夾
rmdir dir_name/
刪除帶有文件的資料夾
rm -r dir_name/
刪除當前資料夾下的所有文件
rm -r ./*
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
head -n 10 file_name
tail -n 10 file_name
tail -n 10 -f file_name
systemctl status HelloWorld.service | tail -n 5

cat file_name
cat -n file_name

less file_name
page up
page down
/keyword
n: next
N: back
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
移動文件
mv file_name dir_name/
移動文件並改名
mv file_name dir_name/new_file_name
在當前資料夾下更換文件名稱
mv old_file_name new_file_name

複製文件
cp file_name dir_name/
複製資料夾內的文件
cp -r dir_name/ other_dir_name/
覆蓋文件
cp 123.txt 456.txt

查找
find /root -name file_name
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
  name: "File",
  components: {
    CodeContainer,
  },
};
</script>
