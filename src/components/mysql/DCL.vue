<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DCL'">
          <template v-slot:sourceCode>
            <pre>
Data Control Language: 用戶管理 權限管理
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
查詢用戶
use mysq;
selct * from user;

創建用戶
create user 'user_name'@'localhost' identified by '1234';
create user 'user_name'@'%' identified by '1234';

刪除用戶
drop user 'user_name'@'%';

查看當前用戶
select user();
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
查詢權限
show grants for 'user_name'@'localhost';

授予權限
grant all on db_name.table_name to 'user_name'@'localhost';
                  (*.*)

撤銷權限
revoke all on db_name.table_name from 'user_name'@'localhost';
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
  name: "DCL",
  components: {
    CodeContainer,
  },
};
</script>
