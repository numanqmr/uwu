<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pb-8" />

      <h1 class="text-4xl text-gray-900 dark:text-white font-bold pb-8">
        Create a review:
      </h1>

      <p class="text-small text-gray-500 dark:text-slate-300 pb-8">
        Add your review for the following anime
      </p>

      <h3 class="text-2xl pb-4 dark:text-white font-bold">Review:</h3>

      <TextEditor @text-update="(text) => updateText(text)" />

      <br />
      <button
        class="px-4 py-2 mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-green-600 rounded-full dark:text-white"
        @click="submitReview"
      >
        Submit Review
      </button>

      <h3 class="text-2xl pb-4 dark:text-white font-bold">Preview:</h3>

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

const submitReview = () => {
  console.log(content.value);
};
</script>
