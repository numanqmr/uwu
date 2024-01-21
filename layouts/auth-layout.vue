<template>
  <div v-if="!user.isLoadingProfile">
    <Sidebar />
    <div class="pl-0 sm:pl-64">
      <div class="px-8">
        <slot />
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store";

const user = useUserStore();
</script>
