import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Blog from './components/Blog/Blog.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Home></Home>,
  children: [
    {
      path: "/portfolio",
      element: <App></App>
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    }
  ]

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
