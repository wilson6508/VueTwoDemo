<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'delete_log.sh'">
          <template v-slot:sourceCode>
            <pre>
#!/bin/bash

YEAR=$(date +%Y)
MONTH=$(date +%m)

if [ $MONTH -eq 1 ]
then
  YEAR=$[$YEAR-1]
  PRE_MONTH=12
else
  PRE_MONTH=$[$MONTH-1]
fi

if [ $PRE_MONTH -le 9 ]
then
  PRE_MONTH=0$PRE_MONTH
fi

DIR=/home/hello/logs/
FILES=$( ls $DIR | grep ^$YEAR$PRE_MONTH.*\.log$ )
cd $DIR; rm -f $FILES
echo done
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
  name: "DeleteLog",
  components: {
    CodeContainer,
  },
};
</script>
