<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
axios.interceptors.request.use(config => {
    config.headers.authorization = "Bearer xxx"
    return config
});
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
const obj = {
    method: "get",
    url: "http://127.0.0.1:8081/article/getAll",
    headers: { authorization: "Bearer xxx" },
    data: {},
}
axios(obj)
.then(response => console.log(response.data))
.catch(error => console.log(error));

            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
const obj = {
    method: "post",
    url: "http://127.0.0.1:8081/article/add",
    headers: { authorization: "Bearer xxx" },
    data: { title: "abc", state: 1 },
}
axios(obj)
.then(response => console.log(response.data))
.catch(error => console.log(error));
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
const apiUrl = "http://127.0.0.1:8081/article/getAll";
const config = { headers: { authorization: "Bearer xxx" } };
axios.get(apiUrl, config)
.then(response => console.log(response.data))
.catch(error => console.log(error));
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
const apiUrl = "http://127.0.0.1:8081/article/add";
const data = { title: "abc", state: 1 };
const config = { headers: { authorization: "Bearer xxx" } };
axios.post(apiUrl, data, config)
.then(response => console.log(response.data))
.catch(error => console.log(error));
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
  name: "Axios",
  components: {
    CodeContainer,
  },
};
</script>
