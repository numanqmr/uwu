import { defineStore } from "pinia";

type LoginPayload = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth-store", () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const router = useRouter();

  const userProfile = ref(null);

  const loginUser = async ({ email, password }: LoginPayload) => {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    user.value = data.user;

    return { data, error };
  };

  const logOutUser = async () => {
    const { error } = await client.auth.signOut();
    if (!error) {
      user.value = null;
      return router.push(unauthRoutes.login);
    }
  };

  const getUserData = async () => {
    try {
      const userData = await useAsyncData("userProfile", () =>
        $fetch("/api/user", {
          method: "post",
          body: { email: user.value?.email },
        }),
      );
      console.log(userData);
      return userData;
    } catch (err) {
      return err;
    }
  };

  return { userProfile, loginUser, logOutUser, getUserData };
});
