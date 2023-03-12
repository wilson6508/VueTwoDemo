<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'convert.sh'">
          <template v-slot:sourceCode>
            <pre>
#!/bin/sh

source=$(pwd)/youtube.txt
dest=$(pwd)/sql.txt
prefix="INSERT IGNORE INTO test_table (country, type, code) VALUES (\047$1\047, \047$2\047, \047"
suffix="\047);"
awk -F '=' -v prefix="$prefix" -v suffix="$suffix" '{print prefix $2 suffix}' $source > $dest
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'youtube.txt'">
          <template v-slot:sourceCode>
            <pre>
https://www.youtube.com/watch?v=codeabc123
https://www.youtube.com/watch?v=codedef456
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'sql.txt'">
          <template v-slot:sourceCode>
            <pre>
INSERT IGNORE INTO test_table (country, type, code) VALUES ('Usa', 'test', 'codabc123')
INSERT IGNORE INTO test_table (country, type, code) VALUES ('Usa', 'test', 'codedef456')
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
  name: "Awk",
  components: {
    CodeContainer,
  },
};
</script>
