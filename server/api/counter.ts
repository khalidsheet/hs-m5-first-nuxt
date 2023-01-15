let count = 0;

export default defineEventHandler((event) => {
  count++;

  return {
    count,
  };
});
