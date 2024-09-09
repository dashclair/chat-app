import { RouteObject } from 'react-router-dom';
import { LoginPage } from '../pages/Login/index';
import { HomePage } from '../pages/Home/HomePage';

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
];
