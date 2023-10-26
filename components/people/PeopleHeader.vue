<template>
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
              :src="getImgSrc(profilePic)"
              alt="Rounded avatar"
            />
          </div>
          <div class="ml-2 p-2">
            <p class="text-lg font-bold">{{ name }}</p>
            <p class="text-sm text-slate-600">
              {{ email || "email@email.com" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name", "email", "profilePic"]);

const getImgSrc = (url) => {
  if (url) return url;
};
</script>
