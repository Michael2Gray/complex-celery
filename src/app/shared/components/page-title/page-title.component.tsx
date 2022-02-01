import { ReactNode } from 'react';

import { Heading } from '../heading';

type PageTitleProps = { children: ReactNode };

export const PageTitle = ({ children }: PageTitleProps) => (
  <Heading className="text-neutral-100 mb-2">{children}</Heading>
);
