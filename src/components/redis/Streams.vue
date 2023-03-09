<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
// xgroup create s1 g1 0 mkstream
createStreamAddGroup("s1", "g1", "0");

// xadd s1 * k1 v1
addMsgToMq("s1", Collections.singletonMap("k1", "v1"));

// xreadgroup group g1 c1 count 1 streams s1 >
readMsg("s1", "g1", "c1", null);

// xreadgroup group g1 c1 count 1 streams s1 0
readMsg("s1", "g1", "c1", "0");

// xack s1 g1 1678351006659-0
ackAndDelete("s1", "g1", "1678351006659-0");

public void createStreamAddGroup(String key, String group, String from) {
    stringRedisTemplate.opsForStream().createGroup(key, ReadOffset.from(from), group);
}

public RecordId addMsgToMq(String key, Map&lt;String, String&gt; map) {
    return stringRedisTemplate.opsForStream().add(key, map);
}

public RecordId readMsg(String key, String group, String consumer, String offset) {
    Consumer from = Consumer.from(group, consumer);
    StreamReadOptions options = StreamReadOptions.empty().count(1);
    ReadOffset readOffset = Strings.isEmpty(offset) ? ReadOffset.lastConsumed() : ReadOffset.from(offset);
    StreamOffset&lt;String&gt; streamOffset = StreamOffset.create(key, readOffset);
    List&lt;MapRecord&lt;String, Object, Object&gt;&gt; list = stringRedisTemplate.opsForStream().read(from, options, streamOffset);
    if (CollectionUtils.isEmpty(list)) {
        return null;
    }
    MapRecord&lt;String, Object, Object&gt; entries = list.get(0);
    Map&lt;Object, Object&gt; map = entries.getValue();
    System.out.println("map = " + map);
    RecordId recordId = entries.getId();
    return recordId;
}

public void ackAndDelete(String key, String group, String recordId) {
    System.out.println("size = " + stringRedisTemplate.opsForStream().size(key));
    Long rep = stringRedisTemplate.opsForStream().acknowledge(key, group, recordId);
    if (rep != null && rep == 1) {
        stringRedisTemplate.opsForStream().delete(key, recordId);
    }
    System.out.println("size = " + stringRedisTemplate.opsForStream().size(key));
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
  name: "Streams",
  components: {
    CodeContainer,
  },
};
</script>
