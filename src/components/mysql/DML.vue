<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DML'">
          <template v-slot:sourceCode>
            <pre>
Data Manipulation Language: 增刪改資料表
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
insert into table_name values (v1, v2);
insert into table_name (k1, k2) values (v1, v2), (v3, v4);
update table_name set k1 = v1, k2 = v2 where condition;
delete from table_name where condition;
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
  name: "DML",
  components: {
    CodeContainer,
  },
};
</script>
