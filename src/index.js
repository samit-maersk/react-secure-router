import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Root from './pages/Root';
import ErrorPage from './components/ErrorPage';
import NonSecurePage from './pages/NonSecurePage'
import SecurePage from './pages/SecurePage'
import Login from './pages/Login'
import Auth from './components/Auth';
import Logout from './pages/Logout';

const logout = () => {
  console.log('Logout Invoked')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Root />,
        errorElement: <ErrorPage />
      },
      {
        path: "non-secure-page",
        element: <NonSecurePage />,
        errorElement: <ErrorPage />,
        loader: () => {
          //get this from api
          const numbers = [1,2,3,4,5]
          return numbers;
        }
      },
      {
        path: "secure-page",
        element: <Auth><SecurePage /></Auth>,
        errorElement: <ErrorPage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        action: logout,
        element: <Logout />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

