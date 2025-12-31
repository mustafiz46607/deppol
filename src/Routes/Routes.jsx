import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../components/Home';
import Banner from '../components/Banner';
import Projects from '../pages/Projects/Projects';
import Services from '../pages/Serrvices/Services';
import Pricing from '../pages/Pricing/Pricing';
import Company from '../pages/Company/Company';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<Errorpage></Errorpage>,
   children:[
    {
        index:true,
        path:'/',
        Component:Home
    },
    {
      path:'/Projects',
      element:<Projects></Projects>
    },
    {
      path:'/Services',
      element:<Services></Services>
    },
    {
      path:'/Pricing',
      element:<Pricing></Pricing>
    },
    {
      path:'/Company',
      element:<Company></Company>
    }
   ]
  },
]);
export default router;