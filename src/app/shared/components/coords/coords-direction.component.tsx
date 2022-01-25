type CoordsDirectionProps = { value: number; type: 'latitude' | 'longitude' };

export const CoordsDirection = ({ value, type }: CoordsDirectionProps) => {
  const sign = Math.sign(value);
  const positiveDirection = value.toFixed(2);
  const negativeDirection = Math.abs(value).toFixed(2);

  return (
    <>
      {sign === -1 ? (
        <>
          {negativeDirection}°{' '}
          <span className="font-bold">{type === 'latitude' ? 'S' : 'W'}</span>
        </>
      ) : (
        <>
          {positiveDirection}°{' '}
          <span className="font-bold">{type === 'latitude' ? 'N' : 'E'}</span>
        </>
      )}
    </>
  );
};
