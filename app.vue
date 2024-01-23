<template>
  <div class="dark:bg-slate-900">
    <div
      v-if="!!loader.isLoading.value"
      class="fixed bottom-0 right-0 z-50 mb-2 mr-2 grid h-16 w-16 place-content-center rounded-lg bg-blue-500"
    >
      <p class="font-bolder animate-spin uppercase text-white">I</p>
    </div>

    <NuxtPage> </NuxtPage>
  </div>
</template>

<script setup lang="ts">
const loader = useLoadingIndicator();
</script>
