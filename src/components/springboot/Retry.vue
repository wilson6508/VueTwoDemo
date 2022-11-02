<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'pom.xml'" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.retry&lt;/groupId&gt;
    &lt;artifactId&gt;spring-retry&lt;/artifactId&gt;
&lt;/dependency&gt;
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'build.gradle'" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
dependencies {
    compile 'org.springframework.retry:spring-retry'
}
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Application'">
          <template v-slot:sourceCode>
              <pre>
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;

@EnableRetry
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'BookService'">
          <template v-slot:sourceCode>
              <pre>
import lombok.extern.slf4j.Slf4j;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
@Service
public class BookService {

    private final AtomicInteger atomicInteger = new AtomicInteger(0);

    // 當捕捉到 NoResultException 時自動進行重試
    // maxAttempts 表示最多執行次數(預設3)
    // backoff 當捕捉到錯誤時 停多少毫秒後再重試
    @Retryable(include = {NoResultException.class}, maxAttempts = 4, backoff = @Backoff(value = 2000))
    public String getBook() {
        int count = atomicInteger.incrementAndGet();
        log.info("count = " + count);
        if (count &lt; 2) {
            throw new NoResultException();
        } else {
            return "ABC";
        }
    }

    // @Recover定義錯誤的處理 只能寫在同一個Class
    // 當重試次數超過maxAttempts時 會跳到對應的Recover來處理
    // 如果原本的功能有return的話 @Recover也要return
    @Recover
    public String recover(NoResultException e) {
        return "error";
    }

}
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'TestApp'">
          <template v-slot:sourceCode>
              <pre>
import com.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class TestApp implements CommandLineRunner {
    @Autowired
    BookService bookService;
    @Override
    public void run(String... args) throws Exception {
        log.info("開始測試 Service");
        String book = bookService.getBook();
        log.info("測試結果 " + book);
        log.info("結束測試 Service");
    }
}

                </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Reference'">
          <template v-slot:sourceCode>
                <pre>
https://ithelp.ithome.com.tw/articles/10191550
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
  name: "Retry",
  components: {
    CodeContainer,
  },
};
</script>
