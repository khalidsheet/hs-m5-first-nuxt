import { users } from "../../../data/User";

export default defineEventHandler((event) => {
  return users;
});
