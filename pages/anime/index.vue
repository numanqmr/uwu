<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="text-xl my-14 font-extrabold dark:text-white">Anime List</div>
      <div class="flex flex-wrap gap-y-8 gap-x-1 justify-around">
        <AnimeCard v-for="index in 15" :key="`anime-${index}`" />
      </div>
      <div class="py-4">
        <PaginationRow />
      </div>
    </NuxtLayout>
  </div>
</template>

<script></script>
