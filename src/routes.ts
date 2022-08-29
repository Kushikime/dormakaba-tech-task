// pages
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Login from './pages/Login';

// other
import { FC } from 'react';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<any>;
}

export const routes: Array<Route> = [
  {
    key: 'dashboard-route',
    title: 'SwapiDK - Dashboard',
    path: '/',
    enabled: true,
    component: Dashboard,
  },
  {
    key: 'about-route',
    title: 'SwapiDK - Details',
    path: '/details',
    enabled: true,
    component: Details,
  },
  {
    key: 'products-route',
    title: 'SwapiDK - Login', //Get name of resource later and put it to title
    path: '/login',
    enabled: true,
    component: Login,
  },
];
