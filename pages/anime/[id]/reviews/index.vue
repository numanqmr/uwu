<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h5
        class="py-4 text-lg font-bold leading-none text-gray-900 dark:text-white"
      >
        Reviews for {{ animeData?.title }}
      </h5>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { apiUrls } from "~/api";

const route = useRoute();
const id = route.params.id as string;
const { isDataInCache } = useCheckInCache();

const { res } = await useGetAnimeById(id);
const { data: animeData } = res;

const key = `/api/anime/${id}/reviews`;
const { data } = await useFetch(apiUrls.animePageReviewsAll(id), {
  key: key,
  getCachedData: (key) => isDataInCache(key),
});
</script>
