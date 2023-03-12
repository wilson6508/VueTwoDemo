<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'if'">
          <template v-slot:sourceCode>
            <pre>
;表示在1行裡執行多個命令
-a: and
-o: or

age=20
if [ $age -gt 18 ]; then echo true; fi
if [ $age -gt 18 ] && [ $age -lt 65 ]; then echo true; fi
if [ $age -gt 18 -a $age -lt 65 ]; then echo true; fi
if [ $age -lt 18 -o $age -gt 65 ]; then echo true; fi
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'elif'">
          <template v-slot:sourceCode>
            <pre>
if [ "$1"x = "apple"x ]
then
        echo "a for $1"
elif [ "$1"x = "bird"x ]
then
        echo "b for bird"
elif [ "$1"x = "cat"x ]
then
        echo c for cat
else
        echo other
fi
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'case'">
          <template v-slot:sourceCode>
            <pre>
case $1 in
1)
        echo one
;;
2)
        echo two
;;
3)
        echo three
;;
*)
        echo other
;;
esac
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'for'">
          <template v-slot:sourceCode>
            <pre>
arr=(apple bird cat)
for noun in ${arr[@]}; do echo $noun; done

for (( i=1; i&lt;=$1; i++ ))
do
    sum=$[ $sum + $i]
done
echo $sum
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'while'">
          <template v-slot:sourceCode>
            <pre>
a=1
while [ $a -le $1 ]
do
#    sum=$[$sum+$a]
#    a=$[$a+1]
    let sum+=a
    let a++
done
echo $sum
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
  name: "ControlFlow",
  components: {
    CodeContainer,
  },
};
</script>
