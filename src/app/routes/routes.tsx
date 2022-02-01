import { Navigate, Route, Routes } from 'react-router-dom';

import { CityRoute } from '../modules/city';
import { PATHS } from './paths.constants';

export const AppRoutes = () => (
  <Routes>
    <Route path={PATHS.city} element={<CityRoute />} />

    <Route path="*" element={<Navigate replace to={PATHS.city} />} />
  </Routes>
);
