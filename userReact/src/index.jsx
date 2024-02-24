//This .jsx file is the entry point of our React application. It renders the App component into the root HTML element of our web page.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import './index.css';

import Homepage from './pages/1_home';
import Blog from './pages/2_blog';
import News from './pages/3_news';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>This page does not exist :( </h1>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/News",
        element: <News />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
