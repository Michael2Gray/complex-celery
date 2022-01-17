import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../features/dashboard';
import { Login } from '../features/login';
import { PATHS } from './paths.constants';

export const AppRoutes = () => (
  <Routes>
    <Route path={PATHS.dashboard} element={<Dashboard />} />

    <Route path={PATHS.login} element={<Login />} />

    <Route path="*" element={<Navigate replace to={PATHS.dashboard} />} />
  </Routes>
);
