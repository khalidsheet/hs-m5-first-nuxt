export type UserRole = "USER" | "ADMIN" | "VISITOR";

export interface User {
  id?: string;
  name: string;
  email: string;
  phone: string;
  about?: string;
  role: UserRole;
}

// It's not much, I can do a class and some other magic ;-)
export let users: User[] = [];

export const removeUser = (user: User): boolean => {
  const newList = users.filter((x) => x.id != user.id);
  users = [...newList];
  return true;
};
