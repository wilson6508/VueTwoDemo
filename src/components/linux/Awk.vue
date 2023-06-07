<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'cut'">
          <template v-slot:sourceCode>
            <pre>
cut -d ":" -f 2,3 fileName
echo 123 321 | cut -d " " -f 2-
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'awk'">
          <template v-slot:sourceCode>
            <pre>
-F: 指定輸入文件分隔符 (不寫為切空格)
cat fileName | awk -F ":" '/pattern/{print $1 "," $2}'

-v: 賦值1個變量
p1="$1" p2="$2"
awk -v p1="$p1" -v p2="$p2" '{print p1 $var p2}' fileName

awk '{print $(NF-1),"\t",$NF}' fileName

ifconfig | grep -n ^$
ifconfig | awk '/^$/{print NR}'
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
<!--    <div class="row m-4">-->
<!--      <div class="col-md-8 col-12">-->
<!--        <CodeContainer :title="'convert.sh'">-->
<!--          <template v-slot:sourceCode>-->
<!--            <pre>-->
<!--#!/bin/sh-->

<!--source=$(pwd)/youtube.txt-->
<!--dest=$(pwd)/sql.txt-->
<!--prefix="INSERT IGNORE INTO test_table (country, type, code) VALUES (\047$1\047, \047$2\047, \047"-->
<!--suffix="\047);"-->
<!--awk -F '=' -v prefix="$prefix" -v suffix="$suffix" '{print prefix $2 suffix}' $source > $dest-->
<!--            </pre>-->
<!--          </template>-->
<!--        </CodeContainer>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row m-4">-->
<!--      <div class="col-md-8 col-12">-->
<!--        <CodeContainer :title="'youtube.txt'">-->
<!--          <template v-slot:sourceCode>-->
<!--            <pre>-->
<!--https://www.youtube.com/watch?v=codeabc123-->
<!--https://www.youtube.com/watch?v=codedef456-->
<!--            </pre>-->
<!--          </template>-->
<!--        </CodeContainer>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row m-4">-->
<!--      <div class="col-md-8 col-12">-->
<!--        <CodeContainer :title="'sql.txt'">-->
<!--          <template v-slot:sourceCode>-->
<!--            <pre>-->
<!--INSERT IGNORE INTO test_table (country, type, code) VALUES ('Usa', 'test', 'codabc123')-->
<!--INSERT IGNORE INTO test_table (country, type, code) VALUES ('Usa', 'test', 'codedef456')-->
<!--            </pre>-->
<!--          </template>-->
<!--        </CodeContainer>-->
<!--      </div>-->
<!--    </div>-->
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
