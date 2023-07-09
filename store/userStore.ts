import { defineStore } from "pinia";

export const userStore = defineStore("userStore", () => {
  const name = ref("Developer Chan");
  const email = ref("devchan@uwu.com");
  //   const doubleCount = computed(() => count.value * 2);
  function increment() {
    // count.value++;
  }

  return { name, increment, email };
});
