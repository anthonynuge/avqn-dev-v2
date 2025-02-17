export const skillItem = {
  hidden: { opacity: 0 }, // 👈 Starts smaller & slightly above
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } } // 👈 Shrinks and fades on exit
};

export const fadeOut = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: .4
    }
  }
}

export const slideOutExit = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: .4, ease: "easeInOut" } },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: .4,
      ease: "easeInOut"
    }
  }
}

export const funMessage = {
  hidden: { opacity: 0, y: 500 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      ease: "easeIn"
    }
  }
}
