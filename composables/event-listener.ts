export const useEventListener = <T extends any>(
  event: string,
  cb: (evt: any) => void // any just for now
) => {
  const hook = () => window.addEventListener(event, cb);

  onMounted(hook);

  onUnmounted(() => {
    window.removeEventListener(event, hook);
  });
};
