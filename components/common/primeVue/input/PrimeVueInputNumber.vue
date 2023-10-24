<template>
  <InputNumber
    v-model="value"
    inputId="integeronly"
    :pt="primeVueInputNumberStyle"
  />
</template>

<script setup>
import InputNumber from "primevue/inputnumber";

const value = ref();

const primeVueInputNumberStyle = {
  root: "w-full inline-flex",
  input: ({ props }) => ({
    class: [
      "mb-4 block w-full rounded-lg border-2 border-blue-300 p-2.5 text-sm text-gray-900 shadow-sm",
      "focus:shadow-none focus:border-blue-500 focus:outline-0 focus:outline-none",
      "dark:border-gray-600 dark:!bg-gray-700",
      "dark:focus:shadow-none dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500",
    ],
  }),
};
</script>
