<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="my-14 text-xl font-extrabold dark:text-white">
        Nerds (Am I right?)
      </div>
      <div
        class="w-100 grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3 sm:grid-rows-3"
      >
        <div v-for="(item, index) in data" :key="index" class="mx-2 mb-12">
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

<script setup>
const router = useRouter();
const { data } = useFetch("/api/people", { key: "users" });
</script>
