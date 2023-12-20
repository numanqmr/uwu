<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="index in 10" :key="`anime-card-loader-${index}`">
      <div
        class="relative h-[330px] w-[100%] animate-pulse overflow-hidden rounded-xl bg-slate-200 shadow-sm sm:h-[360px]"
      />
    </div>
  </div>
</template>
