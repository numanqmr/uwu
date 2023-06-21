<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8">
        <Recents />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// definePageMeta({ layout: "auth-layout" });
definePageMeta({
  layout: false,
});
</script>
