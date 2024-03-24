<!-- MARKED FOR DELETION -->
<!-- NOTES: WAS TO TEST TANSTACK TABLE WITH DATA -->
<!-- PROS: GOT THE JOB DONE -->
<!-- CONS: LACK OF STYLING (ON MY PART), AND IS A BIT HACKY TO WORK WITH IN VUE LAND (COMPARED TO REACT) -->
<!-- THERE'S ALSO LESS DOCUMENTATION, MIGHT REVISIT IN THE FUTURE -->

<template>
  <div>
    <table class="w-full table-auto">
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
            class="bg-slate-400 py-2 dark:bg-slate-700 dark:text-white"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            class="p-2 dark:text-white"
            @click="console.log(cell.getValue())"
          >
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <button @click="rerender" class="border p-2">Rerender</button> -->
  </div>
</template>

<script setup lang="ts">
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
} from "@tanstack/vue-table";
import { ref } from "vue";
import ApproveDenyBtn from "./ApproveDenyBtn.vue";

type Person = { name: string; email: string };

const defaultData: Person[] = [
  { name: "tanner", email: "tanner@" },
  { name: "tandy", email: "miller@" },
  { name: "joe", email: "dirte@" },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", {
    id: "name",
    header: "Name",
    cell: (info) => info.row.original.name,
  }),

  columnHelper.accessor("email", {
    id: "email",
    header: "Email",
    cell: (info) => info.row.original.email,
  }),

  columnHelper.accessor("email", {
    id: "action",
    header: "Action",
    cell: (info) => {
      return h(ApproveDenyBtn, {
        onClick: () => console.log({ ...info.row.original }),
      });
    },
  }),
];

const data = ref(defaultData);

// const rerender = () => {
//   data.value = defaultData;
// };

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>
