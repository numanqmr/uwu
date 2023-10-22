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
  input: {
    class:
      "mb-4 block w-full rounded-lg border-2 border-blue-200 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
  },
  buttongroup: ({ props }) => ({
    class: [
      {
        "flex flex-col": props.showButtons && props.buttonLayout == "stacked",
      },
    ],
  }),
  label: "hidden",
};
</script>
