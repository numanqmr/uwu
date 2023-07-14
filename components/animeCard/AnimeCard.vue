<template>
  <div
    class="group relative w-[100%] cursor-pointer overflow-hidden rounded-xl shadow-2xl"
    @click="pushToRoute"
  >
    <div class="h-44 overflow-hidden">
      <img
        :src="props?.imgURL"
        alt="Desert"
        class="h-full w-full max-w-[100%] object-cover transition duration-700 group-hover:scale-110 group-hover:duration-300"
      />
    </div>

    <div class="flex flex-col bg-gray-700 px-2 py-2">
      <div class="flex w-full flex-wrap justify-center space-x-2">
        <template v-for="genre in props?.genres">
          <div
            class="rounded-full bg-blue-500 bg-opacity-60 px-2 py-[2px] text-sm font-bold text-gray-200"
          >
            {{ genre }}
          </div>
        </template>
      </div>

      <div class="my-2 w-full text-center">
        <h2 class="text-[24px] font-semibold text-gray-100">
          {{ props.title }}
        </h2>
        <p class="mt-2 text-sm text-gray-400">
          lorem uwu ipsum lorem uwu ipsum lorem uwu ipsum lorem uwu ipsum
        </p>
      </div>

      <div class="mt-2 flex w-full justify-evenly px-1">
        <div
          class="flex flex-1 cursor-pointer flex-col items-center rounded-xl px-8 py-1 text-gray-200"
        >
          <WatchedIcon />

          <span>{{ props?.views }}</span>
        </div>
        <div
          class="flex flex-1 cursor-pointer flex-col items-center rounded-xl px-8 py-1 text-gray-200"
        >
          <LikeIcon />
          <span>{{ props?.likes }}</span>
        </div>
        <div
          class="flex flex-1 cursor-pointer flex-col items-center rounded-xl px-8 py-1 text-gray-200"
        >
          <CommentIcon />
          <span>{{ props?.reviews }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WatchedIcon from "/assets/svg/WatchedIcon";
import LikeIcon from "/assets/svg/LikeIcon";
import CommentIcon from "/assets/svg/CommentIcon";

const props = defineProps([
  "id",
  "title",
  "description",
  "imgURL",
  "views",
  "likes",
  "reviews",
  "genres",
]);
const router = useRouter();

const pushToRoute = () => {
  router.push({ path: authRoutes.animeId(props.id) });
};
</script>
