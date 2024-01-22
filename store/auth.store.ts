import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

type LoginPayload = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth-store", () => {
  const client = useSupabaseClient();
  const router = useRouter();
  const user = useUserStore();

  const loginUser = async ({ email, password }: LoginPayload) => {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    return { data, error };
  };

  const createUser = async ({ email, password }: LoginPayload) => {
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: { data: { role: "" } },
    });

    return { data, error };
  };

  const logOutUser = async () => {
    const { error } = await client.auth.signOut();
    if (!error) {
      router.push(unauthRoutes.login);
      user.$reset();
    }
  };

  client.auth.onAuthStateChange(async (event, session) => {
    if (!user.userProfile) await user.getUserData();
    // if (user.userProfile) isLoadingProfile.value = false;
  });

  return { loginUser, logOutUser, client, createUser };
});
