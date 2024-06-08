import { createRoot } from 'react-dom/client';
import { Root } from './pages/Root';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './global.css';
import { AboutUs } from './pages/AboutUs/aboutUs';
import { Home } from './pages/Home/home';
import { Questionnaire } from './pages/Questionnaire/questionnaire';
import { Position } from './pages/Position/position';
import { ErrorPage } from './pages/Error/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/questionnaire',
        element: <Questionnaire />,
      },
      {
        path: '/position',
        element: <Position />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
