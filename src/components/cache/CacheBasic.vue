<template>
  <div class="row m-4">
    <CodeContainer :title="title" :language="language">
      <template v-slot:sourceCode>
        <pre>
          import java.util.HashMap;

          public class Ex1 {
              public static void main(String[] args) {
                  HashMap&lt;String, Integer&gt; hashMap = new HashMap&lt;&gt;();
                  hashMap.put("C", 1);
                  hashMap.put("A", 2);
                  hashMap.put("B", 3);
                  System.out.println(hashMap); // {A=2, B=3, C=1}
              }
          }
        </pre>
      </template>
    </CodeContainer>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "CacheBasic",
  components: {
    CodeContainer,
  },
  data() {
    return {
      title: "pom file",
      width: 60,
      language: "js",
    };
  },
};
</script>
