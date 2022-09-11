<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@RequestParam'">
          <template v-slot:sourceCode>
            <pre>
http://localhost:7000/test?age=18&name=Tom&name=Amy

@GetMapping("/test")
public String test(@RequestParam("age") Integer age,
                   @RequestParam("name") List&lt;String&gt; names,
                   @RequestParam Map&lt;String, String&gt; params) {
	System.out.println(age);	// 18
	System.out.println(names);	// [Tom, Amy]
	System.out.println(params);	// {age=18, name=Tom}
	return "test";
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@RequestAttribute'">
          <template v-slot:sourceCode>
            <pre>
http://localhost:7000/test

@GetMapping("/test")
public String test(HttpServletRequest request) {
	request.setAttribute("name", "Tom");
	request.setAttribute("age", 18);
	return "forward:/demo";
}

@GetMapping("/demo")
@ResponseBody
public String demo(@RequestAttribute("name") String name,
                   @RequestAttribute("age") Integer age,
                   HttpServletRequest request) {
	System.out.println(name);       // Tom
	System.out.println(age);        // 18
	Object objName = request.getAttribute("name");
	Object objAge = request.getAttribute("age");
	System.out.println(objName);    // Tom
	System.out.println(objAge);     // 18
	return "demo";
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@PathVariable'">
          <template v-slot:sourceCode>
            <pre>
http://localhost:7000/person/tom/test/18

@GetMapping("/person/{name}/test/{age}")
public String person(@PathVariable("name") String name,
                     @PathVariable("age") Integer age,
                     @PathVariable Map&lt;String, String&gt; params) {
	System.out.println(name);	// tom
	System.out.println(age);	// 18
	System.out.println(params); // {name=tom, age=18}
	return "person";
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@RequestBody'">
          <template v-slot:sourceCode>
            <pre>
http://127.0.0.1:7000/test
{
    "name": "Tom",
    "age": 18
}

@PostMapping("/test")
public String test(@RequestBody String content) {
	System.out.println(content); // { "name": "Tom", "age": 18}
	return "test";
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@RequestHeader'">
          <template v-slot:sourceCode>
            <pre>
http://localhost:7000/test

@GetMapping("/test")
public String test(@RequestHeader("User-Agent") String userAgent,
                   @RequestHeader Map&lt;String, String&gt; headers) {
	System.out.println(userAgent); // Mozilla/5.0 (Windows NT 6.3; Win64; x64) App...
	System.out.println(headers);   // {host=localhost:7000, ...}
	return "test";
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'@CookieValue'">
          <template v-slot:sourceCode>
            <pre>
@CookieValue("_ga") String _ga,
@CookieValue("_ga") Cookie cookie

cookie.getName()
cookie.getValue()
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
  name: "RequestTag",
  components: {
    CodeContainer,
  },
};
</script>
