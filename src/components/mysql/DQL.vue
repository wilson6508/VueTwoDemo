<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="'Group By'">
          <template v-slot:sourceCode>
            <pre>
使用group by的查詢欄位: 一般為聚合函數及分組欄位 (查詢其它欄位無意義)

select col_name from table_name where c1 group by col_name having c2
where c1 過濾 > group by col_name 分組 > 聚合函數 > having c2 過濾
where 不能用聚合函數 having可以

select gender, count(*) from emp group by gender;
select gender, avg(age) from emp group by gender;
select address, count(*) from emp where age &lt; 30 group by address having count(*) &gt;= 3;
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
  name: "DQL",
  components: {
    CodeContainer,
  },
};
</script>
