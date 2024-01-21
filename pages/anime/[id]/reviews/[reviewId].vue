<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h1>Show one users review here</h1>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useGetReviewById } from "~/composables";

const route = useRoute();
const reviewId = route.params.reviewId as string;
const id = route.params.id as string;

const { res } = await useGetReviewById(id, reviewId);
const { data } = res;
</script>
