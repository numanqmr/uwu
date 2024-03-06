<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="px-4 pt-8">
        <PeopleHeader
          :name="userData.name"
          :email="userData.email"
          :profilePic="userData.imgURL"
        />
        <div class="mt-20 flex flex-col gap-4 md:flex-row dark:text-white">
          <div class="text-2xl font-bold">Reviews</div>
        </div>

        <div class="mt-4 flex w-full gap-4">
          <div
            v-for="(reviewItem, index) in userReviews"
            :key="`review-${index}`"
            class="w-1/3 rounded-xl bg-slate-100 p-4 dark:bg-slate-700 dark:text-white"
          >
            <div class="flex h-full flex-col justify-between">
              <div>
                <div class="mb-4 flex flex-col items-center gap-2">
                  <h3 class="w-full text-center text-lg font-bold">
                    {{ reviewItem.animeInfo.title }}
                  </h3>
                  <PVStarRating
                    :disabled="true"
                    :rating="+reviewItem.rating ?? 0"
                  />
                </div>
                <p class="text-sm text-black/60 dark:text-white/80">
                  {{ reviewItem.reviewText.slice(0, 220) }}...
                </p>
              </div>

              <div class="mt-4 w-full text-center">
                <NuxtLink
                  :href="
                    authRoutes.viewReview(reviewItem.animeId, reviewItem.id)
                  "
                  class="cursor-pointer text-sm text-blue-400 underline"
                >
                  Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { apiUrls } from "@/api";

const route = useRoute();
const id = route.params.id;

const key = `user-${id}`;
const { data: userData } = await useFetch(apiUrls.userProfile(id), { key });

// For User reviews
const { res: reviewsRes } = await useGetUserReviews(id);
const userReviews = reviewsRes.data;

if (!userData.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}
</script>
