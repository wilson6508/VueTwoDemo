<template>
  <div>
    <div class="row m-4">
      <div class="col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
set key value
stringRedisTemplate.opsForValue().set("name", "Tom");

get key
String str = stringRedisTemplate.opsForValue().get(key);

del key
Boolean isSuccess = stringRedisTemplate.delete(key);

set key value ex 300
stringRedisTemplate.opsForValue().set(k1, v1, 5, TimeUnit.MINUTES);

expire key 20
Boolean success = stringRedisTemplate.expire(key, 20, TimeUnit.SECONDS);

set key value ex 5 nx
Boolean success = stringRedisTemplate.opsForValue().setIfAbsent(key, threadId, timeoutSec, TimeUnit.SECONDS);
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
  name: "String",
  components: {
    CodeContainer,
  },
};
</script>
