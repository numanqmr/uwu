<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8 dark:text-slate-50">
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
        <div class="w-1/2">
          <p class="w-full pb-2 text-center font-bold">Approve Users</p>

          <div
            class="grid cursor-pointer place-content-center rounded-2xl bg-slate-100 py-4 shadow-lg hover:scale-105 sm:h-64 sm:py-0 dark:bg-slate-700 [&_svg]:hover:scale-105"
            @click="router.push(authRoutes.adminPendingUsers)"
          >
            <UserGroupIcon class="h-24 w-24 fill-black dark:fill-white" />
          </div>
        </div>

        <div class="w-1/2">
          <p class="w-full pb-2 text-center font-bold">Approve Anime</p>

          <div
            class="grid cursor-pointer place-content-center rounded-2xl bg-slate-100 py-4 shadow-lg hover:scale-105 sm:h-64 sm:py-0 dark:bg-slate-700 [&_svg]:hover:scale-105"
            @click="router.push(authRoutes.adminPendingAnime)"
          >
            <TicketIcon class="h-24 w-24 fill-black dark:fill-white" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon, TicketIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
</script>
