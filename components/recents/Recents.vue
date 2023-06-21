<template>
  <div v-if="showModal">
    <Teleport to="body">
      <div
        v-show="showModal"
        class="absolute inset-0 z-40 w-full h-screen bg-black opacity-60 flex justify-center items-center"
        @click.self="hideModal"
      >
        <div class="w-64 h-40 bg-white text-2xl rounded-lg">HI BUDDY</div>
      </div>
    </Teleport>
  </div>

  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        This week in recommendations
      </h5>
      <div
        class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
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
                class="w-8 h-8 rounded-full"
                src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg"
                :alt="person.name"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {{ person.name }}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
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
