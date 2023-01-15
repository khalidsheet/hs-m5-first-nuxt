<script setup lang="ts">
export interface Header {
  name: string;
  value: string;
}

defineProps<{
  headers: Header[];
  data: any[];
}>();
</script>

<template>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="w-full text-center">
          <thead class="border-b border-b-gray-300 bg-gray-200">
            <tr>
              <th v-for="header of headers" scope="col" class="th">
                {{ header.name }}
              </th>
            </tr>
          </thead>
          <tbody class="border-b border-b-gray-700 bg-gray-100">
            <tr v-if="data.length == 0">
              <td :colspan="headers.length">No data available</td>
            </tr>
            <tr v-for="x of data" @click="$emit('onItemClicked', x)">
              <td v-for="(keys, _, index) of x">
                {{ x[headers[index ?? 0].value] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.th {
  @apply text-sm font-medium text-gray-900 px-8 py-4 w-auto;
}

table tbody tr {
  @apply text-gray-800;
}

table tbody tr td {
  @apply py-4 px-4;
}

table thead tr:first-child th:first-child {
  @apply rounded-tl-md;
}

table thead tr:first-child th:last-child {
  @apply rounded-tr-md;
}

table tbody tr:last-child td:first-child {
  @apply rounded-bl-md;
}

table tbody tr:last-child td:last-child {
  @apply rounded-br-md;
}
</style>
