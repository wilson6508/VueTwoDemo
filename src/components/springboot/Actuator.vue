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
        <CodeContainer :title="'Postman'">
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
