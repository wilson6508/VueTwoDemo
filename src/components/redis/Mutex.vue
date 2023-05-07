<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
public Person queryWithMutex(String key) {
    String json = stringRedisTemplate.opsForValue().get(key);
    if (Strings.isNotEmpty(json)) {
        return gson.fromJson(json, Person.class);
    }
    Person person = null;
    String lockKey = "lock_" + key;
    try {
        boolean isLock = getLock(lockKey);
        if (!isLock) {
            Thread.sleep(2000);
            return queryWithMutex(key);
        }
        // 查詢資料庫 重建緩存
        Thread.sleep(1000);
        person = new Person();
        stringRedisTemplate.opsForValue().set(key, gson.toJson(person), 5, TimeUnit.MINUTES);
    } catch (InterruptedException e) {
        e.printStackTrace();
    } finally {
        removeLock(lockKey);
    }
    return person;
}
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
  name: "Mutex",
  components: {
    CodeContainer,
  },
};
</script>
