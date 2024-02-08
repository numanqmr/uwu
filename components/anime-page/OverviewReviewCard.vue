<template>
  <section
    class="mb-8 rounded-md bg-white p-8 dark:bg-gray-800 dark:text-slate-50"
    ref="loadReviewsTarget"
  >
    <h5 class="mb-10 text-center text-xl font-semibold md:mb-6">Reviews:</h5>

    <!-- LOADER =========================================== -->
    <div v-if="!data && pending">
      <LoaderOverviewReviewCard />
    </div>
    <!-- ================================================== -->

    <div v-if="error">
      <p class="w-full text-center text-red-400">
        Error:
        <span class="font-bold">
          {{ error.statusCode }}
        </span>
      </p>
      <p
        class="w-full cursor-pointer text-center text-lg text-blue-400"
        @click="() => execute()"
      >
        Retry?
      </p>
    </div>

    <div v-if="data?.length === 0">
      <p class="w-full text-center text-2xl">😔</p>
      <p class="w-full text-center opacity-50">No reviews yet</p>
    </div>

    <div v-if="data" v-for="(reviewOverview, index) in data" :key="index">
      <div
        class="mb-4 flex min-h-[200px] flex-col flex-wrap items-start rounded-lg p-4 shadow-lg dark:bg-gray-700"
      >
        <div
          class="mb-2 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:justify-start"
        >
          <img
            src="https://cdn.myanimelist.net/images/characters/9/326322.jpg"
            class="mb-1 aspect-square w-24 rounded-full object-cover shadow-lg dark:shadow-black/20"
            alt="Avatar"
          />
          <div class="flex flex-col items-center sm:items-start">
            <p class="text-lg font-bold">{{ reviewOverview.reviewer.name }}</p>
            <p class="mb-1">rating</p>
          </div>
        </div>

        <div class="h-full w-full max-w-[60ch] basis-auto">
          <p
            class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-p:text-xs sm:prose-p:text-base prose-ul:[&>p]:text-2xl"
          >
            {{ reviewOverview?.reviewText?.slice(0, 200) }}...
          </p>
          <!-- <div
            v-html="reviewOverview?.review"
            class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-p:text-xs sm:prose-p:text-base prose-ul:[&>p]:text-2xl"
          ></div> -->
        </div>

        <div class="mt-2 flex w-full flex-grow items-end justify-center">
          <NuxtLink :to="authRoutes.viewReview(id, reviewOverview?.id)">
            <p class="cursor-pointer text-blue-400 underline">Read More...</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { apiUrls } from "~/api";

type Props = { animeData: any; id: string | number };

const props = defineProps<Props>();
const { id } = props;

const loadReviewsTarget = ref(null);
const shouldLoadReviews = ref(false);

const { isDataInCache } = useCheckInCache();

const reviewsOverviewKey = `anime-${id}-reviews-overview`;
const { data, error, execute, pending } = await useFetch<any>(
  apiUrls.animePageReviewsOverview(id),
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
        console.error(error);
      }
    }
  },
);
</script>
