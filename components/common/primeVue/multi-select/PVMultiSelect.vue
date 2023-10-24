<template>
  <MultiSelect
    v-model="selectedItems"
    :options="optionList"
    :optionLabel="optionLabel || null"
    :placeholder="placeholder || 'Placeholder...'"
    :maxSelectedLabels="3"
    :selectionLimit="selectionLimit"
    :showToggleAll="false"
    :pt="PVMultiSelectStyles"
    @show="handleShow"
    @hide="handleShow"
  />
</template>

<script setup>
import MultiSelect from "primevue/multiselect";

const props = defineProps({
  options: { required: true },
  placeholder: {},
  selectionLimit: {},
  optionLabel: {},
});

const selectedItems = ref("");
const optionList = ref(props.options);
const isOpen = ref(false);

const handleShow = () => (isOpen.value = !isOpen.value);

const PVMultiSelectStyles = {
  root: ({ props }) => ({
    class: [
      "w-full text-sm shadow-sm inline-flex cursor-pointer select-none bg-white dark:bg-gray-700 border-2 rounded-md",
      "active:!border-blue-500",
      {
        "opacity-60 select-none pointer-events-none cursor-default":
          props?.disabled,
      },
      { "border-blue-500 dark:border-blue-500": isOpen.value },
      { "border-blue-200 dark:border-gray-600": !isOpen.value },
    ],
  }),

  label: { class: "dark:text-white p-2" },
  item: ({ context }) => ({
    class: [
      "cursor-pointer font-normal overflow-hidden relative whitespace-nowrap",
      "m-0 p-3 border-0  transition-shadow duration-200 rounded-none",
      {
        "text-white-700 hover:text-gray-400 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800":
          !context.focused && !context.selected,
        "bg-gray-300 text-gray-700 dark:text-white dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800":
          context.focused && !context.selected,
        "bg-blue-100 text-blue-700 dark:bg-gray-600 dark:text-white":
          context.focused && context.selected,
        "bg-blue-50 text-white-700 dark:bg-gray-600 dark:text-white":
          !context.focused && context.selected,
      },
    ],
  }),

  checkbox: ({ context }) => ({
    class: [
      "flex items-center justify-center",
      "border-2 w-6 h-6 text-gray-600 dark:text-white rounded-lg transition-colors duration-200",
      "hover:border-green-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
      {
        "border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900":
          !context?.selected,
        "border-green-500 bg-green-500": context?.selected,
      },
    ],
  }),
};
</script>
