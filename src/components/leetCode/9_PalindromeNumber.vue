<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java(1)'">
          <template v-slot:sourceCode>
            <pre>
public boolean isPalindrome(int x) {
    if (x &lt; 0) {
        return false;
    }
    String str = String.valueOf(x);
    List&lt;String&gt; list = Arrays.asList(str.split(""));
    Collections.reverse(list);
    String temp = String.join("", list);
    return str.equals(temp);
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java(2)'">
          <template v-slot:sourceCode>
            <pre>
public boolean isPalindrome(int x) {
    if (x &lt; 0) {
        return false;
    }
    char[] chars = String.valueOf(x).toCharArray();
    for (int i = 0; i &lt; chars.length / 2; i++) {
        if (chars[i] != chars[chars.length - i - 1]) {
            return false;
        }
    }
    return true;
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'JavaScript(1)'">
          <template v-slot:sourceCode>
            <pre>
var isPalindrome = function (x) {
    const str = String(x);
    const tempArr = [...str];
    for (let i = 0; i &lt; Math.floor(tempArr.length / 2); i++) {
        if (tempArr[i] !== tempArr.at(-(i + 1))) {
            return false;
        }
    }
    return true;
};
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'JavaScript(2)'">
          <template v-slot:sourceCode>
            <pre>
var isPalindrome = function (x) {
    const str = String(x);
    const tempArr = [...str];
    tempArr.reverse();
    const reverseStr = tempArr.join("");
    return str === reverseStr;
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
  name: "PalindromeNumber",
  components: {
    CodeContainer,
  },
};
</script>
