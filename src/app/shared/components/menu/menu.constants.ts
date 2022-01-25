import { Variants } from 'framer-motion';

export const MENU_VARIANTS: Variants = {
  expand: {
    width: '18rem',
    transition: {
      duration: 0.25,
      ease: 'easeIn',
      when: 'beforeChildren',
    },
  },
  collapse: {
    width: '4rem',
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      when: 'afterChildren',
    },
  },
};

export const SHOW_HIDE_VARIANTS: Variants = {
  expand: {
    opacity: 1,
    visibility: 'visible',
  },
  collapse: {
    opacity: 0,
    transitionEnd: {
      visibility: 'hidden',
    },
  },
};
