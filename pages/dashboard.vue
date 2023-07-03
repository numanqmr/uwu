<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8">
        <div class="flex gap-3 justify-between mb-8">
          <div class="w-1/3 h-64 bg-orange-300 rounded-2xl cursor-pointer" />
          <div class="w-1/3 h-64 bg-red-300 rounded-2xl cursor-pointer" />
          <div class="w-1/3 h-64 bg-blue-300 rounded-2xl cursor-pointer" />
        </div>

        <div class="mb-8">
          <div class="text-2xl font-bold">Your insights</div>
          <div class="mt-8 bg-slate-400 rounded-lg p-4">
            <div class="w-[80%] bg-white">Your insights</div>
          </div>
        </div>
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
