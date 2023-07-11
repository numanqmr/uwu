<template>
  <div
    v-if="toggle"
    class="absolute top-0 left-0 right-0 w-100 h-screen bg-gray-800 sm:hide opacity-20 transition"
    @click.self="hideSidebar"
  ></div>

  <button
    data-drawer-target="sidebar-multi-level-sidebar"
    data-drawer-toggle="sidebar-multi-level-sidebar"
    aria-controls="sidebar-multi-level-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    @click="toggleSidebar"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
    :class="{ [`translate-x-0`]: toggle }"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 pt-8"
    >
      <div class="w-100 flex flex-col column items-center justify-center pb-8">
        <img
          class="w-14 h-14 rounded-full"
          :src="user.userImg"
          alt="Rounded avatar"
        />
        <p class="pt-2 w-100 text-lg font-bold dark:text-white">
          {{ user.name }}
        </p>
        <span class="pt-2 w-100 text-gray-500 text-sm dark:text-slate-400">
          {{ user.email }}
        </span>
      </div>

      <ul class="space-y-2 font-medium">
        <li v-for="name in routes" @click="hideSidebar">
          <NuxtLink :to="name.route">
            <div
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span class="ml-3">{{ name.name }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <ul
        class="mb-2 font-medium absolute bottom-0 left-0 right-0 px-2 cursor-pointer"
      >
        <li>
          <div
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-red-400"
          >
            <span class="ml-3 py-2">Log out</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { userStore } from "@/store";

const user = userStore();

const toggle = ref(false);

const toggleSidebar = () => (toggle.value = !toggle.value);
const hideSidebar = () => (toggle.value = false);

const routes = reactive([
  { name: "Dashboard", route: authRoutes.dashboard },
  { name: "Feed", route: authRoutes.feed },
  { name: "People", route: authRoutes.people },
  { name: "Anime", route: authRoutes.anime },
]);
</script>
