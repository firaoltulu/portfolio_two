import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import ProjectLayout from '../layouts/project';

import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {

  return useRoutes([

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },

    {
      path: '/',
      element: (
        <GuestGuard>
          <MainLayout />
        </GuestGuard>
      ),
      children: [
        { path: '/portfolio_two', element: <LandingPage></LandingPage> },
      ]
    },

    {
      path: 'projects',
      element: (
        <GuestGuard>
          <ProjectLayout />
        </GuestGuard>
      ),
      children: [
        { path: '', element: <Navigate to="/projects/post/one" replace /> },

        {
          path: 'post',
          children: [
            { path: '', element: <Navigate to="/one" replace /> },
            { path: 'one', element: <ProjectOne /> },
            { path: 'two', element: <ProjectTwo /> },
            { path: 'three', element: <ProjectThree /> },
          ]
        },

      ]

    },

    { path: '*', element: <Navigate to="/500" replace /> }

  ]);

}

// IMPORT COMPONENTS

// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const ProjectOne = Loadable(lazy(() => import('../pages/ProjectOne')));
const ProjectTwo = Loadable(lazy(() => import('../pages/ProjectTwo')));
const ProjectThree = Loadable(lazy(() => import('../pages/ProjectThree')));


const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// //////////////////////////////////////////////////////////////////////////////////////
