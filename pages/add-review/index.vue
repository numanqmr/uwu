<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pb-8" />

      <h1 class="pb-8 text-4xl font-bold text-gray-900 dark:text-white">
        Create a review:
      </h1>

      <p class="text-small pb-8 text-gray-500 dark:text-slate-300">
        Add your review for the following anime
      </p>

      <h3 class="pb-4 text-2xl font-bold dark:text-white">Review:</h3>

      <TextEditor @text-update="(text) => updateText(text)" />

      <br />
      <button
        class="mb-4 rounded-full border-2 border-green-600 px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
        @click="submitReview"
      >
        Submit Review
      </button>

      <h3 class="pb-4 text-2xl font-bold dark:text-white">Preview:</h3>

      <div
        class="w-100 flex justify-center rounded-lg bg-white p-4 pt-8 text-left shadow-lg dark:bg-gray-800"
      >
        <div
          v-html="content"
          class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-ul:[&>p]:text-3xl"
        ></div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3";

const content = ref("");
const contentTextOnly = ref("");

const updateText = (text: Editor) => {
  content.value = text.getHTML();
  contentTextOnly.value = text.getText();
};

const submitReview = () => {
  console.log(content.value);
  console.log(contentTextOnly.value);
};
</script>
