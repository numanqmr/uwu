<template>
  <div
    class="flex min-h-[200px] flex-col flex-wrap items-start rounded-lg p-4 shadow-lg dark:bg-gray-700"
  >
    <div
      class="mb-2 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:justify-start"
    >
      <div
        class="mb-1 aspect-square w-24 animate-pulse rounded-full bg-slate-300 shadow-lg dark:shadow-black/20"
      />
      <div class="flex flex-col items-center sm:items-start">
        <p
          class="mb-2 h-4 w-[15ch] animate-pulse rounded-full bg-slate-300 text-lg"
        ></p>
        <p
          class="h-2 w-[6ch] animate-pulse rounded-full bg-slate-300 text-lg"
        ></p>
      </div>
    </div>

    <div class="h-full w-full max-w-[60ch] basis-auto">
      <p class="mb-2 h-3 w-full animate-pulse rounded-full bg-slate-300" />
      <p class="mb-2 h-3 w-full animate-pulse rounded-full bg-slate-300" />
      <p class="mb-2 h-3 w-80 animate-pulse rounded-full bg-slate-300" />
    </div>

    <div class="flex w-full flex-grow items-end justify-center">
      <p class="mt-2 h-2 w-[8ch] animate-pulse rounded-full bg-blue-400" />
    </div>
  </div>
</template>

<script setup></script>
