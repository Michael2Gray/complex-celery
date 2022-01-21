import clsx from 'clsx';
import { motion } from 'framer-motion';

import logo from '../../../assets/logo.svg';
import logoAlt from '../../../assets/logo-alt.svg';
import { Heading } from '../heading';

type BrandingProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'default' | 'alt';
  variant?: 'default' | 'brand' | 'white';
  withContent?: boolean;
  withSubTitle?: boolean;
  className?: string;
};

export const Branding = ({
  size = 'md',
  type = 'default',
  variant = 'brand',
  withContent = false,
  withSubTitle = false,
  className,
}: BrandingProps) => (
  <div className={clsx('flex items-center', className)}>
    <motion.img
      className={clsx({
        'mr-4': withContent,
        'h-20': size === 'md',
        'h-16': size === 'sm',
        'h-8': size === 'xs',
      })}
      src={type === 'default' ? logo : logoAlt}
      alt="Logo"
    />
    {withContent && (
      <div className="flex flex-col">
        <Heading size={size} level={1} variant={variant}>
          Complex Celery
        </Heading>
        {withSubTitle && (
          <div className="italic text-neutral-200 mt-0">
            Is not what it seems...
          </div>
        )}
      </div>
    )}
  </div>
);
