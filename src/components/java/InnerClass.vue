<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Basic'">
          <template v-slot:sourceCode>
            <pre>
public class Outer {
    public void outerFunc() {
        System.out.println("outerFunc");
    }

    public class Inner {
        public void innerFunc() {
            System.out.println("innerFunc");
        }
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
public class Example {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.outerFunc();

        Outer.Inner inner = outer.new Inner();
        inner.innerFunc();
    }
}
        </pre
            >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Static'">
          <template v-slot:sourceCode>
            <pre>
public class Outer {
    public void outerFunc() {
        System.out.println("outerFunc");
    }

    public static class Inner {
        public void innerFunc() {
            System.out.println("innerFunc");
        }
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
public class Example {
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.outerFunc();

        Outer.Inner inner = new Outer.Inner();
        inner.innerFunc();
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
  name: "InnerClass",
  components: {
    CodeContainer,
  },
};
</script>
