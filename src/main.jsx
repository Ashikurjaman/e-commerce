import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
import CartLoader from './Loader/Loader';


const router =createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Shop/>
      },
      {
        path:'/orders',
        element:<Orders/>,
        loader:CartLoader
      },
      {
        path:'/inventory',
        element:<Inventory/>
      },
      {
        path:'/login',
        element:<Login/>
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
