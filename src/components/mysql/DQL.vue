<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DQL'">
          <template v-slot:sourceCode>
            <pre>
Data Query Language: 查詢資料表
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'group by'">
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
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'limit'">
          <template v-slot:sourceCode>
            <pre>
select col_name from table_name limit start_idx, query_nums;

start_idx = (page - 1) * query_nums
start_idx = 0 可以不寫

# 查第一頁10條
select * from emp limit 10;
select * from emp limit 0, 10;

# 查第二頁10條
select * from emp limit 10, 10;
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'執行順序'">
          <template v-slot:sourceCode>
            <pre>
select
    col_name   (4)
from
    table_name (1)
where
    condition  (2)
group by
    col_name   (3)
having
    分組後的條件(3)
order by
    col_name   (5)
limit
    分頁參數    (6)
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
