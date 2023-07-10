<template>
  <h1 class="text-3xl font-extrabold dark:text-white">
    This is the hoooomeee page
  </h1>
  <h1 class="text-2xl font-bold dark:text-white">
    Here are some routes for development
  </h1>

  <div class="flex flex-col text-blue-400 underline">
    <NuxtLink
      :to="route.route"
      v-for="route in routes"
      :key="route.route"
      class="mb-4"
    >
      <span class="ml-3">{{ route.name }}</span>
    </NuxtLink>
  </div>

  <PersonCard />
</template>

<script setup>
const routes = reactive([
  { name: "Dashboard", route: authRoutes.dashboard },
  { name: "Feed", route: authRoutes.feed },
  { name: "People", route: authRoutes.people },
  { name: "Anime", route: authRoutes.anime },
  { name: "Login", route: unauthRoutes.login },
  { name: "Register", route: unauthRoutes.register },
  { name: "Test", route: "/test" },
]);
</script>
