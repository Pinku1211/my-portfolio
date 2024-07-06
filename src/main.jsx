import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact.jsx';
import MainLayout from './components/MainLayout.jsx/MainLayout.jsx';
import Blogs from './components/Blog/Blogs.jsx';
import ShowMore from './components/Blog/ShowMore.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout></MainLayout>,
  errorElement: <Error></Error>,
  children: [
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "portfolio",
      element: <App></App>
    },
    {
      path: "blog",
      element: <Blogs></Blogs>
    },
    {
      path: "contact",
      element: <Contact></Contact>
    },
    {
      path: '/showMore/:id',
      element: <ShowMore></ShowMore>,
      loader: () => fetch ("/posts.json")
    }
    ]

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
