import clsx from 'clsx';

type AvailabilityIndicatorProps = {
  value: number;
  total?: number;
};

export const AvailabilityIndicator = ({
  value,
  total = 20,
}: AvailabilityIndicatorProps) => (
  <span
    className={clsx({
      'text-yellow-400': value >= total / 4 && value <= total / 2,
      'text-red-600': value <= total / 4,
      'text-brand-400': value >= total / 2,
    })}
  >
    {value}
  </span>
);
