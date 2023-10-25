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

        <div class="mt-20 flex flex-col gap-4 md:flex-row">
          <div
            class="w-full rounded-2xl bg-white px-4 py-6 shadow-2xl dark:bg-gray-800 dark:text-white md:w-1/4"
          >
            <h3 class="w-100 mb-4 text-lg font-bold">Stats</h3>
            <div class="grid grid-rows-3 gap-1">
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Watched
              </div>
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Reviewed
              </div>
              <div
                class="w-100 rounded-lg bg-blue-100 px-4 py-2 font-bold dark:bg-blue-300 dark:text-gray-900"
              >
                Likes
              </div>
            </div>
          </div>

          <div
            class="w-full rounded-2xl bg-white px-4 py-6 shadow-2xl dark:bg-gray-800 dark:text-white md:w-3/4"
          >
            <h3 class="w-100 mb-4 text-lg font-bold">About</h3>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sint quo ullam, sequi accusantium ut quis dicta adipisci impedit
              obcaecati soluta numquam eaque quidem inventore recusandae iusto
              nostrum harum a et nulla voluptas deleniti corrupti ea! Molestias
              laudantium perspiciatis, qui quae sequi repellat id autem quia
              impedit hic maxime dolor.
            </p>
          </div>
        </div>

        <div
          class="mt-8 rounded-lg bg-white p-4 py-8 pb-3 shadow-2xl dark:bg-gray-800 dark:text-white"
        >
          <h3 class="w-100 mb-4 text-lg font-bold">Anime rankings</h3>

          <div
            v-for="index in 5"
            :key="index"
            class="mb-1 rounded-lg bg-slate-200 p-2 dark:bg-gray-700"
          >
            <div
              class="flex items-center justify-center md:grid md:grid-cols-6 md:divide-x"
            >
              <div class="grid place-content-center font-bold md:col-span-1">
                <p>
                  #<span class="p-0.5 text-xl font-extrabold md:text-3xl">{{
                    index
                  }}</span>
                </p>
              </div>

              <div class="col-span-1 grid place-content-center overflow-hidden">
                <img
                  src="https://i.pinimg.com/236x/85/33/cc/8533ccaccde85267fb4dd61f621b5068--kenzo-anime-characters.jpg"
                  class="mx-auto h-12 w-2/3 rounded-lg object-cover md:h-24"
                />
              </div>

              <div class="col-span-2 flex items-center justify-start">
                <p class="text-xl font-bold md:pl-4 md:text-2xl">Monster</p>
              </div>
            </div>
          </div>

          <div class="text-center text-blue-500 underline">view more</div>
        </div>

        <div
          class="mb-4 mt-8 rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white"
        >
          <div class="w-100 mb-4 text-center text-lg font-bold">
            <h3>User Reviews</h3>

            <div></div>
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
