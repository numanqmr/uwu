<template>
  <Dropdown
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    :placeholder="placeholder"
    :pt="primeVueDropdownStyled"
  />
</template>

<script setup>
import Dropdown from "primevue/dropdown";
import { ref } from "vue";

const props = defineProps(["placeholder"]);

const selectedCity = ref();
const cities = ref([
  { name: "Completed", code: "Completed" },
  { name: "Ongoing", code: "Ongoing" },
  { name: "Hiatus", code: "Hiatus" },
  { name: "Cancelled", code: "Cancelled" },
]);

const primeVueDropdownStyled = {
  root: ({ props }) => ({
    class: [
      "w-full",
      "cursor-pointer inline-flex relative select-none",
      "bg-white border-2 border-blue-200 rounded-md",
      "dark:border-gray-600 dark:bg-gray-700",
      {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  input: ({ props }) => ({
    class: [
      "cursor-pointer block flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap relative",
      "bg-transparent border-0 text-gray-800",
      "dark:text-white text-sm",
      "p-[10px] transition duration-200 bg-transparent rounded appearance-none font-sans text-base",
      "focus:border-blue-500",
      { "pr-7": props.showClear },
    ],
  }),
};
</script>
