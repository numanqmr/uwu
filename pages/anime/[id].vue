<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h1 class="text-lg dark:text-white">{{ route.params.id }}</h1>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
