import { users } from "../../../data/User";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = {
    ...body,
    id: Math.floor(Math.random() * 100),
  };

  users.push(user);
  return { body };
});
