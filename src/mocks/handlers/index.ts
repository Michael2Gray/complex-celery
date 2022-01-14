import { handlers as contracts } from './contracts.handler';
import { handlers as stations } from './stations.handler';
import { handlers as weather } from './weather.handler';

export const handlers = [...contracts, ...stations, ...weather];
