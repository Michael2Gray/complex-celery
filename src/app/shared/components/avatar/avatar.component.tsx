import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type AvatarProps = {
  children: ReactNode;
};

export const Avatar = ({ children }: AvatarProps) => (
  <motion.div
    className="relative rounded-full flex items-center justify-center bg-white"
    variants={{
      expand: {
        width: '3rem',
        height: '3rem',
      },
      collapse: {
        width: '2.25rem',
        height: '2.25rem',
      },
    }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute text-sm font-bold text-brand-menu">{children}</div>
  </motion.div>
);
