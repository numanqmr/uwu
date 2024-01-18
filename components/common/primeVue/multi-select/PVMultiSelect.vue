<template>
  <MultiSelect
    :modelValue="props?.value"
    :options="optionList"
    :optionLabel="optionLabel || null"
    :placeholder="placeholder || 'Placeholder...'"
    :maxSelectedLabels="3"
    :selectionLimit="selectionLimit"
    :showToggleAll="false"
    :pt="primeVueMultiSelectStyled(isOpen)"
    @show="handleShow"
    @hide="handleShow"
  />
</template>

<script setup>
import MultiSelect from "primevue/multiselect";
import { primeVueMultiSelectStyled } from "@/styleguide";

const props = defineProps({
  value: undefined,
  options: { required: true },
  placeholder: {},
  selectionLimit: {},
  optionLabel: {},
});

const optionList = ref(props.options);
const isOpen = ref(false);

const handleShow = () => (isOpen.value = !isOpen.value);
</script>
