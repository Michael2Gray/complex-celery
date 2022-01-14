import { Availability } from './availability.model';

export type Stand = {
  availabilities: Availability | null;
  capacity: number;
};
