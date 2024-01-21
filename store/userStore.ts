import { defineStore } from "pinia";

const mockUserData = {
  name: "Developer Chanlalala",
  email: "devchan@uwu.com",
  userImg:
    "https://e1.pxfuel.com/desktop-wallpaper/1016/186/desktop-wallpaper-pin-on-anime-anime-profile-pic.jpg",
};

export const useUserStore = defineStore("userStore", () => {
  const mockUserProfile = ref({ ...mockUserData });
  const isLoggedIn = ref<boolean>(false);
  const isLoadingProfile = ref<boolean>(false);
  const userProfile = ref<any>(null);
  const user = useSupabaseUser();

  const getUserData = async () => {
    try {
      isLoadingProfile.value = true;

      const userData = await $fetch("/api/user", {
        method: "post",
        body: { id: user.value?.id },
      });

      isLoggedIn.value = true;
      userProfile.value = userData;
      isLoadingProfile.value = false;

      const { name, email } = userProfile.value;
      if (name && email) {
        mockUserProfile.value.email = email;
        mockUserProfile.value.name = name;
      }
    } catch (err) {
      isLoadingProfile.value = false;
      return err;
    }
  };

  const $reset = () => {
    isLoggedIn.value = false;
    userProfile.value = null;
    mockUserProfile.value = { ...mockUserData };
  };

  return {
    data: mockUserProfile,
    userProfile,
    supabaseUser: user,
    getUserData,
    isLoggedIn,
    $reset,
    isLoadingProfile,
  };
});
