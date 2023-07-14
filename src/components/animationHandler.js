export const inViewhandler = (inView, animation) => {
  if (inView) {
    animation.start({ opacity: 1, scale: 1, transition: { duratiom: 1 } });
  }
};
