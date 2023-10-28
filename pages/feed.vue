<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h5
        class="py-4 text-lg font-bold leading-none text-gray-900 dark:text-white"
      >
        This week in recommendations
      </h5>
      <Recents />
      <div class="mt-4">
        <p class="text-lg font-bold text-gray-900 dark:text-white">Feed</p>

        <div class="mt-2" />

        <div class="rounded-lg bg-white px-4 py-2 shadow-md dark:bg-gray-700">
          <div class="flex items-center gap-2 pb-2">
            <div>
              <img
                class="h-12 w-12 rounded-full border-2 border-green-400"
                src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg"
                alt="person.name"
              />
            </div>
            <div>
              <p
                class="truncate text-sm font-bold text-gray-900 dark:text-white"
              >
                Douche
              </p>
              <p class="truncate text-xs text-gray-500 dark:text-gray-400">
                weeb@animeapp.com
              </p>
            </div>
          </div>
          <div
            class="mb-3 inline-flex items-center text-sm font-light text-gray-900 dark:text-white"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            pariatur earum temporibus hic quos unde illum, tempore id harum
            saepe?
          </div>

          <div class="flex gap-2 text-sm">
            <button class="rounded-md border-2 border-gray-400 px-4 py-1">
              Like
            </button>
            <button class="rounded-md border-2 border-gray-400 px-4 py-1">
              Comment
            </button>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// definePageMeta({
//   // middleware: ["auth"],
// });
// const client = useSupabaseClient();
// const user = useSupabaseUser();

// const handleLogout = () => {
//   client.auth.signOut();
// };

// onMounted(() => {
//   watchEffect(() => {
//     if (!user.value) return navigateTo(unauthRoutes.login);
//   });
// });
</script>
