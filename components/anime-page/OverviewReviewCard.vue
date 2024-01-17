<template>
  <section
    class="mb-8 rounded-md bg-white p-8 dark:bg-gray-800 dark:text-slate-50"
    ref="loadReviewsTarget"
  >
    <h5 class="mb-10 text-center text-xl font-semibold md:mb-6">
      {{ animeData?.reviews }} Review(s):
    </h5>

    <!-- Comment -->
    <div class="flex flex-wrap p-1 shadow-lg">
      <div class="w-full shrink-0 grow-0 basis-auto md:w-2/12">
        <img
          src="https://cdn.myanimelist.net/images/characters/9/326322.jpg"
          class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
          alt="Avatar"
        />
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto md:w-10/12 md:pl-6">
        <p class="mb-3 font-semibold">{{ data?.[0]?.reviewer.name }}</p>
        <div
          v-html="data?.[0]?.review"
          class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-ul:[&>p]:text-3xl"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { apiUrls } from "~/api";

interface Props {
  animeData: any;
  id: string | number;
}

const props = defineProps<Props>();
const { id } = props;
const loadReviewsTarget = ref(null);
const shouldLoadReviews = ref(false);

const { isDataInCache } = useCheckInCache();

const reviewsOverviewKey = `anime-${id}-reviews-overview`;
const { data, error, execute, pending, status } = await useFetch<any>(
  apiUrls.animePageReviews(id),
  {
    key: reviewsOverviewKey,
    getCachedData: (key) => isDataInCache(key),
    immediate: false,
  },
);

const { stop } = useIntersectionObserver(
  loadReviewsTarget,
  async ([{ isIntersecting }], observerElement) => {
    shouldLoadReviews.value = isIntersecting;
    if (isIntersecting) {
      try {
        if (isDataInCache(reviewsOverviewKey)) return;
        await execute();
        stop();
      } catch (error) {
        console.error("Failed fetching reviews");
      }
    }
  },
);
</script>
