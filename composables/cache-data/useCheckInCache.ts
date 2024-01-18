export const useCheckInCache = () => {
  const nuxtApp = useNuxtApp();

  const isDataInCache = (key: string) => {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  };

  return {
    isDataInCache,
  };
};
