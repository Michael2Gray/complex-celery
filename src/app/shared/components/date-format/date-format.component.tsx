import { format } from 'date-fns';

import { useConfig } from '../../../config';

type DateFormatProps = {
  date: number | string | Date;
  withTime?: boolean;
};

export const DateFormat = ({ date, withTime }: DateFormatProps) => {
  const {
    config: { formatting },
  } = useConfig();

  return (
    <>
      {format(new Date(date), withTime ? formatting.dateTime : formatting.date)}
    </>
  );
};
