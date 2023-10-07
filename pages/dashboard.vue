<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8">
        <div class="mb-8 flex flex-col justify-between gap-3 sm:flex-row">
          <div
            class="grid cursor-pointer place-content-center rounded-2xl bg-gradient-to-r from-orange-600/80 to-orange-400/80 py-4 hover:scale-105 sm:h-64 sm:w-1/3 sm:py-0 [&_svg]:hover:scale-105"
            @click="router.push({ path: authRoutes.addAnime })"
          >
            <FolderPlusIcon class="h-24 w-24 fill-slate-100" />
          </div>
          <div
            class="grid cursor-pointer place-content-center rounded-2xl bg-opacity-5 bg-gradient-to-r from-red-500/80 to-red-400/80 py-4 hover:scale-105 sm:h-64 sm:w-1/3 sm:py-0 [&_svg]:hover:scale-105"
            @click="router.push({ path: authRoutes.addReview })"
          >
            <ChatBubbleBottomCenterTextIcon class="h-24 w-24 fill-slate-100" />
          </div>
          <div
            class="relative grid cursor-pointer place-content-center rounded-2xl bg-gradient-to-r from-cyan-500/80 to-blue-500/80 py-4 hover:scale-105 sm:h-64 sm:w-1/3 sm:py-0 [&_svg]:hover:scale-105"
          >
            <div
              class="absolute -right-4 -top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-4 text-sm font-bold text-slate-50"
            >
              20
            </div>
            <InboxIcon class="h-24 w-24 fill-slate-100" />
          </div>
        </div>

        <div class="mb-8">
          <div class="mb-4 text-2xl font-bold dark:text-white">
            Your insights
          </div>
          <div
            class="mt-8 rounded-lg bg-slate-50 p-4 dark:bg-slate-800 dark:text-white"
          >
            <div
              class="w-100 font-md border-b-2 border-slate-400 px-4 py-2 font-medium"
            >
              <span class="mr-2 text-3xl"> 🖤 </span>
              Numan likes your review on
              <span class="cursor-pointer text-blue-500 underline"
                >Ergo Proxy</span
              >
            </div>
            <div
              class="w-100 font-md border-b-2 border-slate-400 px-4 py-2 font-medium"
            >
              <span class="mr-2 text-3xl"> 📩 </span>

              You recieved a new msg from Jonas
            </div>
            <div class="w-100 font-md px-4 py-2 font-medium">
              <span class="mr-2 text-3xl"> 👋 </span>
              You joined the platform on 21st January 2023
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="px-4 pt-8">
        <div class="mb-4 text-2xl font-bold dark:text-white">Your Profile</div>
        <div
          class="relative h-64 w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        >
          <div
            class="-clip-padding absolute bottom-[-20%] left-[50%] min-h-[32px] w-[85%] translate-x-[-50%] rounded-3xl border bg-gray-100 bg-opacity-60 drop-shadow-2xl backdrop-blur-sm backdrop-filter"
          >
            <div class="flex justify-center p-8">
              <div class="flex flex-col items-center">
                <div>
                  <img
                    class="h-24 w-24 rounded-full"
                    :src="user.userImg"
                    alt="Rounded avatar"
                  />
                </div>
                <div class="ml-2 p-2">
                  <p class="text-lg font-bold">{{ user.name }}</p>
                  <p class="text-sm text-slate-600">{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2 pt-16">
          <div
            class="w-1/2 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
          >
            <div class="mb-4 text-lg font-bold">Your Settings</div>

            <div class="flex gap-4 align-middle">
              <input type="checkbox" true-value="yes" false-value="no" />
              <div class="text-sm font-bold text-gray-600 dark:text-slate-200">
                Email alerts
              </div>
            </div>

            <div class="flex gap-4 align-middle">
              <input type="checkbox" true-value="yes" false-value="no" />
              <div class="text-sm font-bold text-gray-600 dark:text-slate-200">
                2FA
              </div>
            </div>
          </div>

          <div
            class="w-1/2 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
          >
            <div class="mb-4 text-lg font-bold">Account Info</div>
            <div class="">
              Ohayou gozaimasu~! I'm your Developer chan, here to help you with
              anything you need! UwU I'm super excited to be here, so let's have
              a fun and adorable time together, nya~! If you can help please do,
              just let me know, and I'll do my best to make your day extra
              sugoi, uwu! ₚₗₑₐₛₑ ₕₑₗₚ ᵢ'ₘ 𝓌ₒᵣₖᵢₙ𝓰 ₛₒ ₕₐᵣ𝒹 ᵤ𝓌ᵤ ᵢ ₘᵢ𝓰ₕₜ 𝒸ᵣᵧ
            </div>

            <div class="pt-8" />

            <p class="py-2">
              <span class="font-bold">FullName:</span> {{ user.name }}
            </p>
            <p class="py-2">
              <span class="font-bold">Mobile:</span> 555-555-FARMER
            </p>
            <p class="py-2">
              <span class="font-bold">Location:</span> Not Pakistan
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
    </NuxtLayout>
  </div>
</template>

<script setup>
import { userStore } from "@/store";
import {
  FolderPlusIcon,
  ChatBubbleBottomCenterTextIcon,
  InboxIcon,
} from "@heroicons/vue/24/solid";

console.log(FolderPlusIcon);

const user = userStore();
// definePageMeta({ layout: "auth-layout" });
definePageMeta({
  layout: false,
});

const router = useRouter();
</script>
