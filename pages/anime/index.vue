<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="my-14 text-xl font-extrabold dark:text-white">Anime List</div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(anime, index) in animeList" :key="`anime-${index}`">
          <AnimeCard
            :id="anime.id"
            :title="anime.title"
            :description="anime.description"
            :imgURL="anime.imgURL"
            :views="anime.views"
            :likes="anime.likes"
            :reviews="anime.reviews"
            :genres="anime.genres"
          />
        </div>
      </div>
      <div class="py-4">
        <PaginationRow />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { data: animeList } = useFetch("/api/anime", { key: "anime" });
</script>
