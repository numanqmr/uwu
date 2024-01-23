<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h5
        class="mb-2 py-4 text-lg font-bold leading-none text-gray-900 dark:text-white"
      >
        Reviews for {{ animeData?.title }}
      </h5>

      <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div
          v-for="review in data"
          class="min-h-8 flex w-full flex-col rounded-lg bg-slate-50 p-4 shadow-lg"
        >
          <!-- Reviewer Info -->
          <h3 class="font-bold">{{ review.reviewer.name }}</h3>
          <h3 class="">{{ review.rating }}</h3>
          <p class="">{{ review.reviewText.slice(0, 150) }}...</p>

          <!-- READ FULL REVIEW -->
          <div
            @click="router.push(authRoutes.viewReview(id, review.id))"
            class="flex w-full grow cursor-pointer items-end justify-center text-center text-blue-400 underline"
          >
            Read more...
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useGetAnimeReviews } from "~/composables";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;

const { res } = await useGetAnimeById(id);
const { data: animeData } = res;

const { res: animeReviewsRes } = await useGetAnimeReviews(id);
const { data } = animeReviewsRes;
</script>
