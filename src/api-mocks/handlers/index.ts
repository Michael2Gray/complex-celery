import { handlers as authentication } from './authentication.handler';
import { handlers as contracts } from './contracts.handler';
import { handlers as stations } from './stations.handler';
import { handlers as weather } from './weather.handler';

export const handlers = [
  ...authentication,
  ...contracts,
  ...stations,
  ...weather,
];
