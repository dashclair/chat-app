import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { Suspense } from 'react';
import { MainLayout } from '../shared/ui/MainLayout';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <MainLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </MainLayout>
        </>
      ),
      children: [...publicRoutes],
    },
  ]);

  return <RouterProvider router={router} />;
};
