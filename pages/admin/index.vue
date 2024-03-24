<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="py-8 dark:text-slate-50">
        <p>This is the admin page</p>

        <div class="my-1">
          List of features this page offers

          <ul class="my-2">
            <li class="list-disc">Approve Users to join platform</li>
            <li class="list-disc">
              Approve anime item submitted by user to be added to db
            </li>
          </ul>

          <div class="font-bold text-red-400">
            NOTE: ONLY USER TYPE ADMINS SHOULD BE ABLE TO ACCESS THIS PAGE
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col gap-5 sm:flex-row dark:text-slate-50">
        <div
          class="relative w-full hover:scale-105 md:w-1/2 [&_svg]:hover:scale-105"
        >
          <div
            v-if="count?.pendingUsers && count?.pendingUsers > 0"
            class="absolute right-0 z-10 grid h-8 w-8 -translate-y-1/2 translate-x-1/2 place-content-center rounded-full bg-red-500 text-white"
          >
            <p>{{ count?.pendingUsers }}</p>
          </div>
          <div
            class="flex cursor-pointer items-center rounded-2xl bg-slate-100 px-3 py-4 shadow-lg sm:h-64 md:flex-col md:justify-center dark:bg-slate-700"
            @click="router.push(authRoutes.adminPendingUsers)"
          >
            <UserGroupIcon class="h-24 w-24 fill-black dark:fill-white" />
            <p class="w-full pb-2 text-center font-bold">Approve Users</p>
          </div>
        </div>

        <div
          class="relative w-full hover:scale-105 md:w-1/2 [&_svg]:hover:scale-105"
        >
          <div
            v-if="count?.pendingAnime && count?.pendingAnime > 0"
            class="absolute right-0 z-10 grid h-8 w-8 -translate-y-1/2 translate-x-1/2 place-content-center rounded-full bg-red-500 text-white"
          >
            <p>{{ count?.pendingAnime }}</p>
          </div>
          <div
            class="flex cursor-pointer items-center rounded-2xl bg-slate-100 px-3 py-4 shadow-lg sm:h-64 md:flex-col md:justify-center dark:bg-slate-700"
            @click="router.push(authRoutes.adminPendingAnime)"
          >
            <TicketIcon class="h-24 w-24 fill-black dark:fill-white" />
            <p class="w-full pb-2 text-center font-bold">Approve Anime</p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon, TicketIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
const { data: count } = await useFetch<{
  pendingUsers: number;
  pendingAnime: number;
}>("/api/admin/count/pending-items", { lazy: true, server: false });
</script>
