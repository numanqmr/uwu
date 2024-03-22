<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8" />

      <div class="text-2xl font-bold">Anime Approval Requests</div>

      <div class="pt-8" />

      <div class="flex flex-col gap-2">
        <div
          v-for="(item, i) in Array(12)"
          :key="i"
          class="flex items-center justify-between rounded-md bg-blue-100 px-4 py-2"
        >
          <!-- ANIME NAME -->

          <div>Berserk {{ i }}</div>

          <!-- APPROVE/REJECT BTNS -->
          <div class="flex gap-2">
            <div class="rounded-md bg-green-500 p-2 text-white">Tick</div>

            <div class="rounded-md bg-red-500 p-2 text-white">Cross</div>
          </div>
        </div>

        <div class="pb-8" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
