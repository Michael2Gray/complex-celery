import clsx from 'clsx';

type AvailabilityIndicatorProps = {
  value: number;
  total?: number;
};

export const AvailabilityIndicator = ({
  value,
  total = 20,
}: AvailabilityIndicatorProps) => {
  const quarter = total / 4;
  const half = total / 2;

  return (
    <span
      className={clsx({
        'text-yellow-400': value >= quarter && value <= half,
        'text-red-600': value <= quarter,
        'text-brand-400': value >= half,
      })}
    >
      {value}
    </span>
  );
};
