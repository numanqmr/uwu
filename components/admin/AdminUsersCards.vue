<template>
  <div>
    <div>Lets Do Cards</div>

    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
      <div v-if="pending">Loading...</div>

      <div
        v-if="!pending"
        v-for="person in pendingUserData"
        :key="person?.email"
        class="rounded-lg bg-blue-300 p-4 text-sm"
      >
        <p>
          <span class="font-bold"> NAME: </span>

          {{ person?.name }}
        </p>
        <p>
          <span class="font-bold"> EMAIL: </span>

          {{ person?.email }}
        </p>
        <p>
          <span class="font-bold"> DATE: </span>

          {{ person?.dateJoined }}
        </p>
        <div class="mt-2 flex flex-col gap-1">
          <button
            class="rounded-md bg-green-400 p-1 text-sm text-white hover:bg-green-500"
            @click="() => approveUserFunc(person.id)"
          >
            Approve
          </button>
          <button
            class="rounded-md bg-red-400 p-1 text-sm text-white hover:bg-red-500"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetPendingUsersAdmin } from "@/composables/admin";
import { apiUrls } from "~/api";
const mockData = [
  { name: "waleed", email: "waleed@site.com", dateJoined: "12/12/12" },
  { name: "Numan", email: "numan@site.com", dateJoined: "12/12/12" },
  { name: "Peter", email: "peter@site.com", dateJoined: "12/12/12" },
  { name: "Will", email: "will@site.com", dateJoined: "12/12/12" },
  { name: "Marty", email: "marty@site.com", dateJoined: "12/12/12" },
];

const { res } = await useGetPendingUsersAdmin();
const { data: pendingUserData, pending } = res;

const approveUserFunc = async (userId: string) => {
  await $fetch(apiUrls.approveUser, { method: "POST", body: { userId } });
};
</script>
