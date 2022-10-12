<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'pom.xml'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
&lt;dependency&gt;
    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
    &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'gradle'" :language="'html'">
          <template v-slot:sourceCode>
            <pre>
compileOnly 'org.projectlombok:lombok:1.18.24'
<hr/>
implementation 'org.projectlombok:lombok'
annotationProcessor 'org.projectlombok:lombok'
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'example'" :language="'js'">
          <template v-slot:sourceCode>
            <pre>
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsaTradeLog {
    private String tradeDate;
    private String stockId;
    private int quantity;
    private double amount;
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
@Data = @ToString + @EqualsAndHashCode + @Getter + @Setter + @RequiredArgsConstructor

@Builder
Customer customer = Customer.builder().name("Tom").age(18).build();

lombok @EqualsAndHashCode
https://blog.csdn.net/zhanlanmg/article/details/50392266
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
  name: "Lombok",
  components: {
    CodeContainer,
  },
};
</script>
