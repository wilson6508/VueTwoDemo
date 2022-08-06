<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java'">
          <template v-slot:sourceCode>
            <pre>
public String intToRoman(int num) {
    Map&lt;String, Integer&gt; tempMap = new LinkedHashMap&lt;&gt;();
    tempMap.put("M", 1000);
    tempMap.put("CM", 900);
    tempMap.put("D", 500);
    tempMap.put("CD", 400);
    tempMap.put("C", 100);
    tempMap.put("XC", 90);
    tempMap.put("L", 50);
    tempMap.put("XL", 40);
    tempMap.put("X", 10);
    tempMap.put("IX", 9);
    tempMap.put("V", 5);
    tempMap.put("IV", 4);
    tempMap.put("I", 1);
    StringBuilder answer = new StringBuilder();
    for (String key : tempMap.keySet()) {
        int quotient = num / tempMap.get(key);
        num -= quotient * tempMap.get(key);
        answer.append(String.join("", Collections.nCopies(quotient, key)));
    }
    return answer.toString();
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'JavaScript'">
          <template v-slot:sourceCode>
            <pre>
var intToRoman = function(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = "";
    for (const key of Object.keys(roman)) {
        const q = Math.floor(num / roman[key]);
        num -= q * roman[key];
        str += key.repeat(q);
    }
    return str;  
};
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
  name: "IntegerToRoman",
  components: {
    CodeContainer,
  },
};
</script>
