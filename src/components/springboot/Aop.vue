<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'pom.xml'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;
&lt;/dependency&gt;
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'gradle'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
compile('org.springframework.boot:spring-boot-starter-aop')
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'controller'" :language="'js'">
          <template v-slot:sourceCode>
            <pre>
@RestController
public class TestController {

    @Autowired
    TestService testService;

    // http://127.0.0.1:8081/testAop?id=3
    @GetMapping("/testAop")
    public String testAop(Integer id) {
        return testService.test01(id);
    }

}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'serivce'">
          <template v-slot:sourceCode>
            <pre>
@Service
public class TestService {

    public String test01(Integer id) {
        System.out.println("---Service---");
        return String.valueOf(id * 10);
    }

}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'aop'">
          <template v-slot:sourceCode>
            <pre>
import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class TestAop {

    @Pointcut(value = "execution(* com.service.*.*(..))")
    public void pointcut() {}

    @Before("pointcut()")
    public void beforePointcut(JoinPoint joinPoint) {
        System.out.println("---Before---");
        System.out.println(getIpAddress());
        Object[] args = joinPoint.getArgs();
        System.out.println(args[0]);
        System.out.println("---Before---");
    }

    @AfterReturning(value = "pointcut()", returning = "responseObj")
    public void afterReturningPointcut(JoinPoint joinPoint, Object responseObj) {
        System.out.println("---AfterReturning---");
        String className = joinPoint.getTarget().getClass().getName();
        String methodName = joinPoint.getSignature().getName();
        System.out.println(className);
        System.out.println(methodName);
        System.out.println(responseObj);
        System.out.println("---AfterReturning---");
    }

    @Autowired
    HttpServletRequest request;

    private String getIpAddress() {
        if (request.getHeader("X-Real-IP") != null) {
            return request.getHeader("X-Real-IP");
        }
        return request.getRemoteAddr();
    }
    
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'browser'">
          <template v-slot:sourceCode>
            <pre>
http://127.0.0.1:8081/testAop?id=3
        </pre
            >
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
export default {
  name: "Aop",
  components: {
    CodeContainer,
  },
};
</script>
