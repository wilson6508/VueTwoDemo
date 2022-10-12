<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'pom.xml'" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
&lt;dependency&gt;
    &lt;groupId&gt;net.sf.ehcache&lt;/groupId&gt;
    &lt;artifactId&gt;ehcache&lt;/artifactId&gt;
&lt;/dependency&gt;
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'build.gradle'" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
implementation 'net.sf.ehcache:ehcache:2.10.9.2'
implementation 'org.springframework.boot:spring-boot-starter-cache:2.7.3'
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.yml'">
          <template v-slot:sourceCode>
                    <pre>
server:
  port: 8088
debug: true
// EhCacheCacheConfiguration
spring:
  cache:
    type: ehcache
    ehcache:
      config: classpath:/ehcache.xml
                    </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.properties'">
          <template v-slot:sourceCode>
            <pre>
spring.cache.type=ehcache
spring.cache.ehcache.config=classpath:/ehcache.xml
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'ehcache.xml'" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
&lt;ehcache&gt;
    &lt;diskStore path="d:\\ehcache" /&gt;

    &lt;!-- maxElementsInMemory: 記憶體中緩存的最大數目 --&gt;
    &lt;!-- overflowToDisk: 如果記憶體中資料超過限制，是否寫入硬碟 --&gt;
    &lt;!-- diskSpoolBufferSizeMB: DiskStore緩存區大小(預設30MB) 每個Cache都應該有一個自己緩衝區 --&gt;
    &lt;!-- maxElementsOnDisk:  硬碟中緩存的最大數目 --&gt;
    &lt;!-- diskPersistent：是否缓存虚拟机重启期数据 --&gt;
    &lt;!-- eternal: 是否永久有效 若為true 緩存永不過期 timeouts將被忽略  --&gt;
    &lt;!-- timeToIdleSeconds: 閒置秒數(預設0為不限制)，超過則緩存過期 --&gt;
    &lt;!-- timeToLiveSeconds: 存活秒數(預設0為不限制) --&gt;

&lt;!--    &lt;defaultCache maxElementsInMemory="1000"--&gt;
&lt;!--                  overflowToDisk="true"--&gt;
&lt;!--                  eternal="false"--&gt;
&lt;!--                  timeToIdleSeconds="600"--&gt;
&lt;!--                  timeToLiveSeconds="600" /&gt;--&gt;

    &lt;cache name="testCache"
           maxElementsInMemory="2"
           overflowToDisk="true"
           eternal="true"
           diskPersistent="true" /&gt;
&lt;/ehcache&gt;
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
        CacheManager cacheManager = beanFactory.getBean(CacheManager.class);
        Cache cache = cacheManager.getCache("testCache");
        Map&lt;Object, Element&gt; all = cache.getAll(Arrays.asList("2+3", "2+4"));
        return "readCache";
    }

    @CacheEvict(value = "testCache", allEntries = true)
    public void clearCache() {}

}

                </pre>
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
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";

export default {
  name: "Ehcache",
  components: {
    CodeContainer,
  },
};
</script>
