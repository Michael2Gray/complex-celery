import { Branding } from '../../../shared/components';

export const LoginBanner = () => (
  <>
    <div className="absolute top-0 left-0 flex items-center p-4">
      <Branding type="alt" variant="white" withContent withSubTitle />
    </div>
    <div className="absolute top-0 right-0 flex items-center p-4">
      <Branding />
    </div>
  </>
);
