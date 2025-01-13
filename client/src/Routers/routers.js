import React from 'react';
import { createBrowserRouter } from 'react-router';   
import App from '../App.js'; 
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import NotFound from '../Pages/notFound.js';

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;