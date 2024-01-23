<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="px-4 pt-8">
        <PeopleHeader
          :name="userData.name || 'Kenzo Tenma'"
          :email="userData.email || 'kenzo@monster.com'"
          :profilePic="
            userData.imgURL ||
            'https://i.pinimg.com/236x/85/33/cc/8533ccaccde85267fb4dd61f621b5068--kenzo-anime-characters.jpg'
          "
        />

        <div class="mt-20 flex flex-col gap-4 md:flex-row">
          <div
            class="w-full rounded-2xl bg-white px-4 py-6 shadow-2xl dark:bg-gray-800 dark:text-white md:w-1/4"
          >
            <h3 class="w-100 mb-4 text-lg font-bold">Stats</h3>
            <div class="grid grid-rows-3 gap-1">
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Watched
              </div>
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Reviewed
              </div>
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Likes
              </div>
            </div>
          </div>

          <div
            class="w-full rounded-2xl bg-white px-4 py-6 shadow-2xl dark:bg-gray-800 dark:text-white md:w-3/4"
          >
            <h3 class="w-100 mb-4 text-lg font-bold">About</h3>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sint quo ullam, sequi accusantium ut quis dicta adipisci impedit
              obcaecati soluta numquam eaque quidem inventore recusandae iusto
              nostrum harum a et nulla voluptas deleniti corrupti ea! Molestias
              laudantium perspiciatis, qui quae sequi repellat id autem quia
              impedit hic maxime dolor.
            </p>
          </div>
        </div>

        <div
          class="mt-8 rounded-lg bg-white p-4 py-8 pb-3 shadow-2xl dark:bg-gray-800 dark:text-white"
        >
          <h3 class="w-100 mb-4 text-lg font-bold">Anime rankings</h3>

          <div
            v-for="index in 5"
            :key="index"
            class="mb-1 rounded-lg bg-slate-200 p-2 dark:bg-gray-700"
          >
            <div
              class="flex items-center justify-center md:grid md:grid-cols-6 md:divide-x"
            >
              <div class="grid place-content-center font-bold md:col-span-1">
                <p>
                  #<span class="p-0.5 text-xl font-extrabold md:text-3xl">{{
                    index
                  }}</span>
                </p>
              </div>

              <div class="col-span-1 grid place-content-center overflow-hidden">
                <img
                  src="https://i.pinimg.com/236x/85/33/cc/8533ccaccde85267fb4dd61f621b5068--kenzo-anime-characters.jpg"
                  class="mx-auto h-12 w-2/3 rounded-lg object-cover md:h-24"
                />
              </div>

              <div class="col-span-2 flex items-center justify-start">
                <p class="text-xl font-bold md:pl-4 md:text-2xl">Monster</p>
              </div>
            </div>
          </div>

          <div class="text-center text-blue-500 underline">view more</div>
        </div>

        <div class="mb-4 mt-8 rounded-lg bg-white p-4 py-8 dark:bg-gray-800">
          <h3 class="mb-3 text-xl font-bold dark:text-white">User Reviews</h3>
          <div
            v-for="(reviewItem, index) in userReviews"
            :key="`review-${index}`"
            class="w-100 mb-4 rounded-lg bg-slate-100 p-4 text-white shadow-lg dark:bg-slate-700/80"
          >
            <div class="">
              <div class="mb-2 flex w-full justify-between">
                <h3 class="text-lg font-bold">
                  {{ reviewItem.animeInfo.title }}
                </h3>
                <span>{{ reviewItem.rating }}</span>
              </div>
              <p class="text-sm text-black/60 dark:text-white/80">
                {{ reviewItem.reviewText.slice(0, 220) }}...
              </p>
              <NuxtLink
                :href="authRoutes.viewReview(reviewItem.animeId, reviewItem.id)"
                class="text-sm text-blue-400 underline dark:text-blue-400"
              >
                Read more</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useGetUserReviews, useUserById } from "~/composables";

const route = useRoute();
const id = route.params.id as string;

const { res } = await useUserById(id);
const userData = res.data;

if (!userData.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}

// For User reviews
const { res: reviewsRes } = await useGetUserReviews(id);
const userReviews = reviewsRes.data;

console.log(userReviews.value);

const getImgSrc = (url: string) => {
  if (url) return url;
};
</script>
