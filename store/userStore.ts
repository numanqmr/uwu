import { defineStore } from "pinia";

export const userStore = defineStore("userStore", () => {
  const name = ref("Developer Chan");
  const email = ref("devchan@uwu.com");
  const userImg = ref(
    "https://e1.pxfuel.com/desktop-wallpaper/1016/186/desktop-wallpaper-pin-on-anime-anime-profile-pic.jpg"
  );
  //   const doubleCount = computed(() => count.value * 2);
  function increment() {
    // count.value++;
  }

  return { name, increment, email, userImg };
});
