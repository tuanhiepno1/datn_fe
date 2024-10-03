import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import AuthMiddleware from './middlerware/AuthMiddlerware';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import User from './pages/user/User';
import Dashboard from './pages/Dashboard';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <AuthMiddleware>
        <Layout />
      </AuthMiddleware> 
    ),
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/user', element: <User /> },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <RouterProvider router={router} /> 
      <ToastContainer />
  </Provider>
);