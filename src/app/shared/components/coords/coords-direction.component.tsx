type CoordsDirectionProps = { value: number; type: 'latitude' | 'longitude' };

export const CoordsDirection = ({ value, type }: CoordsDirectionProps) => {
  const sign = Math.sign(value);
  const positiveDirection = value.toFixed(2);
  const negativeDirection = Math.abs(value).toFixed(2);

  if (sign === -1) {
    return (
      <span data-testid="coords-direction">
        {negativeDirection}°<strong>{type === 'latitude' ? 'S' : 'W'}</strong>
      </span>
    );
  }

  return (
    <span data-testid="coords-direction">
      {positiveDirection}°<strong>{type === 'latitude' ? 'N' : 'E'}</strong>
    </span>
  );
};
