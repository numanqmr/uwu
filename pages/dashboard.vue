<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8">
        <div class="flex gap-3 justify-between mb-8">
          <div
            class="w-1/3 h-64 bg-orange-300 rounded-2xl cursor-pointer"
            @click="router.push({ path: authRoutes.addAnime })"
          >
            ADD ANIME
          </div>
          <div
            class="w-1/3 h-64 bg-red-300 rounded-2xl cursor-pointer"
            @click="router.push({ path: authRoutes.addReview })"
          >
            ADD REVIEW
          </div>
          <div class="w-1/3 h-64 bg-blue-300 rounded-2xl cursor-pointer" />
        </div>

        <div class="mb-8">
          <div class="text-2xl font-bold dark:text-white mb-4">
            Your insights
          </div>
          <div class="mt-8 bg-slate-400 rounded-lg p-4">
            <div class="w-[80%] bg-white">Your insights</div>
          </div>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="pt-8 px-4">
        <div class="text-2xl font-bold dark:text-white mb-4">Your Profile</div>
        <div
          class="w-full h-64 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-3xl relative"
        >
          <div
            class="absolute bottom-[-20%] left-[50%] translate-x-[-50%] w-[85%] min-h-[32px] rounded-3xl bg-gray-100 -clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border drop-shadow-2xl"
          >
            <div class="flex p-8 justify-center">
              <div class="flex flex-col items-center">
                <div>
                  <img
                    class="w-24 h-24 rounded-full"
                    :src="user.userImg"
                    alt="Rounded avatar"
                  />
                </div>
                <div class="p-2 ml-2">
                  <p class="font-bold text-lg">{{ user.name }}</p>
                  <p class="text-sm text-slate-600">{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-16 flex gap-2">
          <div
            class="bg-white rounded-lg p-8 w-1/2 dark:bg-gray-800 dark:text-white"
          >
            <div class="font-bold mb-4 text-lg">Your Settings</div>

            <div class="flex gap-4 align-middle">
              <input
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"
              />
              <div class="font-bold text-gray-600 dark:text-slate-200 text-sm">
                Email alerts
              </div>
            </div>

            <div class="flex gap-4 align-middle">
              <input
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"
              />
              <div class="font-bold text-gray-600 dark:text-slate-200 text-sm">
                2FA
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-lg p-8 w-1/2 dark:bg-gray-800 dark:text-white"
          >
            <div class="font-bold mb-4 text-lg">Account Info</div>
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

const user = userStore();
// definePageMeta({ layout: "auth-layout" });
definePageMeta({
  layout: false,
});

const router = useRouter();
</script>
