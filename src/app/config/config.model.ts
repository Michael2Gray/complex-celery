import { Coords } from '../shared/models';

export type Formatting = {
  date: string;
};

export type Config = {
  coords: Coords;
  formatting: Formatting;
};
