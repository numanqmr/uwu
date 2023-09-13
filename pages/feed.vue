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
