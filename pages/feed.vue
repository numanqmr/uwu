<template>
  <div>
    <NuxtLayout name="auth-layout">
      <h2>This is the feed</h2>
      <button @click="handleLogout">Click to logout</button>
      <Recents />
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
