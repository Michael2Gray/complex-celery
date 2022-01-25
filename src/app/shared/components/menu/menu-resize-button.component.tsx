import { MouseEventHandler } from 'react';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const iconStyle = 'rotate-90 text-white w-5 h-5';

interface MenuResizeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const MenuResizeButton = ({ onClick }: MenuResizeButtonProps) => (
  <motion.button
    type="button"
    aria-label="Toggle menu"
    className={clsx(
      'absolute flex items-center justify-center border border-transparent hover:border-white rounded p-1',
      'focus:outline-none focus-visible:ring focus-visible:ring-brand transition'
    )}
    onClick={onClick}
    variants={{
      expand: { top: '0.85rem', left: '15rem' },
      collapse: { top: '6.325rem', left: '0.8rem' },
    }}
    transition={{ ease: 'easeOut' }}
  >
    <motion.div
      variants={{
        collapse: {
          opacity: 0,
          transitionEnd: {
            visibility: 'hidden',
          },
        },
        expand: {
          opacity: 1,
          visibility: 'visible',
        },
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <BsArrowsCollapse className={iconStyle} />
    </motion.div>
    <motion.div
      className="absolute"
      variants={{
        collapse: {
          opacity: 1,
          visibility: 'visible',
        },
        expand: {
          opacity: 0,
          transitionEnd: {
            visibility: 'hidden',
          },
        },
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <BsArrowsExpand className={iconStyle} />
    </motion.div>
  </motion.button>
);
