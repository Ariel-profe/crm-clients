import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout } from './components/Layout';
import { ErrorPage } from './components/ui/ErrorPage';

import Home, {loader as clientsLoader} from './pages/Home';
import NewClient, { action as newClientAction} from './pages/NewClient';
import { EditClientPage, loader as clientIdLoader, action as clientIdAction } from './pages/EditClientPage';
import './index.css';
import { action as clientCardAction } from './components/client/ClientCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },{
        path: '/clients/:id/edit',
        element: <EditClientPage />,
        loader: clientIdLoader,
        action: clientIdAction,
        errorElement: <ErrorPage />
      },{
        path: 'clients/:id/delete',
        action: clientCardAction
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
