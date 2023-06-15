<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
@Service
public class TestService {

    public BlockingQueue&lt;Order&gt; orderTasks = new ArrayBlockingQueue&lt;&gt;(10);

    @PostConstruct
    public void initialize() {
        Thread thread = new Thread(this::test);
        thread.start();
    }

    public void test() {
        try {
            Order take = orderTasks.take();
            System.out.println(new Gson().toJson(take));
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            test();
        }
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
  name: "BlockingQueue",
  components: {
    CodeContainer,
  },
};
</script>
