<template>
  <div
    class="flex w-60 cursor-pointer flex-col items-center rounded-lg bg-gradient-to-t from-indigo-300 px-4 py-2 shadow-lg"
  >
    <div
      class="flex h-56 min-w-min flex-col items-center rounded-lg p-4 shadow-lg"
    >
      <div class="h-24 w-24 overflow-hidden rounded-full">
        <img
          class="h-full object-cover"
          src="https://i.pinimg.com/236x/85/33/cc/8533ccaccde85267fb4dd61f621b5068--kenzo-anime-characters.jpg"
        />
      </div>
      <div>
        <p class="text-lg font-bold">{{ name || "Kenzo Tenma" }}</p>
      </div>

      <div class="flex w-full gap-2">
        <div class="w-1/2">
          <p class="w-100 block text-center">
            <span class="text-lg font-bold">{{ reviews || "123" }}</span>
            Reviews
          </p>
        </div>
        <div class="w-1/2">
          <p class="w-100 block text-center">
            <span class="text-lg font-bold">{{ recommends || "45" }}</span>
            Recommends
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name", "reviews", "recommends"]);
</script>
