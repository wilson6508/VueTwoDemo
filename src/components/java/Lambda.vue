<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Concept'">
          <template v-slot:sourceCode>
            <pre>
// the compiler will enforce one abstract method (s-a-m)
@FunctionalInterface
public interface Printable {
    String print(String suffix);
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
public class Lambdas {
    public static void main(String[] args) {
        Printable printable = s -> "Meow" + s;
    }
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
public interface Printable {
    void print();
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
public class Lambdas {
    public static void main(String[] args) {
        Cat cat = new Cat(); // Cat implements Printable
        printThing(cat);

        Printable printable = () -> System.out.println("test");
        printThing(printable);

        printThing(() -> {
            System.out.println(1);
            System.out.println(2);
        });
    }
    
    static void printThing(Printable thing) {
        thing.print();
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
  name: "Lambda",
  components: {
    CodeContainer,
  },
};
</script>
