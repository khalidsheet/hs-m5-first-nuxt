import { defineStore } from "pinia";

interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();

  const setUser = (_user: User): void => {
    user.value = _user;
  };

  const getUser = (): User | undefined => {
    return user.value;
  };

  return { setUser, getUser };
});
