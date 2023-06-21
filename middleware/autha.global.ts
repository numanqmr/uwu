import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
  // const user = useSupabaseUser();
  // if (!user.value && Object.values(authRoutes).includes(to.path))
  //   return navigateTo(unauthRoutes.login);
  // if (user.value && Object.values(unauthRoutes).includes(to.path))
  //   return navigateTo(authRoutes.feed);
});
