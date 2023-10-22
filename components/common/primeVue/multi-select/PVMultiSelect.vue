<template>
  <MultiSelect
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select Genre(s)"
    :maxSelectedLabels="3"
    :selectionLimit="3"
    :showToggleAll="false"
    :pt="{
      root: ({ props }) => ({
        class: [
          'w-full text-sm shadow-sm inline-flex cursor-pointer select-none bg-white dark:bg-gray-700 border-2 border-blue-200 dark:border-gray-600  transition-colors duration-200 ease-in-out rounded-md',
          {
            'opacity-60 select-none pointer-events-none cursor-default':
              props?.disabled,
          },
        ],
      }),
      label: { class: 'dark:text-white p-2' },
      item: ({ context }) => ({
        class: [
          'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
          'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
          {
            'text-white-700 hover:text-gray-400 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800':
              !context.focused && !context.selected,
            'bg-gray-300 text-gray-700 dark:text-white dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800':
              context.focused && !context.selected,
            'bg-blue-100 text-blue-700 dark:bg-gray-600 dark:text-white':
              context.focused && context.selected,
            'bg-blue-50 text-white-700 dark:bg-gray-600 dark:text-white':
              !context.focused && context.selected,
          },
        ],
      }),

      checkbox: ({ context }) => ({
        class: [
          'flex items-center justify-center',
          'border-2 w-6 h-6 text-gray-600 dark:text-white rounded-lg transition-colors duration-200',
          'hover:border-green-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
          {
            'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900':
              !context?.selected,
            'border-green-500 bg-green-500': context?.selected,
          },
        ],
      }),
    }"
  />
</template>

<script setup>
import MultiSelect from "primevue/multiselect";

const selectedCities = ref();
const cities = ref([
  { name: "Horror", code: "Horor" },
  { name: "Action", code: "Action" },
  { name: "Psychological", code: "Psychological" },
  { name: "Slice of Life", code: "Slice of Life" },
  { name: "Adventure", code: "Adventure" },
]);
</script>
