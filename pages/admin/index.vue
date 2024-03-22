<template>
  <div>
    <NuxtLayout :name="`auth-layout`">
      <div class="pt-8">
        <p>This is the admin page</p>

        <div class="my-1">
          List of features this page offers

          <ul class="my-2">
            <li class="list-disc">Approve Users to join platform</li>
            <li class="list-disc">
              Approve anime item submitted by user to be added to db
            </li>
          </ul>

          <div class="font-bold text-red-400">
            NOTE: ONLY USER TYPE ADMINS SHOULD BE ABLE TO ACCESS THIS PAGE
          </div>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->

      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store";

const user = useUserStore();
const router = useRouter();
</script>
