<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pt-8" />
      <h1 class="text-2xl font-bold dark:text-white/90">
        {{ data.animeInfo.title }}
      </h1>
      <p class="mt-1 text-xl dark:text-white/90">
        Reviewed by

        <span
          class="cursor-pointer text-blue-400 hover:underline"
          @click="router.push(authRoutes.peopleId(data.reviewer.id))"
        >
          {{ data.reviewer.name }}
        </span>
      </p>

      <div
        class="mt-4 w-full rounded-lg bg-slate-50 p-8 shadow-2xl dark:bg-slate-700"
      >
        <div
          v-html="data.review"
          class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-ul:[&>p]:text-3xl"
        ></div>
      </div>

      <div class="mt-8 flex w-full flex-col items-center dark:text-white/80">
        <p>Final rating</p>
        <div>{{ data.rating }}</div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useGetReviewById } from "~/composables";

const router = useRouter();
const route = useRoute();
const reviewId = route.params.reviewId as string;
const id = route.params.id as string;

const { res } = await useGetReviewById(id, reviewId);
const { data } = res;
</script>
