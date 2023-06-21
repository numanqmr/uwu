<template>
  <div
    class="w-full min-h-screen bg-gray-100 shadow-xl flex align-middle justify-center items-center px-36 backdrop-blur-xl"
  >
    <div class="w-[60%] min-h-[500px] bg-cyan-100 flex rounded-xl px-4 py-4">
      <div class="w-1/2 px-8 py-8">
        <h1 class="font-bold text-2xl mb-8">Login</h1>
        <form @submit.prevent="handleSubmit">
          <div class="flex-col mb-2">
            <input
              class="w-full shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="email"
              type="email"
              name="email"
              placeholder="email@anime.com"
            />
          </div>

          <div class="flex-col mb-4">
            <input
              class="w-full shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="password"
              type="password"
              name="password"
              placeholder="uwu123"
            />
          </div>

          <button
            type="submit"
            class="text-white bg-black py-2 px-4 rounded-xl w-full"
          >
            Click
          </button>

          <p>
            Not a member?
            <NuxtLink :to="unauthRoutes.register">Signup here</NuxtLink>
          </p>
        </form>
      </div>

      <div class="w-1/2 rounded-2xl overflow-hidden">
        <img
          class="max-w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  // middleware: ["auth"],
});

const email = ref("");
const password = ref("");
const client = useSupabaseClient();

const handleSubmit = () => {
  const { user, error } = client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
};

const user = useSupabaseUser();

onMounted(() => {
  watchEffect(() => {
    if (user.value) return navigateTo("/feed");
  });
});
</script>
