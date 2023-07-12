<template>
  <div>
    <NuxtLayout name="auth-layout">
      <div class="container pt-8 mx-auto md:px-6">
        <section class="mb-8">
          <div
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-800"
          >
            <div class="flex flex-wrap items-center">
              <div
                class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12"
              >
                <img
                  :src="animeData?.imgURL"
                  alt="Cover for the GOAT of all anime"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div
                class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12"
              >
                <div class="px-6 py-12 md:px-12">
                  <h2 class="mb-4 text-2xl font-bold dark:text-white">
                    {{ animeData?.title }}
                  </h2>
                  <p
                    class="mb-6 flex items-center font-bold uppercase text-danger dark:text-white"
                  >
                    Description
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to
                    his hospital director's daughter, is well on his way to
                    ascending the hospital hierarchy. That is until one night, a
                    seemingly small event changes Dr. Tenma's life forever.
                    While preparing to perform surgery on someone, he gets a
                    call from the hospital director telling him to switch
                    patients and instead perform life-saving brain surgery on a
                    famous performer. His fellow doctors, fiancée, and the
                    hospital director applaud his accomplishment; but because of
                    the switch, a poor immigrant worker is dead, causing Dr.
                    Tenma to have a crisis of conscience.
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    So when a similar situation arises, Dr. Tenma stands his
                    ground and chooses to perform surgery on the young boy Johan
                    Liebert instead of the town's mayor. Unfortunately, this
                    choice leads to serious ramifications for Dr. Tenma—losing
                    his social standing being one of them. However, with the
                    mysterious death of the director and two other doctors, Dr.
                    Tenma's position is restored. With no evidence to convict
                    him, he is released and goes on to attain the position of
                    hospital director.
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    Nine years later when Dr. Tenma saves the life of a
                    criminal, his past comes back to haunt him—once again, he
                    comes face to face with the monster he operated on. He must
                    now embark on a quest of pursuit to make amends for the
                    havoc spread by the one he saved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-8 flex flex-col sm:flex-row w-full gap-5">
          <div
            class="bg-white w-1/2 rounded-md dark:bg-gray-800 dark:text-slate-50 shadow-lg"
          >
            <div class="p-8">
              <h1 class="text-xl pb-2 uppercase font-bold">Stats</h1>
              <ul>
                <li><span class="font-bold">Seasons:</span> 1</li>
                <li><span class="font-bold">Episodes:</span> 75</li>
                <li><span class="font-bold">Status:</span> Completed</li>
                <li><span class="font-bold">Genres:</span> Psychological</li>
                <li><span class="font-bold">Year:</span> 2005</li>
              </ul>
            </div>
          </div>
          <div
            class="bg-white w-1/2 rounded-md dark:bg-gray-800 dark:text-slate-50 shadow-lg"
          >
            <div class="p-8">
              <h1 class="text-xl pb-2 uppercase font-bold">Details</h1>
              <ul>
                <li><span class="font-bold">Recommends:</span> 15</li>
                <li><span class="font-bold">Total Reviews:</span> 1</li>
                <li><span class="font-bold">Dislikes:</span> 1</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          class="mb-8 bg-white rounded-md p-8 dark:bg-gray-800 dark:text-slate-50"
        >
          <h5 class="mb-10 text-center text-xl font-semibold md:mb-6">
            Reviews: 1
          </h5>

          <!-- Comment -->
          <div class="flex flex-wrap shadow-lg p-1">
            <div class="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/326322.jpg"
                class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="Avatar"
              />
            </div>

            <div class="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
              <p class="mb-3 font-semibold">Griffith (Definitely not Femto)</p>
              <p>
                Pathetic Anime. It's thanks to this stupid anime people have a
                hard time deciding if Johan Liebert is the greatest anime
                villian. NO, NEWS FLASH BUCKOS! It's ME.... ME ME ME ME ME!!!
                Don't make me do to you what I did to Guts
              </p>
            </div>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: animeData } = useFetch(`/api/anime/${id}`, {
  key: `anime-${id}`,
});
</script>
