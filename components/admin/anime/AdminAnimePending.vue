<template>
  <div class="card">
    <Accordion :activeIndex="0" :multiple="true">
      <AccordionTab
        v-for="anime in data"
        :header="anime.title ?? ''"
        :key="anime.id"
        :pt="{
          transition: {
            enterFromClass: '',
            enterActiveClass: '',
            enterToClass: '',
            leaveFromClass: '',
            leaveActiveClass: '',
            leaveToClass: '',
          },
        }"
      >
        <div v-html="anime.desc" />

        <div>
          <button
            class="border-2 border-red-100 p-2"
            @click="console.log(anime.id)"
          >
            Approve
          </button>
          <button
            class="border-2 border-red-100 p-2"
            @click="console.log(anime.id)"
          >
            Reject
          </button>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import { useGetPendingAnimeAdmin } from "~/composables/admin";

const { res } = await useGetPendingAnimeAdmin();
const { data } = res;

watchEffect(() => {
  console.log(data.value);
});
</script>
