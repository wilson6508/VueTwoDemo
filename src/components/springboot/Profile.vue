<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.yml'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
spring:
  profiles:
    active: dev
  output:
    ansi:
      enabled: always
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application-dev.yml'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
server:
  port: 8086
crawler:
  timeOut: 1200
  databaseApi: http://127.0.0.1:8087/databaseApi/normal
management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    shutdown:
      enabled: true
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'PropertiesBean'">
          <template v-slot:sourceCode>
            <pre>
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "crawler")
public class PropertiesBean {
    private int timeOut;
    private String databaseApi;
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <hr />
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application.properties'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
server.port=10002
spring.profiles.active=dev
spring.output.ansi.enabled=ALWAYS
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'application-dev.properties'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
timeOut=1200
databaseApi=https://release-test2.opview.com.tw/eduApi/login

spring.datasource.url=jdbc:mysql://localhost:3306/stock_dev
spring.datasource.username=root
spring.datasource.password=1234
#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.open-in-view=false
spring.jpa.hibernate.ddl-auto=none
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'PropertiesBean'">
          <template v-slot:sourceCode>
            <pre>
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
public class PropertiesBean {
    @Value("${timeOut}")
    int timeOut;

    @Value("${databaseApi}")
    String databaseApi;
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
  name: "Profile",
  components: {
    CodeContainer,
  },
};
</script>
