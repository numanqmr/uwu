import { defineStore, storeToRefs } from "pinia";
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

  const logOutUser = async () => {
    const { error } = await client.auth.signOut();
    if (!error) {
      user.$reset();
      return router.push(unauthRoutes.login);
    }
  };

  client.auth.onAuthStateChange(async (event, session) => {
    if (!user.userProfile) await user.getUserData();
  });

  return { loginUser, logOutUser, client };
});
