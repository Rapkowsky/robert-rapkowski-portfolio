export const rrEaseBtnHover = [0.5, 1, 0.89, 1];
export const mainAnim = [0.7, 0, 0.2, 1];
export const easefadeInUp = [0, 0, 0.5, 1];

export const fadeInUp = {
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 25,
  },
  transition: {
    duration: 0.5,
    ease: easefadeInUp,
  },
  viewport: { margin: "50px 0px -100px", amount: 1 },
};

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.972, ease: mainAnim } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.7614, ease: mainAnim },
  },
};

export const slide = {
  initial: { x: 135 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 1, ease: mainAnim, delay: i === 0 ? 0 : 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 150,
    transition: {
      duration: 0.5,
      ease: mainAnim,
      delay: i === 0 ? 0 : 0.05 * i,
    },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3, ease: rrEaseBtnHover } },
  closed: { scale: 0, transition: { duration: 0.4, ease: rrEaseBtnHover } },
};

export const wordSlideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.6, delay: 0.04 * i, ease: "easeInOut" },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const opacitySlideUp = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.65, ease: mainAnim },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.65, ease: mainAnim },
  },
};

export const preloaderOpacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 2, delay: 0.2 },
  },
};

export const preloaderSlideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: mainAnim, delay: 0.2 },
  },
};
