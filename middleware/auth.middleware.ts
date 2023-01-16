import { useUserStore } from "./../store/userStore";
export default defineNuxtRouteMiddleware((from, to) => {
  const { getUser } = useUserStore();

  return getUser() != undefined;
});
