<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8" />

      <div class="text-2xl font-bold dark:text-white">Pending Users</div>

      <!-- PRIME VUE TABLE -->
      <!-- <AdminUsers /> -->

      <!-- TANSTACK TABLE -->
      <div class="pt-8" />
      <AdminUsersTanstackTable />
      <div class="pt-8" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
