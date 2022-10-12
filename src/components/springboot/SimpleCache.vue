<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.yml'">
          <template v-slot:sourceCode>
                    <pre>
server:
  port: 8088
debug: true
// SimpleCacheConfiguration
                    </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'DemoApplication'">
          <template v-slot:sourceCode>
              <pre>
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'CacheController'">
          <template v-slot:sourceCode>
              <pre>
import com.service.CacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CacheController {

    @Autowired
    CacheService cacheService;

    @GetMapping("/createCache")
    public Integer createCache(@RequestParam("a") Integer a, @RequestParam("b") Integer b) {
        return cacheService.createCache(a, b);
    }

    @GetMapping("/readCache")
    public String readCache() {
        return cacheService.readCache();
    }

    @GetMapping("/clearCache")
    public String clearCache() {
        cacheService.clearCache();
        return "clearCache";
    }

}
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'CacheService'">
          <template v-slot:sourceCode>
              <pre>
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.stereotype.Service;

@Service
public class CacheService {

    @Cacheable(value = "testCache", key = "#a0 + '+' + #a1")
    public Integer createCache(Integer a, Integer b) {
        System.out.println("進入方法");
        return a + b;
    }

    @Autowired
    BeanFactory beanFactory;

    public String readCache() {
        ConcurrentMapCacheManager cacheManager = beanFactory.getBean(ConcurrentMapCacheManager.class);
        Cache testCache = cacheManager.getCache("testCache");
        return "readCache";
    }

    @CacheEvict(value = "testCache", allEntries = true)
    public void clearCache() {}

}

          </pre
          >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Browser'">
          <template v-slot:sourceCode>
                <pre>
http://localhost:8088/createCache?a=2&b=3
http://localhost:8088/createCache?a=2&b=4
http://localhost:8088/readCache
http://localhost:8088/clearCache
                </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'KeyGenerator'">
          <template v-slot:sourceCode>
              <pre>
import com.model.info.Person;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.Random;

@Service
public class CacheService {

//    @Bean("customKeyGenerator")
//    public KeyGenerator keyGenerator() {
//        return (target, method, params) -> {
//            System.out.println(target.getClass().getSimpleName());
//            System.out.println(method.getName());
//            System.out.println(((Person) params[0]).getName());
//            return new Random().nextInt(100);
//        };
//    }

    @Bean("customKeyGenerator")
    public KeyGenerator keyGenerator() {
        return (target, method, params) -> ((Person) params[0]).getName();
    }

    @Cacheable(value = "user", keyGenerator = "customKeyGenerator")
    public String sayHello(Person person) {
        System.out.println("進入方法");
        return "test";
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
  name: "SimpleCache",
  components: {
    CodeContainer,
  },
};
</script>
