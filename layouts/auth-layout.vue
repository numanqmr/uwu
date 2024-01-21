<template>
  <div v-show="!isLoadingProfile">
    <Sidebar />
    <div class="pl-0 sm:pl-64">
      <div class="px-8">
        <slot />
      </div>
    </div>
  </div>

  <div v-show="isLoadingProfile">
    <SidebarLoader />
    <div class="pl-0 sm:pl-64">
      <div class="px-8">bitch</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store";

const { isLoadingProfile } = storeToRefs(useUserStore());
</script>
