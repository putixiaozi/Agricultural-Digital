import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Training from '../pages/Training';
import Cooperation from '../pages/Cooperation';
import News from '../pages/News';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'training',
        element: <Training />
      },
      {
        path: 'cooperation',
        element: <Cooperation />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'resources',
        element: <Resources />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
], {
  basename: '/-/'
});

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;