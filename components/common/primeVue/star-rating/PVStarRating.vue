<template>
  <div>
    <Rating
      :modelValue="props.rating"
      :cancel="false"
      :disabled="props.disabled"
      :pt="primeVueRatingStyled()"
    />
  </div>
</template>

<script setup lang="ts">
import Rating from "primevue/rating";
import { primeVueRatingStyled } from "@/styleguide";

type Props = { rating: number; disabled?: boolean };
const props = defineProps<Props>();
</script>
