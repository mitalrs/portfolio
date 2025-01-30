import React from 'react';
import { createBrowserRouter } from 'react-router';   
import App from '../App.js'; 
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import NotFound from '../Pages/notFound.js';
import Statistic from '../Pages/Statistic.js';
import Skills from '../Pages/Skills.js';
import Snippets from '../Pages/Snippets.js';
import Projects from '../Pages/Projects.js';
import Certifications from '../Pages/Certifications.js';
import Blog from '../Pages/Blog.js';
import Anime from '../Pages/Anime.js';

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "statistic", element: <Statistic /> },
      { path: "snippets", element: <Snippets /> },
      { path: "projects", element: <Projects /> },
      { path: "certifications", element: <Certifications /> },
      { path: "blog", element: <Blog /> },
      { path: "anime", element: <Anime /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;