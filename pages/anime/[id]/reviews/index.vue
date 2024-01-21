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
import { useGetAnimeReviews } from "~/composables";

const route = useRoute();
const id = route.params.id as string;

const { res } = await useGetAnimeById(id);
const { data: animeData } = res;

const { res: animeReviewsRes } = await useGetAnimeReviews(id);
const { data } = animeReviewsRes;
</script>
