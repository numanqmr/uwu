<template>
  <InputSwitch v-model="checked" :pt="primeVueSwitchStyled" />
</template>

<script setup>
import InputSwitch from "primevue/inputswitch";
import { primeVueSwitchStyled } from "@/styleguide";
const checked = ref(true);
</script>
