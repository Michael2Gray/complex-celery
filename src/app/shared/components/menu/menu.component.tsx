import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAuth } from '../../../modules/auth';
import { Avatar } from '../avatar';
import { Branding } from '../branding';
import { MENU_VARIANTS, SHOW_HIDE_VARIANTS } from './menu.constants';
import { MenuItems } from './menu-items.component';
import { MenuLogOutButton } from './menu-log-out-button.component';
import { MenuResizeButton } from './menu-resize-button.component';

export const Menu = () => {
  const { user, logOut } = useAuth();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleMenu = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      initial={false}
      animate={isExpanded ? 'expand' : 'collapse'}
      variants={MENU_VARIANTS}
      className="sticky top-0 h-screen flex flex-col bg-neutral-200"
    >
      {/* <Branding
        className="p-4"
        size="xs"
        variant="white"
        withContent={isExpanded}
        withSubTitle
      /> */}

      <MenuResizeButton onClick={toggleMenu} />

      <div className="flex items-center space-x-3 p-2.5 bg-neutral-100">
        {user && (
          <>
            <div className="flex-none">
              <Avatar>{user.initials}</Avatar>
            </div>

            <motion.div
              className="flex-1 min-w-0 h-12 flex flex-col items-start justify-center space-y-1"
              variants={SHOW_HIDE_VARIANTS}
            >
              <div className="text-white leading-none font-bold">
                {`${user.name}`}
              </div>
              <MenuLogOutButton onClick={logOut}>{'Log out'}</MenuLogOutButton>
            </motion.div>
          </>
        )}
      </div>
      <nav className="mb-auto">
        <ul>
          <MenuItems />
        </ul>
      </nav>
    </motion.div>
  );
};
