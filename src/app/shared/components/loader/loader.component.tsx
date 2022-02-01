import clsx from 'clsx';
import { motion } from 'framer-motion';

type LoaderProps = {
  size?: 'sm' | 'md';
};

export const Loader = ({ size = 'md' }: LoaderProps) => (
  <div
    className={clsx('relative flex items-center', {
      'w-6 h-6': size === 'md',
      'w-4 h-4': size === 'sm',
    })}
  >
    <motion.div
      className={clsx('absolute bg-brand-400', {
        'w-1.5 h-1.5': size === 'md',
        'w-1 h-1': size === 'sm',
      })}
      animate={{
        x: ['0rem', size === 'md' ? '1.125rem' : '0.75rem', '0rem'],
      }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </div>
);
