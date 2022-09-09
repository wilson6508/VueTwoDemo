<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Person'">
          <template v-slot:sourceCode>
            <pre>
public class Person {

    private final String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void publicMethodWithParam(String str) {
        System.out.println(str);
    }

    public void publicMethod() {
        System.out.println("publicMethod");
    }

    public static void publicStaticMethod() {
        System.out.println("publicStaticMethod");
    }

    private void privateMethod() {
        System.out.println("privateMethod");
    }

    private static void privateStaticMethod() {
        System.out.println("privateStaticMethod");
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
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class Example {
    public static void main(String[] args) throws Exception {

        Person person = new Person("Tom", 18);
        Field[] fields = person.getClass().getDeclaredFields();
        for (Field field : fields) {
            if (field.getName().equals("name")) {
                field.setAccessible(true);
                field.set(person, "Amy");
            }
        }

        Method[] methods = person.getClass().getDeclaredMethods();
        for (Method method : methods) {
            if (method.getName().equals("publicMethodWithParam")) {
                method.invoke(person, "ABC");
            }
            if (method.getName().equals("publicMethod")) {
                method.invoke(person);
            }
            if (method.getName().equals("publicStaticMethod")) {
                method.invoke(null);
            }
            if (method.getName().equals("privateMethod")) {
                method.setAccessible(true);
                method.invoke(person);
            }
            if (method.getName().equals("privateStaticMethod")) {
                method.setAccessible(true);
                method.invoke(person);
            }
        }

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
  name: "Reflection",
  components: {
    CodeContainer,
  },
}
</script>
