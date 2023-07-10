<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="text-xl my-14 font-extrabold dark:text-white">Anime List</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimeCard v-for="index in 15" :key="`anime-${index}`" />
      </div>
      <div class="py-4">
        <PaginationRow />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup></script>
