<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div
        class="mt-8 rounded-lg bg-slate-50 p-4 dark:bg-slate-800 dark:text-white"
      >
        <div
          class="w-100 font-md border-b-2 border-slate-400 px-4 py-2 font-medium"
        >
          <span class="mr-2 text-3xl"> 🖤 </span>
          Numan likes your review on
          <span class="cursor-pointer text-blue-500 underline">Ergo Proxy</span>
        </div>
        <div
          class="w-100 font-md border-b-2 border-slate-400 px-4 py-2 font-medium"
        >
          <span class="mr-2 text-3xl"> 📩 </span>

          You recieved a new msg from Jonas
        </div>
        <div class="w-100 font-md px-4 py-2 font-medium">
          <span class="mr-2 text-3xl"> 👋 </span>
          You joined the platform on 21st January 2023
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
