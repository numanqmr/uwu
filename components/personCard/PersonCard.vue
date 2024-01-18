<template>
  <div
    class="flex cursor-pointer flex-col items-center rounded-lg bg-gradient-to-t from-indigo-300 px-4 py-2 shadow-lg md:w-60"
  >
    <div
      class="flex h-56 w-full flex-col items-center rounded-lg p-4 shadow-lg md:min-w-min"
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

      <div class="flex w-full flex-col gap-2 md:flex-row">
        <div class="grid place-content-center md:w-1/2">
          <div
            class="w-100 flex items-center justify-center gap-1 text-center md:flex md:flex-col"
          >
            <span class="text-lg font-bold">{{ reviews || "123" }}</span>
            <p>Reviews</p>
          </div>
        </div>

        <div class="grid place-content-center md:w-1/2">
          <div
            class="w-100 flex items-center justify-center gap-1 text-center md:flex md:flex-col"
          >
            <span class="text-lg font-bold">{{ recommends || "45" }}</span>
            <p>Recommends</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name", "reviews", "recommends"]);
</script>
