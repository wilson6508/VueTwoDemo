<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Basic'">
          <template v-slot:sourceCode>
            <pre>
public class Printer&lt;T, K&gt; {
    private T first;
    private K second;

    public Printer(T first, K second) {
        this.first = first;
        this.second = second;
    }
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
public static void main(String[] args) {
	Printer&lt;String, Integer&gt; printer = new Printer&lt;&gt;("aaa", 100);
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Example'">
          <template v-slot:sourceCode>
            <pre>
public class Example {
    public static void main(String[] args) {
        List&lt;Integer&gt; list = Arrays.asList(1,3,5,7);
        // printObjList(list); Compilation Error
        printGenericsList(list);
        printList(list);
    }

    private static void printObjList(List&lt;Object&gt; list) {
        System.out.println(list);
    }

    private static &lt;T&gt; void printGenericsList(List&lt;T&gt; list) {
        System.out.println(list);
    }

    private static void printList(List&lt;?&gt; list) { // (List&lt;? extends Animal&gt; list)
        System.out.println(list);
    }
}
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
  name: "Generics",
  components: {
    CodeContainer,
  },
};
</script>
