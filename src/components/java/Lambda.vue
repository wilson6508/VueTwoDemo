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
    <div class="col-md-8 col-12">
      <CodeContainer :title="'BiConsumer使用'">
        <template v-slot:sourceCode>
          <pre>
saveTitleOrContent(newTitle, ArticleEntity::setTitle);
saveTitleOrContent(newContent, ArticleEntity::setContent);

// 將標題存入 或是 將內容存入
void saveTitleOrContent(Set&lt;String&gt; data, BiConsumer&lt;ArticleEntity, String&gt; biConsumer) {
	List&lt;ArticleEntity&gt; collect = data.stream().map(str -> {
		ArticleEntity entity = new ArticleEntity();
		biConsumer.accept(entity, str);
		return entity;
	}).collect(Collectors.toList());
	articleDao.saveAll(collect);
}
          </pre>
        </template>
      </CodeContainer>
    </div>
    <div class="col-md-8 col-12">
      <CodeContainer :title="'Function使用'">
        <template v-slot:sourceCode>
          <pre>
Set&lt;String&gt; titles = getTitleOrContent(ArticleEntity::getTitle);
Set&lt;String&gt; contents = getTitleOrContent(ArticleEntity::getContent);

// 取得不重複的標題 或是 取得不重複的內容
public Set&lt;String&gt; getTitleOrContent(Function&lt;ArticleEntity, String&gt; function) {
	List&lt;ArticleEntity&gt; list = articleDao.findAll();
	return list.stream().map(function).collect(Collectors.toSet());
}
          </pre>
        </template>
      </CodeContainer>
    </div>
    <div class="col-md-8 col-12">
      <CodeContainer :title="'Consumer使用'">
        <template v-slot:sourceCode>
          <pre>
private static final Consumer&lt;TestEntity&gt;[] CONSUMER_ARR = new Consumer[5];
static {
	CONSUMER_ARR[0] = (TestEntity entity) -> entity.setOne("O");
	CONSUMER_ARR[1] = (TestEntity entity) -> entity.setTwo("O");
	CONSUMER_ARR[2] = (TestEntity entity) -> entity.setThree("O");
	CONSUMER_ARR[3] = (TestEntity entity) -> entity.setFour("O");
	CONSUMER_ARR[4] = (TestEntity entity) -> entity.setFive("O");
}
public TestEntity testMethod(int idx) {
	TestEntity entity = new TestEntity();
	if (true) {
		entity.setOne("X");
		entity.setTwo("X");
		entity.setThree("X");
		entity.setFour("X");
		entity.setFive("X");
		CONSUMER_ARR[idx].accept(entity);
	}
	return entity;
}
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
