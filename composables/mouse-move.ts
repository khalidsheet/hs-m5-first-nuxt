export const useMouseMove = () => {
  const page = ref({ x: 0, y: 0 });
  const a = useEventListener<MouseEvent>("mousemove", ({ pageX, pageY }) => {
    page.value = {
      x: pageX,
      y: pageY,
    };
  });
  return page;
};
