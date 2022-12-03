<template>
  <div class="row m-4">
    <div class="col-md-8 col-12">
      <CodeContainer :title="'Single Parameter'">
        <template v-slot:sourceCode>
          <pre>
Consumer&lt;String&gt; consumer = (String str) -> System.out.println(str);
consumer.accept("test");

Function&lt;String, Integer&gt; function = (String str) -> Integer.parseInt(str);
Integer apply = function.apply("123");

Predicate&lt;String&gt; predicate = (String str) -> str.equals("test");
boolean check = predicate.test("abc");

Supplier&lt;Integer&gt; supplier = () -> new Random().nextInt(3);
Integer integer = supplier.get();
          </pre>
        </template>
      </CodeContainer>
    </div>
    <div class="col-md-8 col-12">
      <CodeContainer :title="'Two Parameter'">
        <template v-slot:sourceCode>
          <pre>
BiConsumer&lt;Person, int[]&gt; biConsumer = (person, arr) -> {
    person.setHeight(arr[0]);
    person.setWeight(arr[1]);
};
biConsumer.accept(person, new int[]{200, 100});
          </pre>
        </template>
      </CodeContainer>
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
