<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8 px-4">
        <div
          class="w-full h-64 bg-gradient-to-r from-green-100 from-10% via-green-200 via-30% to-emerald-500 to-90% rounded-3xl relative"
        >
          <div
            class="absolute bottom-[-20%] left-[50%] translate-x-[-50%] w-[85%] min-h-[32px] rounded-3xl bg-gray-100 -clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border drop-shadow-2xl"
          >
            <div class="flex p-8 justify-center">
              <div class="flex flex-col items-center">
                <div>
                  <img
                    class="w-24 h-24 rounded-full"
                    :src="getImgSrc(userData?.imgURL)"
                    alt="Rounded avatar"
                  />
                </div>
                <div class="p-2 ml-2">
                  <p class="font-bold text-lg">{{ userData?.name }}</p>
                  <p class="text-sm text-slate-600">
                    {{ userData?.email || "email@email.com" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-lg p-8 dark:bg-gray-800 dark:text-white mt-16"
        >
          <div class="w-100 font-bold mb-4 text-lg text-center">User Stats</div>
          <div class="w-100 font-bold pb-2">User Stats</div>
          <div class="w-100 font-bold pb-2">User Stats</div>
          <div class="w-100 font-bold pb-2">User Stats</div>
          <div class="w-100 font-bold pb-2">User Stats</div>
          <div class="w-100 font-bold pb-2">User Stats</div>
        </div>

        <div
          class="bg-white rounded-lg p-8 dark:bg-gray-800 dark:text-white mt-16"
        >
          <div class="w-100 font-bold mb-4 text-lg text-center">
            Watched anime and rankings
          </div>
        </div>
        <div
          class="bg-white rounded-lg p-8 dark:bg-gray-800 dark:text-white mt-16"
        >
          <div class="w-100 font-bold mb-4 text-lg text-center">
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
