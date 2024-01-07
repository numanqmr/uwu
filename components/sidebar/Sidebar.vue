<template>
  <div
    v-if="toggle"
    class="w-100 absolute left-0 right-0 top-0 z-10 bg-gray-800 opacity-20 transition sm:hidden"
    :class="`min-h-[500vh]`"
    @click.self="hideSidebar"
  ></div>
  <!-- THAT "min-h-[500vh]" IRRITATES ME AND I CANT FIND A FIX FOR IT RN-->

  <button
    data-drawer-target="sidebar-multi-level-sidebar"
    data-drawer-toggle="sidebar-multi-level-sidebar"
    aria-controls="sidebar-multi-level-sidebar"
    type="button"
    class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
    @click="toggleSidebar"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="h-6 w-6"
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
    class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
    aria-label="Sidebar"
    :class="{ [`translate-x-0`]: toggle }"
  >
    <div
      class="h-full overflow-y-auto bg-gray-50 px-3 py-4 pt-8 dark:bg-gray-800"
    >
      <div class="w-100 column flex flex-col items-center justify-center pb-8">
        <img
          class="h-14 w-14 rounded-full"
          :src="user.userImg"
          alt="Rounded avatar"
        />
        <p class="w-100 pt-2 text-lg font-bold dark:text-white">
          {{ user.name }}
        </p>
        <span class="w-100 pt-2 text-sm text-gray-500 dark:text-slate-400">
          {{ user.email }}
        </span>
      </div>

      <ul class="space-y-2 font-medium">
        <li v-for="name in routes" @click="hideSidebar">
          <NuxtLink :to="name.route">
            <div
              class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <span class="ml-3">{{ name.name }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <ul
        class="absolute bottom-0 left-0 right-0 mb-2 cursor-pointer px-2 font-medium"
        @click="handleLogout"
      >
        <li>
          <div
            class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-red-400 dark:text-white dark:hover:bg-red-400"
          >
            <span class="ml-3 py-2">Log out</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { userStore, useAuthStore } from "@/store";

const user = userStore();
const authStore = useAuthStore();

const toggle = ref(false);

const toggleSidebar = () => (toggle.value = !toggle.value);
const hideSidebar = () => (toggle.value = false);

const handleLogout = async () => {
  await authStore.logOutUser();
};

const routes = reactive([
  { name: "Dashboard", route: authRoutes.dashboard },
  { name: "Feed", route: authRoutes.feed },
  { name: "People", route: authRoutes.people },
  { name: "Anime", route: authRoutes.anime },
]);
</script>
