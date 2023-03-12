<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
Random random = new Random();
Supplier&lt;Person&gt; supplier = () -> {
  Person person = new Person(); // select from db
  person.setName("Tom" + random.nextInt(10));
  person.setAge(random.nextInt(99));
  return person;
};
Person person = queryWithLogicalExpire("person", Person.class, supplier);

public void setWithLogicalExpire(String key, Object value, Long time, TimeUnit unit) {
    RedisData redisData = new RedisData();
    redisData.setData(value);
    redisData.setExpireTime(LocalDateTime.now().plusSeconds(unit.toSeconds(time)));
    stringRedisTemplate.opsForValue().set(key, gson.toJson(redisData));
}

public &lt;E&gt; E queryWithLogicalExpire(String key, Class&lt;E&gt; type, Supplier&lt;E&gt; supplier) {
    String json = stringRedisTemplate.opsForValue().get(key);
    RedisData redisData = gson.fromJson(json, RedisData.class);
    E data = gson.fromJson(gson.toJson(redisData.getData()), type);
    if (redisData.getExpireTime().isAfter(LocalDateTime.now())) {
        // 尚未過期
        return data;
    }
    String lockKey = "lock";
    boolean isLock = getLock(lockKey);
    if (isLock) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        executorService.submit(() -> {
            try {
                E e = supplier.get();
                setWithLogicalExpire(key, e, 2L, TimeUnit.MINUTES);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                removeLock(lockKey);
            }
        });
    }
    return data;
}

private boolean getLock(String key) {
    Boolean isLock = stringRedisTemplate.opsForValue().setIfAbsent(key, "1", 10, TimeUnit.SECONDS);
    return Boolean.TRUE.equals(isLock);
}

private void removeLock(String key) {
    stringRedisTemplate.delete(key);
}
            </pre>
          </template>
        </CodeContainer>
        <CodeContainer :title="'Person'">
          <template v-slot:sourceCode>
            <pre>
public class Person {
    private String name;
    private Integer age;
}
            </pre>
          </template>
        </CodeContainer>
        <CodeContainer :title="'RedisData'">
          <template v-slot:sourceCode>
            <pre>
public class RedisData {
    private Object data;
    private LocalDateTime expireTime;
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
  name: "LogicalExpire",
  components: {
    CodeContainer,
  },
};
</script>
