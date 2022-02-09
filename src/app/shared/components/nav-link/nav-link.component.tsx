import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type NavLinkProps = { className?: string } & ComponentProps<typeof Link>;

export const NavLink = ({ className, ...props }: NavLinkProps) => (
  <Link
    className={clsx(
      'flex items-center text-blue-500 hover:text-blue-600',
      className
    )}
    {...props}
  />
);
