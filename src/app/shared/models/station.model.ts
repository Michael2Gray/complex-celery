import { StationStatus } from '../enums';
import { Coords } from './coordinates.model';
import { Stand } from './stand.model';

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
