import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Courses from './screens/Courses';

// ROUTER
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recommended-courses',
    element: <Courses />,
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
