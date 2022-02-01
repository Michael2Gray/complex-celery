type DistanceProps = {
  distance: number;
  unit?: string;
  icon?: React.ReactNode;
};

export const Distance: React.FC<DistanceProps> = ({
  unit = 'km',
  icon,
  distance,
}) => (
  <span data-testid="distance" className="flex items-center">
    {!!icon && <>{icon}</>}
    <>
      {distance < 100 ? distance.toString() : Math.round(distance).toString()}{' '}
      {`${unit}`}
    </>
  </span>
);
