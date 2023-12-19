type LoginPayload = {
  email: string;
  password: string;
};

export const useAppAuth = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const loginUser = async ({ email, password }: LoginPayload) => {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    return { data, error };
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

  return {
    client,
    user,
    loginUser,
    getUserData,
  };
};
