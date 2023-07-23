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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "root",
        element: <Root />,
        errorElement: <ErrorPage />
      },
      {
        path: "non-secure-page",
        element: <NonSecurePage />,
        errorElement: <ErrorPage />,
        loader: () => {
          const numbers = [1,2,3,4,5]
          return numbers;
        }
      },
      {
        path: "secure-page",
        element: <SecurePage />,
        errorElement: <ErrorPage />
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

