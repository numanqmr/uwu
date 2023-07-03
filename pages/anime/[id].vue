<template>
  <div>
    <NuxtLayout name="auth-layout">
      <!-- <h1 class="text-lg dark:text-white">{{ route.params.id }}</h1> -->
      <div class="container pt-8 mx-auto md:px-6">
        <section class="mb-8">
          <div
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div class="flex flex-wrap items-center">
              <div
                class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/10/18793.jpg"
                  alt="Cover for the GOAT of all anime"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div
                class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12"
              >
                <div class="px-6 py-12 md:px-12">
                  <h2 class="mb-4 text-2xl font-bold dark:text-white">
                    Monster
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
          <div class="bg-white w-1/2 rounded-md">
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
          <div class="bg-white w-1/2 rounded-md">
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

        <section class="mb-8 bg-white rounded-md p-8">
          <h5 class="mb-10 text-center text-xl font-semibold md:mb-6">
            Reviews: 1
          </h5>

          <!-- Comment -->
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
              <img
                src="data:image/jpeg;base64,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"
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
</script>
