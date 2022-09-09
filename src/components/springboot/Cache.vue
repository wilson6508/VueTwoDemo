<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Cacheable'">
          <template v-slot:sourceCode>
            <pre>
/**
 * 將方法運行的結果緩存
 * CacheManager管理多個Cache組件, 每一個緩存組件有自己唯一一個名字
 * cacheNames/value: 指定緩存的名字
 *
 * key: 緩存數據使用的key, 默認方法參數的值 id = 1 > key = 1
 * #a0 #p0 #root.args[0]
 * key/keyGenerator: 二選一
 * key = "#root.methodName + '[' + #id + ']'"
 * key不能用#result
 *
 * cacheManager/cacheResolver: 二選一
 *
 * condition為真 > 緩存
 * condition = "#id > 1"
 * condition = "#a0 > 1 and #root.methodName eq 'aaa'
 *
 * unless為真 > 不緩存
 * unless = "#result == null"
 *
 * sync: 是否使用異步模式
 */
@Cacheable(cacheNames = {"emp"}, key="#a0")
public Employee getEmployee(Integer id) {
    return employeeMapper.getEmpById(id);
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'CachePut'">
          <template v-slot:sourceCode>
            <pre>
/**
 * 調用方法並更新緩存
 * key = "#employee.id"
 * key = "#result.id"
 */
@CachePut(cacheNames = {"emp"}, key="#result.id")
public Employee updateEmployee(Employee employee) {
    employeeMapper.updateEmp(employee);
    return employee;
}
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'CacheEvict'">
          <template v-slot:sourceCode>
            <pre>
/**
 * 清除指定的緩存
 *
 * 清除所有緩存
 * allEntries = true
 *
 * 執行方法前就清空緩存
 * beforeInvocation = true
 *
 * 執行方法後才清空緩存, 報錯則不執行緩存清空
 * beforeInvocation = false
 */
@CacheEvict(cacheNames = {"emp"}, key = "#id")
public void deleteEmployee(Integer id) {
    employeeMapper.deleteEmpById(id);
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
  name: "Cache",
  components: {
    CodeContainer,
  },
};
</script>
