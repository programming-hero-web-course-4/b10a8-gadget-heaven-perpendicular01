import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer, toast } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
      },
      {
        path: 'products/:id',
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/products.json');
          const data = await res.json();
          const product = data.find(p => parseInt(p.product_id) === parseInt(params.id));  // Fix the comparison
          return product;
        }

      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
