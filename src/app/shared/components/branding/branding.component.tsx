import { motion } from 'framer-motion';

import logo from '../../../assets/logo.svg';
import logoAlt from '../../../assets/logo-alt.svg';
import { Heading } from '../heading';

type BrandingProps = {
  type?: 'default' | 'alt';
  variant?: 'default' | 'brand' | 'white';
  withContent?: boolean;
  withSubTitle?: boolean;
};

export const Branding = ({
  type = 'default',
  variant = 'brand',
  withContent = false,
  withSubTitle = false,
}: BrandingProps) => (
  <>
    <motion.img
      className="h-20 mr-4"
      src={type === 'default' ? logo : logoAlt}
      alt="Logo"
    />
    {withContent && (
      <div className="flex flex-col">
        <Heading level={1} variant={variant}>
          Complex Celery
        </Heading>
        {withSubTitle && (
          <div className="italic text-slate-200 mt-0">
            Is not what it seems...
          </div>
        )}
      </div>
    )}
  </>
);
