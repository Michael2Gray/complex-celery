import { SpinnerIcon } from '../components';

type PendingProps = {
  children: React.ReactNode;
};

export const Pending = ({ children }: PendingProps): JSX.Element => (
  <div data-testid="pending-renderer" className="flex flex-col items-center">
    <SpinnerIcon className="text-black mb-2" />
    {children}
  </div>
);
