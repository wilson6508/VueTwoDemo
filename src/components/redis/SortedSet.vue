<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
zadd key score member
String key = "students";
String member = "Tom";
double score = 70.0;
Boolean isSuccess = stringRedisTemplate.opsForZSet().add(key, member, score);

zcard key
Long size = stringRedisTemplate.opsForZSet().size(key);

zscore key member
Double score = stringRedisTemplate.opsForZSet().score(key, member);

zcount key minScore maxScore
Long countNums = stringRedisTemplate.opsForZSet().count(key, 0, 59);

zrange key minRank maxRank
Set&lt;String&gt; top3 = stringRedisTemplate.opsForZSet().range(key, 0, 2);
zrevrange key minRank maxRank
Set&lt;String&gt; top3 = stringRedisTemplate.opsForZSet().reverseRange(key, 0, 2);

zrem key m1 m2
Long removeNums = stringRedisTemplate.opsForZSet().remove(key, m1, m2);
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
  name: "SortedSet",
  components: {
    CodeContainer,
  },
};
</script>
