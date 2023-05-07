<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
boolean isLock = tryLock(lockKey);
// 取鎖失敗
if (!isLock) {
    return Result.fail("1個人只許下1單");
}
// 取鎖成功
try {
    IVoucherOrderService proxy = (IVoucherOrderService) AopContext.currentProxy();
    return proxy.createVoucherOrder(voucherId);
} finally {
    // 釋放鎖
    lock.unlock();
}

-------------------------------------------------------------------------------------------------------------------------
// 嘗試獲取鎖
public boolean tryLock(String key, long timeoutSec) {
    String threadId = ID_PREFIX + Thread.currentThread().getId();
    Boolean success = stringRedisTemplate.opsForValue().setIfAbsent(key, threadId, timeoutSec, TimeUnit.SECONDS);
    return Boolean.TRUE.equals(success);
}

// redis解鎖
public void unlock() {
    // 取得線程標示
    String threadId = ID_PREFIX + Thread.currentThread().getId();
    // 取得鎖的value
    String id = stringRedisTemplate.opsForValue().get(KEY_PREFIX + name);
    // 釋放鎖
    if (threadId.equals(id)) {
        stringRedisTemplate.delete(KEY_PREFIX + name);
    }
}

// lua解鎖
public void unlock() {
    List&lt;String&gt; keys = Collections.singletonList(KEY_PREFIX + name);
    String threadId = ID_PREFIX + Thread.currentThread().getId();
    stringRedisTemplate.execute(UNLOCK_SCRIPT, keys, threadId);
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
  name: "Lock",
  components: {
    CodeContainer,
  },
};
</script>
