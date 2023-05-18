<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
hset key field value
stringRedisTemplate.opsForHash().put(key, field, value);

hsetnx key field value
Boolean success = stringRedisTemplate.opsForHash().putIfAbsent(key, field, value);

hmset key f1 v1 f2 v2
stringRedisTemplate.opsForHash().putAll(key, hashMap);

hincrby key field delta
Long afterIncr = stringRedisTemplate.opsForHash().increment(key, hashKey, delta);

hget key field
Object obj = stringRedisTemplate.opsForHash().get(key, field);

hgetall key
Map&lt;Object, Object&gt; entries = stringRedisTemplate.opsForHash().entries(key);

hkeys key
Set&lt;Object&gt; objects = stringRedisTemplate.opsForHash().entries(key).keySet();

hvals key
Collection&lt;Object&gt; values = stringRedisTemplate.opsForHash().entries(key).values();
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
  name: "Hash",
  components: {
    CodeContainer,
  },
};
</script>
