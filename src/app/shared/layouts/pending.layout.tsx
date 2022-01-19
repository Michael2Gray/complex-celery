import { Loader } from '../components';

type PendingProps = {
  children: React.ReactNode;
};

export const Pending = ({ children }: PendingProps): JSX.Element => (
  <div data-testid="pending-renderer" className="flex flex-col items-center">
    <Loader />
    {children}
  </div>
);
