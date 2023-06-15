<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
終端(1)
subscribe order.q1

終端(2)
psubscribe order.*

終端(3)
publish order.q1 hello01
publish order.q2 hello02
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
  name: "BlockingQueue",
  components: {
    CodeContainer,
  },
};
</script>
