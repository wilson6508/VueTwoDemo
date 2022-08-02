<template>
  <div>
    <div class="row m-4">
      <CodeContainer :title="javaTitle" :language="javaLanguage">
        <template v-slot:sourceCode>
          <pre>
            public int[] twoSum(int[] nums, int target) {
                int[] answer = new int[2];
                Map&lt;Integer, Integer&gt; tempMap = new HashMap&lt;&gt;();
                for (int i = 0; i &lt; nums.length; i++) {
                    int check = target - nums[i];
                    if (tempMap.containsKey(check)) {
                        answer = new int[] { tempMap.get(check), i };
                        break;
                    }
                    tempMap.put(nums[i], i);
                }
                return answer;
            }
        </pre
          >
        </template>
      </CodeContainer>
    </div>
    <div class="row m-4">
      <CodeContainer :title="jsTitle" :language="jsLanguage">
        <template v-slot:sourceCode>
          <pre>
            var twoSum = function(nums, target) {
                let answer = [];
                const tempMap = new Map();
                for (let i = 0; i &lt; nums.length; i++) {
                    const check = target - nums[i];
                    if (tempMap.has(check)) {
                        answer = [tempMap.get(check), i];
                        break;
                    }
                    tempMap.set(nums[i], i);
                }
                return answer;
            };
        </pre
          >
        </template>
      </CodeContainer>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "TwoSum",
  components: {
    CodeContainer,
  },
  data() {
    return {
      javaTitle: "Java",
      javaLanguage: "js",
      jsTitle: "JavaScript",
      jsLanguage: "js",
    };
  },
};
</script>
