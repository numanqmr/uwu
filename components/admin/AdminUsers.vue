<!-- MARKED FOR DELETION -->
<!-- NOTES: WAS TO TEST INTEGRATION OF DATA WITH PRIMEVUE TABLE -->
<!-- PROS: SUPER COOL SEAMLESS WORK -->
<!-- CONS: PT SECTION INCOMPLETE ON DOCS MAKING IT HARD TO STYLE -->

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="pendingUsers"
      paginator
      :rows="5"
      dataKey="id"
      :loading="loading"
      :globalFilterFields="['id', 'name', 'email']"
    >
      <template #header>
        <div class="justify-content-end flex bg-transparent font-normal">
          <InputText v-model="filters['global'].value" placeholder="Search" />
        </div>
      </template>

      <template #empty> No customers found.</template>
      <template #loading> Loading customers data. Please wait.</template>

      <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
      </Column>

      <Column header="Email" filterField="email">
        <template #body="{ data }">
          <div class="align-items-center flex gap-2">
            <span>{{ data.email }}</span>
          </div>
        </template>
      </Column>

      <Column field="action" header="Action">
        <template #body="{ data }">
          <div class="flex gap-2">
            <div
              @click="console.log(data.email, data.id)"
              class="cursor-pointer rounded-md bg-green-500 p-4"
            >
              <CheckIcon class="h-4 w-4 fill-white" />
            </div>
            <div class="cursor-pointer rounded-md bg-red-500 p-4">
              <NoSymbolIcon class="h-4 w-4 fill-white" />
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "primevue/api";
import { CheckIcon, NoSymbolIcon } from "@heroicons/vue/24/solid";

const pendingUsers = ref();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const loading = ref(true);

onMounted(() => {
  pendingUsers.value = [
    {
      id: 1000,
      name: "James Butt",
      email: "jamesbutt@website.com",
      action: "",
    },
    {
      id: 1001,
      name: "Josephine Darakjy",
      email: "JosephineDarakjy@website.com",
      action: "",
    },
    {
      id: 1002,
      name: "Art Venere",
      email: "ArtVenere@website.com",
      action: "",
    },
    {
      id: 1003,
      name: "Lenna Paprocki",
      email: "Lenna@Paprocki.com",
      action: "",
    },
    {
      id: 1004,
      name: "Donette Foller",
      email: "Donette@Foller.com",
      action: "",
    },
  ];
  loading.value = false;
});
</script>
