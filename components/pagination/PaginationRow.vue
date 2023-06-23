<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="cursor-pointer w-8 h-8 border-stone-600 bg-transparent hover:bg-stone-200 border-2 text-center dark:text-white font-semibold rounded-md align-middle"
    >
      <div class="grid items-center">
        <p>&lt;</p>
      </div>
    </div>

    <div
      v-for="index in 8"
      :key="index"
      class="cursor-pointer w-8 h-8 border-stone-600 bg-transparent hover:bg-stone-200 border-2 text-center dark:text-white font-semibold rounded-md align-middle"
    >
      <div class="grid items-center">
        <p>
          {{ index }}
        </p>
      </div>
    </div>

    <div
      class="cursor-pointer w-8 h-8 border-stone-600 bg-transparent hover:bg-stone-200 border-2 text-center dark:text-white font-semibold rounded-md align-middle"
    >
      <div class="grid items-center">
        <p>></p>
      </div>
    </div>
  </div>
</template>
