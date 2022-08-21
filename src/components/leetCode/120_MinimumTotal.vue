<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java'">
          <template v-slot:sourceCode>
            <pre>
public int minimumTotal(List&lt;List&lt;Integer&gt;&gt; triangle) {
    int[] array = new int[triangle.size() + 1];
    for (int i = triangle.size() - 1; i &gt;= 0; i--) {
        for (int j = 0; j &lt; triangle.get(i).size(); j++) {
            array[j] = Math.min(array[j], array[j + 1]) + triangle.get(i).get(j);
        }
    }
    return array[0];
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "MinimumTotal",
  components: {
    CodeContainer,
  },
};
</script>
