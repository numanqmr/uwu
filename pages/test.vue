<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pb-8" />

      <TextEditor @some-event="(text) => updateText(text)" />

      <br />

      <div
        class="flex w-100 justify-center p-4 pt-8 rounded-lg shadow-lg text-left bg-white dark:bg-gray-800"
      >
        <div
          v-html="content"
          class="prose dark:prose-invert prose-p:mb-0 prose-ul:[&>p]:text-3xl w-full min-h-[30px]"
        ></div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const content = ref("");
const updateText = (text) => (content.value = text);
</script>
