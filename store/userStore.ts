import { defineStore } from "pinia";

const mockUserData = {
  name: "Developer Chanlalala",
  email: "devchan@uwu.com",
  userImg:
    "https://e1.pxfuel.com/desktop-wallpaper/1016/186/desktop-wallpaper-pin-on-anime-anime-profile-pic.jpg",
};

export const userStore = defineStore("userStore", () => {
  const mockUserProfile = ref(mockUserData);

  return { data: mockUserProfile };
});
