<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pb-8" />

      <h1 class="text-4xl text-gray-900 dark:text-white font-bold pb-8">
        Add an anime:
      </h1>

      <p class="text-small text-gray-500 dark:text-slate-300 pb-8">
        Fill out the fields below to add an anime to the listings provided. It
        will be added after a review from the admins to make sure it is a valid
        anime
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4 gap-x-8">
          <div v-for="inputs in inputsList" :key="inputs.label" class="w-full">
            <label
              for="title"
              class="block text-md text-gray-800 pb-2 dark:text-white font-bold"
              >{{ inputs.label }} :
            </label>
            <input
              :type="inputs.inputType"
              v-model="inputs.value"
              class="block mb-4 outline-none border-2 border-blue-200 shadow-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <button type="submit">LOL</button>
      </form>

      <h3 class="text-2xl pb-4 dark:text-white font-bold">Description:</h3>

      <TextEditor @text-update="(text) => updateText(text)" />

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
const inputsList = reactive(addAnimeFormInputs);

const updateText = (text) => (content.value = text);

const handleSubmit = () => {
  const emptyObj = {};
  inputsList.map((item) => (emptyObj[item.schemaType] = item.value));
  emptyObj.description = content.value;
  console.log(inputsList);
  console.log(emptyObj);
  inputsList.forEach((item) => (item.value = ""));
};
</script>
