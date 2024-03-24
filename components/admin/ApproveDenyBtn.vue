<template>
  <div class="flex w-full gap-2">
    <div
      class="grid w-1/3 cursor-pointer place-content-center rounded-md bg-green-400 p-4"
    >
      <CheckIcon class="h-4 w-4 fill-white" />
    </div>
    <div
      class="grid w-1/3 cursor-pointer place-content-center rounded-md bg-red-400 p-4"
    >
      <NoSymbolIcon class="h-4 w-4 fill-white" />
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, NoSymbolIcon } from "@heroicons/vue/24/solid";
</script>
