import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { Suspense } from 'react';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      ),
      children: [...publicRoutes],
    },
  ]);

  return <RouterProvider router={router} />;
};
