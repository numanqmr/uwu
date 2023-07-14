<template>
  <div v-if="showModal">
    <Teleport to="body">
      <div
        v-show="showModal"
        class="absolute inset-0 z-40 flex h-screen w-full items-center justify-center bg-black bg-opacity-60"
        @click.self="hideModal"
      >
        <div class="h-40 w-64 rounded-lg bg-white text-2xl">HI BUDDY</div>
      </div>
    </Teleport>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8"
  >
    <div class="mb-4 flex items-center justify-between">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        This week in recommendations
      </h5>
      <div
        class="cursor-pointer text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        @click="toggleModal"
      >
        View all
      </div>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li v-for="person in recommendationList" class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8 rounded-full"
                src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg"
                :alt="person.name"
              />
            </div>
            <div class="min-w-0 flex-1">
              <p
                class="truncate text-sm font-medium text-gray-900 dark:text-white"
              >
                {{ person.name }}
              </p>
              <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                {{ person.email }}
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              {{ person.title }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const recommendationList = ref([
  {
    avatar:
      "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    name: "Neil Sims",
    email: "email@windster.com",
    title: "$320",
  },
  {
    avatar:
      "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    name: "Bonnie Green",
    email: "email@windster.com",
    title: "$3467",
  },
  {
    avatar:
      "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    name: "Michael Gough",
    email: "email@windster.com",
    title: "$67",
  },
  {
    avatar:
      "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    name: "Lana Byrd",
    email: "email@windster.com",
    title: "$367",
  },
  {
    avatar:
      "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    name: "Thomes Lean",
    email: "email@windster.com",
    title: "$2367",
  },
]);

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = true;
};
const hideModal = () => {
  showModal.value = false;
};
</script>
