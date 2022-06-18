<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in tableInfo.columns" :key="column.key">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(obj, index) in tableInfo.rows" :key="index">
        <td v-for="column in tableInfo.columns" :key="column.key">
          {{ obj[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BasicTable",
  props: ["tableInfo"],
};
</script>
