<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h1>Show all reviews here</h1>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { apiUrls } from "~/api";

const route = useRoute();
const id = route.params.id;
const { isDataInCache } = useCheckInCache();

const key = `/api/anime/${id}/reviews`;
const { data } = await useFetch(apiUrls.animePageReviewsAll(id as string), {
  key: key,
  getCachedData: (key) => isDataInCache(key),
});
</script>
