<template>
  <InputNumber
    :modelValue="props.value"
    :useGrouping="props?.useGrouping ?? true"
    :pt="primeVueInputNumberStyled"
  />
</template>

<script setup>
import InputNumber from "primevue/inputnumber";
import { primeVueInputNumberStyled } from "@/styleguide";

const props = defineProps(["useGrouping", "value"]);
</script>
