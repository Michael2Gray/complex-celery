import { motion } from 'framer-motion';

import logo from '../../../assets/logo.svg';
import { Heading } from '../../../shared/components';

export const LoginBanner = () => (
  <>
    <div className="flex items-center">
      <motion.img className="h-20 mr-4" src={logo} alt="Logo" />
      <div className="flex flex-col">
        <Heading level={1} variant="brand">
          Complex Celery
        </Heading>
        <div className="italic text-slate-600 mt-0">
          Is not what it seems...
        </div>
      </div>
    </div>
  </>
);
