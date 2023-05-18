<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
sadd key m1 m2 m3
String key = "front";
String m1 = "vue";
String m2 = "angular";
String m3 = "react";
String[] arr = {m1, m2, m3};
Long addNums = stringRedisTemplate.opsForSet().add(key, m1, m2, m3);
Long addNums = stringRedisTemplate.opsForSet().add(key, arr);

scard key
Long size = stringRedisTemplate.opsForSet().size(key);

sismember key m1
Boolean check = stringRedisTemplate.opsForSet().isMember(key, m1);

smembers key
Set&lt;String&gt; members = stringRedisTemplate.opsForSet().members(key);

srem key m1 m2
Long removeNums = stringRedisTemplate.opsForSet().remove(key, m1, m2);

sinter key1 key2
Set&lt;String&gt; intersect = stringRedisTemplate.opsForSet().intersect(key1, key2);
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
  name: "Set",
  components: {
    CodeContainer,
  },
};
</script>
