<template>
  <Dropdown
    :modelValue="props?.value"
    :options="props?.options"
    optionLabel="name"
    :optionValue="optionValue ?? null"
    :placeholder="placeholder"
    :pt="primeVueDropdownStyled"
  />
</template>

<script setup>
import Dropdown from "primevue/dropdown";
import { primeVueDropdownStyled } from "@/styleguide";

const props = defineProps(["value", "options", "optionValue", "placeholder"]);
</script>
