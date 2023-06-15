<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
select * from emp where dept_id = (select id from dept where condition);
select * from emp where salary > any (select salary from emp where condition);
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
select * from emp where (age, salary) = (select age, salary from emp where condition);
select * from emp where (age, salary) in (select age, salary from emp where condition);
select e.*, d.* from (select * from emp where condition) e left join dept d on e.dept_id = d.id;
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
  name: "SubQuery",
  components: {
    CodeContainer,
  },
};
</script>
