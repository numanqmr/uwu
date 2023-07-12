<template>
  <div
    class="w-60 rounded-lg bg-gradient-to-t from-indigo-300 flex flex-col items-center px-4 py-2 shadow-lg cursor-pointer"
  >
    <div
      class="min-w-min h-56 rounded-lg flex flex-col items-center p-4 shadow-lg"
    >
      <div class="w-24 h-24 rounded-full overflow-hidden">
        <img
          class="h-full object-cover"
          src="https://i.pinimg.com/236x/85/33/cc/8533ccaccde85267fb4dd61f621b5068--kenzo-anime-characters.jpg"
        />
      </div>
      <div>
        <p class="text-lg font-bold">{{ name || "Kenzo Tenma" }}</p>
      </div>

      <div class="w-full flex gap-2">
        <div class="w-1/2">
          <p class="w-100 block text-center">
            <span class="font-bold text-lg">{{ reviews || "123" }}</span>
            Reviews
          </p>
        </div>
        <div class="w-1/2">
          <p class="w-100 block text-center">
            <span class="font-bold text-lg">{{ recommends || "45" }}</span>
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
