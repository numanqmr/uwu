<template>
  <div
    class="relative shadow-2xl w-[100%] rounded-xl overflow-hidden group cursor-pointer"
    @click="pushToRoute"
  >
    <div class="h-44 overflow-hidden">
      <img
        src="https://cdn.myanimelist.net/images/anime/10/18793.jpg"
        alt="Desert"
        class="w-full max-w-[100%] h-full object-cover transition group-hover:duration-300 duration-700 group-hover:scale-110"
      />
    </div>

    <div class="bg-gray-700 px-2 py-2 flex flex-col">
      <div class="flex justify-center space-x-2 flex-wrap w-full">
        <div
          class="bg-blue-500 rounded-full text-gray-200 bg-opacity-60 text-sm px-2 py-[2px] font-bold"
        >
          Business
        </div>
      </div>

      <div class="my-2 text-center w-full">
        <h6 class="bg-clip-text text-[15px] text-transparent">
          <!-- class={clsx("bg-clip-text text-[15px] text-transparent", BGColor)} -->
          2023
        </h6>
        <h2 class="text-gray-100 font-semibold text-[24px]">Monster</h2>
        <p class="text-gray-400 text-sm mt-2">
          lorem uwu ipsum lorem uwu ipsum lorem uwu ipsum lorem uwu ipsum
        </p>
      </div>

      <div class="flex justify-evenly mt-2 w-full px-1">
        <div
          class="flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer"
        >
          <!-- class={clsx("flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer",BGColor)} -->

          <WatchedIcon />

          <span>13</span>
        </div>
        <div
          class="flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer"
        >
          <!-- class={clsx("flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer",BGColor)} -->
          <LikeIcon />
          <span>5</span>
        </div>
        <div
          class="flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer"
          BGColor
        >
          <!-- class="{clsx(flex flex-col flex-1 items-center text-gray-200 rounded-xl py-1 px-8 cursor-pointer,)}" -->
          <CommentIcon />
          <span>8</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WatchedIcon from "/assets/svg/WatchedIcon";
import LikeIcon from "/assets/svg/LikeIcon";
import CommentIcon from "/assets/svg/CommentIcon";

const router = useRouter();

const pushToRoute = () => {
  router.push({ path: "/anime/monster" });
};
</script>
