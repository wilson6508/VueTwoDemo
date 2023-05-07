<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
查看進程
top
ps aux | less
ps aux | grep xxx

查看父子進程關係
ps -ef | less
ps -ef | grep xxx

刪除進程
kill PID
強制停止進程
kill -9 PID

查看進程網路資訊
netstat -anp
netstat -anp | less
netstat -anp | grep PID

查看網路端口號占用情況
netstat -nlp | grep port號
sudo lsof -i :port號

firewall-cmd --zone=public --add-port=5501/tcp --permanent
iptables -L -n

firewall-cmd --zone=public --remove-port=5501/tcp --permanent
firewall-cmd --reload
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
  name: "Process",
  components: {
    CodeContainer,
  },
};
</script>
