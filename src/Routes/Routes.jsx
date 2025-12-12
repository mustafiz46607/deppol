import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../components/Home';
import Banner from '../components/Banner';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<Errorpage></Errorpage>,
   children:[
    {
        index:true,
        path:'/',
        Component:Home,
    }
   ]
  },
]);
export default router;