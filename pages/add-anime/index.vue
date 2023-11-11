<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="pb-8" />

      <h1 class="pb-8 text-4xl font-bold text-gray-900 dark:text-white">
        Add an anime:
      </h1>

      <p class="text-small pb-8 text-gray-500 dark:text-slate-300">
        Fill out the fields below to add an anime to the listings provided. It
        will be added after a review from the admins to make sure it is a valid
        anime
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="grid gap-4 gap-x-8 md:grid-cols-2">
          <div>
            <div v-for="inputs in inputsList" :key="inputs.label">
              <label
                for="title"
                class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                >{{ inputs.label }} :
              </label>

              <input
                :type="inputs.inputType"
                v-model="inputs.value"
                class="mb-4 block w-full rounded-lg border-2 border-blue-200 p-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <div class="flex gap-2">
              <div class="w-1/4">
                <label
                  for="title"
                  class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                  >Seasons:
                </label>
                <PrimeVueInputNumber
                  :value="seasons"
                  @update:modelValue="(newVal) => (seasons = newVal)"
                />
              </div>
              <div class="w-1/4">
                <label
                  for="title"
                  class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                  >Episodes:
                </label>
                <PrimeVueInputNumber
                  :value="episodes"
                  @update:modelValue="(newVal) => (episodes = newVal)"
                />
              </div>
              <div class="w-1/2">
                <label
                  for="title"
                  class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                  >Year:
                </label>
                <PrimeVueInputNumber
                  :value="yearReleased"
                  :useGrouping="false"
                  @update:modelValue="(newVal) => (yearReleased = newVal)"
                />
              </div>
            </div>
            <div class="mb-4 flex-col">
              <label
                for="title"
                class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                >Status:
              </label>
              <PrimeVueDropdown placeholder="Select Status" />
            </div>

            <div class="flex-col">
              <label
                for="title"
                class="block pb-2 text-sm font-bold text-gray-800 dark:text-white"
                >Genres:
              </label>

              <PVMultiSelect
                :options="listedAnimeGenres"
                placeholder="Select Genre(s)"
                :selectionLimit="3"
              />
            </div>
          </div>
        </div>

        <h3 class="pb-4 text-2xl font-bold dark:text-white">Description:</h3>

        <TabView
          :pt="{
            navContainer: { class: '!p-0' },
            root: { class: ['m-0 p-0'] },
            nav: {
              class: [
                'flex flex-1 list-none m-0 pb-4 bg-transparent border-0 ',
              ],
            },
            tabPanel: {
              header: ({ props }) => ({
                class: [
                  'mr-2',
                  {
                    'cursor-default pointer-events-none select-none select-none opacity-60':
                      props?.disabled,
                  },
                ], // Margin and condition-based styles.
              }),
              headerAction: ({ parent, context }) => ({
                class: [
                  'items-center cursor-pointer flex overflow-hidden relative',
                  'px-4 py-2 font-bold rounded-full',
                  {
                    'border-1 border-white bg-gray-300  hover:bg-gray-200 hover:border-white hover:text-black dark:bg-gray-700 dark:border-blue-900 dark:text-white dark:hover:bg-gray-400':
                      parent.state.d_activeIndex !== context.index,
                    'bg-black border-1 border-transparent text-white dark:bg-white dark:text-black':
                      parent.state.d_activeIndex === context.index,
                  },
                ],
              }),
              content: { class: 'p-0' },
            },
          }"
        >
          <TabPanel header="Edit">
            <TextEditor @text-update="(text) => updateText(text)" />
          </TabPanel>

          <TabPanel header="Preview">
            <div
              class="w-100 flex justify-center rounded-lg bg-white p-4 text-left shadow-lg dark:bg-gray-800"
            >
              <div
                v-html="content"
                class="prose min-h-[30px] w-full dark:prose-invert prose-p:mb-0 prose-ul:[&>p]:text-3xl"
              ></div>
            </div>
          </TabPanel>
        </TabView>

        <br />
        <button
          class="mb-4 rounded-full border-2 border-green-600 px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
          type="submit"
        >
          Submit Anime
        </button>
      </form>
    </NuxtLayout>
  </div>
</template>

<script setup>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const content = ref("");
const yearReleased = ref();
const episodes = ref();
const seasons = ref();
const status = ref("");
const genres = ref("");
const inputsList = reactive(addAnimeFormInputs);

const updateText = (text) => (content.value = text);

const handleSubmit = () => {
  const emptyObj = {
    yearReleased: yearReleased?.value?.toString(),
    episodes: episodes?.value?.toString(),
    seasons: seasons?.value?.toString(),
    status: status.value,
    genres: genres.value,
  };
  inputsList.map((item) => (emptyObj[item.schemaType] = item.value));
  emptyObj.description = content.value;

  console.log(emptyObj);
  // inputsList.forEach((item) => (item.value = ""));
};
</script>
