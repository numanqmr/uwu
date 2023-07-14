<template>
  <div class="flex w-full items-center justify-center">
    <div
      class="h-8 w-8 cursor-pointer rounded-md border-2 border-stone-600 bg-transparent text-center align-middle font-semibold hover:bg-stone-200 dark:text-white"
    >
      <div class="grid items-center">
        <p>&lt;</p>
      </div>
    </div>

    <div
      v-for="index in 8"
      :key="index"
      class="h-8 w-8 cursor-pointer rounded-md border-2 border-stone-600 bg-transparent text-center align-middle font-semibold hover:bg-stone-200 dark:text-white"
    >
      <div class="grid items-center">
        <p>
          {{ index }}
        </p>
      </div>
    </div>

    <div
      class="h-8 w-8 cursor-pointer rounded-md border-2 border-stone-600 bg-transparent text-center align-middle font-semibold hover:bg-stone-200 dark:text-white"
    >
      <div class="grid items-center">
        <p>></p>
      </div>
    </div>
  </div>
</template>
