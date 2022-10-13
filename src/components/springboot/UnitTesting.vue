<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DemoService'">
          <template v-slot:sourceCode>
            <pre>
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class DemoService {

    public void demo01(int i) {
        System.out.println(i * 10);
    }

    public void demo02(String str) {
        System.out.println(str.toUpperCase(Locale.ROOT));
    }

}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'ApplicationTests'">
          <template v-slot:sourceCode>
            <pre>
import com.service.DemoService;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.Stream;

@SpringBootTest
class ApplicationTests {

    @Autowired
    DemoService demoService;

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void testParameterized01(int i) {
        demoService.demo01(i);
    }

    static Stream&lt;String&gt; stringProvider() {
        return Stream.of("apple", "banana", "cat");
    }

    @ParameterizedTest
    @MethodSource(value = "stringProvider")
    void testParameterized02(String str) {
        demoService.demo02(str);
    }

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
  name: "UnitTesting",
  components: {
    CodeContainer,
  },
};
</script>
