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

const TRANSITIONS = {
  overlay: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass:
      "transition-transform transition-opacity duration-150 ease-in",
    leaveActiveClass: "transition-opacity duration-150 ease-linear",
    leaveToClass: "opacity-0",
  },
};

const primeVueDropdownStyled = {
  root: ({ props }) => ({
    class: [
      "cursor-pointer inline-flex relative select-none",
      "bg-white border-2 border-blue-200 dark:border-gray-600 transition-colors duration-200 ease-in-out rounded-md shadow-sm",
      "dark:bg-gray-700",
      "w-full",
      "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
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
      "p-3 px-2 transition duration-200 bg-transparent rounded appearance-none text-base",
      "focus:outline-none focus:shadow-none",
      { "pr-7": props.showClear },
    ],
  }),
  trigger: {
    class: [
      "flex items-center justify-center shrink-0",
      "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg",
    ],
  },
  wrapper: {
    class: [
      "max-h-[200px] overflow-auto",
      "bg-white text-gray-700 border-0 rounded-lg shadow-lg",
      "dark:bg-gray-600 dark:text-white",
    ],
  },
  list: {
    class: "py-3 list-none m-0 text-sm",
  },
  item: ({ context }) => ({
    class: [
      "cursor-pointer font-normal overflow-hidden relative whitespace-nowrap",
      "m-0 p-3 border-0  transition-shadow duration-200 rounded-none",
      {
        "text-gray-700 hover:text-gray-400 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800":
          !context.focused && !context.selected,
        "bg-gray-300 text-gray-300 dark:text-white dark:bg-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800":
          context.focused && !context.selected,
        "bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white":
          context.focused && context.selected,
        "bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white":
          !context.focused && context.selected,
      },
    ],
  }),
  itemgroup: {
    class: [
      "m-0 p-3 text-gray-800 bg-white font-bold",
      "dark:bg-gray-900 dark:text-white/80",
      "cursor-auto",
    ],
  },
  header: {
    class: [
      "p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg",
      "dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40",
    ],
  },
  transition: TRANSITIONS.overlay,
};
</script>
