import { ReactNode } from 'react';

type DistanceProps = {
  distance: number;
  unit?: string;
  icon?: ReactNode;
};

export const Distance = ({ unit = 'km', icon, distance }: DistanceProps) => (
  <span data-testid="distance" className="flex items-center">
    {!!icon && <>{icon}</>}
    <>
      {distance < 100 ? distance.toString() : Math.round(distance).toString()}{' '}
      {`${unit}`}
    </>
  </span>
);
