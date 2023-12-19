<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-gray-100 px-36 align-middle shadow-xl backdrop-blur-xl"
  >
    <div class="flex min-h-[500px] w-[60%] rounded-xl bg-cyan-100 px-4 py-4">
      <div class="w-1/2 px-8 py-8">
        <h1 class="mb-8 text-2xl font-bold">Login</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mb-2 flex-col">
            <input
              class="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              v-model="email"
              type="email"
              name="email"
              placeholder="email@anime.com"
            />
          </div>

          <div class="mb-4 flex-col">
            <input
              class="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              v-model="password"
              type="password"
              name="password"
              placeholder="uwu123"
            />
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-black px-4 py-2 text-white"
          >
            Click
          </button>

          <p>
            Not a member?
            <NuxtLink :to="unauthRoutes.register">Signup here</NuxtLink>
          </p>
        </form>
      </div>

      <div class="w-1/2 overflow-hidden rounded-2xl">
        <img
          class="h-full max-w-full object-cover"
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
const { loginUser, user } = useAppAuth();

const handleSubmit = async () => {
  const { error } = await loginUser({
    email: email.value,
    password: password.value,
  });
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) return navigateTo("/feed");
  });
});
</script>
