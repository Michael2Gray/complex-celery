import { StationStatus } from '../enums';

export type Coords = Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;

export type Availability = {
  bikes: number;
  stands: number;
  mechanicalBikes: number;
  electricalBikes: number;
  electricalInternalBatteryBikes: number;
  electricalRemovableBatteryBikes: number;
};

export type Stand = {
  availabilities: Availability | null;
  capacity: number;
};

export type Station = {
  number: number;
  contractName: string;
  name: string;
  address: string;
  position: Coords | null;
  banking: boolean;
  bonus: boolean;
  status: StationStatus;
  lastUpdate: string;
  connected: boolean;
  overflow: boolean;
  shape: null;
  totalStands: Stand | null;
  mainStands: Stand | null;
  overflowStands: Stand | null;
};

export type EnhancedStation = {
  distanceAway: number;
} & Station;

export type StationOrderByOptionValue = 'name' | 'distanceAway';

export type StationOrderByOption = {
  label: string;
  value: StationOrderByOptionValue;
};
