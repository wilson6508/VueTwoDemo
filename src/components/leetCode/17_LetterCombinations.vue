<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java'">
          <template v-slot:sourceCode>
            <pre>
public List&lt;String&gt; letterCombinations(String digits) {
	if (digits == null || digits.isEmpty()) {
		return new ArrayList&lt;&gt;();
	}
	String[] mapping = new String[]
    {"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
	LinkedList&lt;String&gt; linkedList = new LinkedList&lt;&gt;();
	linkedList.addFirst("");
	for (int i = 0; i &lt; digits.length(); i++) {
		int idx = Integer.parseInt(String.valueOf(digits.charAt(i)));
		while(linkedList.getFirst().length() == i) {
			String first = linkedList.removeFirst();
			for (char c : mapping[idx].toCharArray()) {
				linkedList.add(first + c);
			}
		}
	}
	return linkedList;
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
  name: "LetterCombinations",
  components: {
    CodeContainer,
  },
};
</script>
