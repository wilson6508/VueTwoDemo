<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'test.lua'">
          <template v-slot:sourceCode>
            <pre>
-- local key = KEYS[1]
-- local value = ARGV[1]
-- redis.call('set', key, value)
-- return 0

local key = KEYS[1]
local value = ARGV[1]
return redis.call('SET', key, value, 'NX')
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
public static final DefaultRedisScript&lt;String&gt; TEST_SCRIPT;

static {
    TEST_SCRIPT = new DefaultRedisScript&lt;&gt;();
    TEST_SCRIPT.setLocation(new ClassPathResource("static/test.lua"));
    TEST_SCRIPT.setResultType(String.class);
}

@Test
void contextLoads() {
    String result = stringRedisTemplate.execute(TEST_SCRIPT, Collections.singletonList("name"), "Tom");
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
  name: "Lua",
  components: {
    CodeContainer,
  },
};
</script>
