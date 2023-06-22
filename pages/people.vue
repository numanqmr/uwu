<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="text-xl my-14 font-extrabold dark:text-white">
        Nerds (Am I right?)
      </div>
      <div
        class="w-100 grid gap-4 grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-3"
      >
        <div v-for="index in 20" :key="index" class="mb-12 mx-4">
          <PersonCard />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
