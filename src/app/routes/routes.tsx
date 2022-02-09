import { Navigate, Route, Routes } from 'react-router-dom';

import { CityRoute } from '../modules/city';
import { CountriesRoute, CountryRoute } from '../modules/country';
import { HomeRoute } from '../modules/home';
import { PATHS } from './paths.constants';

export const AppRoutes = () => (
  <Routes>
    <Route path={PATHS.home} element={<HomeRoute />} />

    <Route path={PATHS.city} element={<CityRoute />} />

    <Route path={PATHS.countries} element={<CountriesRoute />} />

    <Route path={PATHS.country} element={<CountryRoute />} />

    <Route path="*" element={<Navigate replace to={PATHS.home} />} />
  </Routes>
);
