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
    const userData = await useAsyncData("mountains", () =>
      $fetch("/api/user", {
        method: "post",
        body: { email: user.value?.email },
      }),
    );

    return userData;
  };

  return { userProfile, loginUser, logOutUser, getUserData };
});
