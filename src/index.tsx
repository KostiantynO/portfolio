import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getRefs } from 'utils';
import { AppRouter } from 'routes';

const { root } = getRefs();

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio/">
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
