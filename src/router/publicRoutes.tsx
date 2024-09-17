import { RouteObject } from 'react-router-dom';
import { LoginPage } from '../pages/Login/index';
import { HomePage } from '../pages/Home/HomePage';
import { ROUTES } from '../constants/routes';
import { Todo } from '../pages/Todo';

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.TODO,
        element: <Todo />,
      },
    ],
  },
];
