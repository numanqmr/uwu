<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h1>Show one users review here</h1>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { apiUrls } from "~/api";

const route = useRoute();
const reviewId = route.params.reviewId;
const id = route.params.id;

const { isDataInCache } = useCheckInCache();

const animeKey = `anime-${id}`;
const { data } = await useFetch(
  apiUrls.animePageReviewSingle(id as string, reviewId as string),
  {
    key: animeKey,
    getCachedData: (key) => isDataInCache(key),
  },
);
</script>
