<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DDL'">
          <template v-slot:sourceCode>
            <pre>
Data Definition Language: 定義資料庫、資料表、欄位
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Database'">
          <template v-slot:sourceCode>
            <pre>
create database db_name;
create database if not exists db_name;
create database if not exists db_name default charset utf8mb4;

drop database db_name;
drop database if exists db_name;

show databases;
use db_name;
select database();
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Table'">
          <template v-slot:sourceCode>
            <pre>
show tables;
desc table_name;
show create table table_name;
drop table if exists table_name;
truncate table table_name;
alter table old_table_name rename to new_table_name;

alter table table_name add col_name varchar(30) comment '測試';                     // 新增欄位
alter table table_name modify col_name varchar(30) not null;                        // 修改欄位型別
alter table table_name rename column old_col_name to new_col_name;                  // 修改欄位名稱
alter table table_name change old_col_name new_col_name varchar(30) comment '測試'; // 修改欄位名稱和欄位型別
alter table table_name drop col_name;                                               // 刪除欄位
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
  name: "DDL",
  components: {
    CodeContainer,
  },
};
</script>
