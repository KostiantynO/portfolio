import { App } from 'app';
import { Navigate, Route, Routes } from 'react-router-dom';

const ROOT = '/';

export const AppRouter = () => (
  <Routes>
    <Route path={ROOT} element={<App />}>
      <Route path="*" element={<Navigate to={ROOT} replace />} />
    </Route>
  </Routes>
);
