<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="text-xl my-14 font-extrabold dark:text-white">
        Nerds (Am I right?)
      </div>
      <div
        class="w-100 grid gap-4 grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-3"
      >
        <PersonCard @click="router.push(authRoutes.peopleId(1))" />
        <div v-for="index in 20" :key="index" class="mb-12 mx-2"></div>
      </div>
      <div class="pb-4">
        <PaginationRow />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const router = useRouter();
</script>
