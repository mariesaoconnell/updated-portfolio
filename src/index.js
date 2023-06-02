import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Courses from './screens/Courses';
import Causes from './screens/Causes';

// ROUTER
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recommended-courses',
    element: <Courses />,
  },
  {
    path: '/causes',
    element: <Causes />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
