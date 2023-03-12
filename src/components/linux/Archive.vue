<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'convert.sh'">
          <template v-slot:sourceCode>
            <pre>
-z: 判斷值是否為空
[ $# -ne 1 ]
[ $? != 0 ]
[ $is_allowed != "+" ]
[ -d $1 ]
[ -z $2 ]
[ -z $login_user ]
------------------------------------------------------------------------------
DIR_NAME=$(basename $1)
DIR_PATH=$(cd $(dirname $1); pwd)
DATE=$(date +%y%m%d)
FILE=archive_${DIR_NAME}_$DATE.tar.gz
DEST=/root/archive/$FILE
------------------------------------------------------------------------------
crontab -l
crontab -e
0 2 * * * /root/scripts/daily_archive.sh /root/scripts
------------------------------------------------------------------------------
-i: 忽略大小寫
-m: max count
login_user=$(who | grep -i -m 1 $1 | awk '{print $1}')
is_allowed=$(who -T | grep -i -m 1 $1 | awk '{print $2}')
whole_msg=$(echo $* | cut -d " " -f 2-)
user_terminal=$(who | grep -i -m 1 $1 | awk '{print $2}')
echo $whole_msg | write $login_user $user_terminal
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
  name: "Archive",
  components: {
    CodeContainer,
  },
};
</script>
