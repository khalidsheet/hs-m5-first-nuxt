import { removeUser } from "./../../../data/User";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return removeUser(body.item);
});
