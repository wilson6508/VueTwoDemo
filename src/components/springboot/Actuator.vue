<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'pom.xml'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'gradle'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
compile group: 'org.springframework.boot', name: 'spring-boot-starter-actuator'
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.yml'">
          <template v-slot:sourceCode>
            <pre>
management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    shutdown:
      enabled: true
        </pre
        >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.properties'">
          <template v-slot:sourceCode>
            <pre>
management.endpoints.web.exposure.include=*
management.endpoint.shutdown.enabled=true
        </pre
        >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'postman'">
          <template v-slot:sourceCode>
            <pre>
Get
http://127.0.0.1:8086/actuator/env
http://127.0.0.1:8086/actuator/health
http://127.0.0.1:8086/actuator/scheduledtasks
http://127.0.0.1:8086/actuator/metrics/system.cpu.usage
<hr>
Post
http://127.0.0.1:8086/actuator/shutdown
        </pre>
          </template>
        </CodeContainer>
      </div>
      <hr />
      <div class="col-md-8 col-12">
        <CodeContainer :title="'AdminApi'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
&lt;dependency&gt;
    &lt;groupId&gt;de.codecentric&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-admin-starter-server&lt;/artifactId&gt;
    &lt;version&gt;2.6.1&lt;/version&gt;
&lt;/dependency&gt;
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
server.port=10001
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''" :language="'js'">
          <template v-slot:sourceCode>
            <pre>
import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAdminServer
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
      <hr />
      <div class="col-md-8 col-12">
        <CodeContainer :title="'WebServerApi'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
&lt;dependency&gt;
    &lt;groupId&gt;de.codecentric&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-admin-starter-client&lt;/artifactId&gt;
    &lt;version&gt;2.6.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
server:
  port: 10002
spring:
  application:
    name: WebServerApi
  boot:
    admin:
      client:
        url: http://127.0.0.1:10001
management:
  endpoints:
    web:
      exposure:
        include: '*'
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
  name: "Actuator",
  components: {
    CodeContainer,
  },
};
</script>
