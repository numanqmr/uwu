<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="my-14 text-xl font-extrabold dark:text-white">
        Nerds (Am I right?)
      </div>
      <div class="w-100 grid md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(item, index) in data" :key="index" class="mb-12">
          <PersonCard
            @click="router.push(authRoutes.peopleId(item.id))"
            :name="item.name"
            :reviews="item.reviews"
            :recommends="item.recommends"
          />
        </div>
      </div>
      <div class="pb-4">
        <PaginationRow />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { res } = await useGetUsersList();
const data = res.data;
</script>
