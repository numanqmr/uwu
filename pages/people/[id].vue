<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="px-4 pt-8">
        <div
          class="relative h-64 w-full rounded-3xl bg-gradient-to-r from-green-100 from-10% via-green-200 via-30% to-emerald-500 to-90%"
        >
          <div
            class="-clip-padding absolute bottom-[-20%] left-[50%] min-h-[32px] w-[85%] translate-x-[-50%] rounded-3xl border bg-gray-100 bg-opacity-60 drop-shadow-2xl backdrop-blur-sm backdrop-filter"
          >
            <div class="flex justify-center p-8">
              <div class="flex flex-col items-center">
                <div>
                  <img
                    class="h-24 w-24 rounded-full"
                    :src="getImgSrc(userData?.imgURL)"
                    alt="Rounded avatar"
                  />
                </div>
                <div class="ml-2 p-2">
                  <p class="text-lg font-bold">{{ userData?.name }}</p>
                  <p class="text-sm text-slate-600">
                    {{ userData?.email || "email@email.com" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-16 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
        >
          <div class="w-100 mb-4 text-center text-lg font-bold">User Stats</div>
          <div class="w-100 pb-2 font-bold">User Stats</div>
          <div class="w-100 pb-2 font-bold">User Stats</div>
          <div class="w-100 pb-2 font-bold">User Stats</div>
          <div class="w-100 pb-2 font-bold">User Stats</div>
          <div class="w-100 pb-2 font-bold">User Stats</div>
        </div>

        <div
          class="mt-16 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
        >
          <div class="w-100 mb-4 text-center text-lg font-bold">
            Watched anime and rankings
          </div>
        </div>
        <div
          class="mt-16 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
        >
          <div class="w-100 mb-4 text-center text-lg font-bold">
            User Reviews
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: userData } = await useFetch(`/api/people/${id}`, {
  key: `user-${id}`,
});

if (!userData.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}

const getImgSrc = (url) => {
  if (url) return url;
};
</script>
