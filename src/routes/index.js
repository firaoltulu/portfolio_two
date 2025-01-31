import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import ProjectLayout from '../layouts/project';

import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
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
        { path: '/', element: <LandingPage></LandingPage> },
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


// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
// const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
// const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// Dashboard user
// const UserProfile = Loadable(lazy(() => import('../pages/dashboard/User/UserProfile')));
// const UserAccount = Loadable(lazy(() => import('../pages/dashboard/User/UserAccount')));

// Dashboard friends
// const FriendsCards = Loadable(lazy(() => import('../pages/dashboard/Friends/FriendsCards')));
// const FriendProfile = Loadable(lazy(() => import('../pages/dashboard/Friends/FriendProfile')));

// Dashboard Currencies
// const CurrencyList = Loadable(lazy(() => import('../pages/dashboard/Currency/CurrencyList')));
// const CurrencyChart = Loadable(lazy(() => import('../pages/dashboard/Currency/Currency_Chart_Details')));
// const Currency_Calendar = Loadable(lazy(() => import('../pages/dashboard/Currency/Currency_calendar')));

// const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar/Calendar')));
// const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));
// const Contact_us = Loadable(lazy(() => import('../pages/dashboard/Contact-us')));


// const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
// const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
// const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
// const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
// const Payment = Loadable(lazy(() => import('../pages/Payment')));



// //////////////////////////////////////////////////////////////////////////////////////
