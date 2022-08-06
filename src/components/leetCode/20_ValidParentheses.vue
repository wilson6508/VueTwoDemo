<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java'">
          <template v-slot:sourceCode>
            <pre>
public boolean isValid(String s) {
    char[] charArr = new char[s.length()];
    int curIdx = 0;
    for (char c : s.toCharArray()) {
        switch (c) {
            case '(':
                charArr[curIdx++] = ')';
                break;
            case '{':
                charArr[curIdx++] = '}';
                break;
            case '[':
                charArr[curIdx++] = ']';
                break;
            default:
                if (curIdx == 0 || charArr[--curIdx] != c) {
                    return false;
                }
                break;
        }
    }
    return curIdx == 0;
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
var isValid = function(s) {
    const tempArr = [];
	let curIdx = 0;
	for (const str of [...s]) {
		switch(str) {
			case"(":
				tempArr[curIdx++] = ")";
				break;
			case"{":
				tempArr[curIdx++] = "}";
				break;
			case"[":
				tempArr[curIdx++] = "]";
				break;
			default:	
				if (curIdx === 0 || tempArr[--curIdx] !== str) {
					return false;
				}
				break;
		}
	}
	return curIdx == 0;
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
  name: "ValidParentheses",
  components: {
    CodeContainer,
  },
};
</script>
