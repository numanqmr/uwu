<template>
  <NuxtLayout :name="`auth-layout`">
    <div class="px-4 pt-8">
      <PeopleHeader
        :name="userData.name"
        :email="userData.email"
        :profilePic="userData.imgURL"
      />
      <div class="mt-20 flex flex-col gap-4 md:flex-row">
        <div class="text-2xl font-bold">Reviews</div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { apiUrls } from "@/api";

const route = useRoute();
const id = route.params.id;

const key = `user-${id}`;
const { data: userData } = await useFetch(apiUrls.userProfile(id), { key });

if (!userData.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}
</script>
