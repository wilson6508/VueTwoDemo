<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Java'">
          <template v-slot:sourceCode>
            <pre>
public int uniqueMorseRepresentations(String[] words) {
	HashSet&lt;String&gt; hashSet = new HashSet&lt;&gt;();
	String[] mapping = new String[]
    {".-","-...","-.-.","-..",".","..-.","--.",
    "....","..",".---","-.-",".-..","--","-.",
    "---",".--.","--.-",".-.","...","-","..-",
    "...-",".--","-..-","-.--","--.."};
	for (String word : words) {
		StringBuilder stringBuilder = new StringBuilder();
		for (char c : word.toCharArray()) {
			stringBuilder.append(mapping[c - 'a']);
		}
		hashSet.add(stringBuilder.toString());
	}
	return hashSet.size();
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
  name: "UniqueMorseCode",
  components: {
    CodeContainer,
  },
};
</script>
