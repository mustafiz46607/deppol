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
import UI_UX from '../pages/UI_UX/UI_UX';
import Web_design from '../pages/Web_design/Web_design';
import Web_dev from '../pages/Web_dev/Web_dev';
import Brand_design from '../pages/Brand_design/Brand_design';
import Logo_Branding from '../pages/Logo_Branding/Logo_Branding';
import Saas_design from '../pages/Saas_design/Saas_design';
import About_us from '../pages/About_us/About_us';
import Meet_the_team from '../pages/Meet_the_team/Meet_the_team';
import Blogs from '../pages/Blogs/Blogs';
import Career from '../pages/Career/Career';
import Contact_us from '../pages/Contact_us/Contact_us';

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
    },
    {
      path:'/services/UI_UX',
      element:<UI_UX></UI_UX>
    },
    {
      path:'/Services/Web_design',
      element:<Web_design></Web_design>
    },
    {
      path:'/Services/Web_dev',
      element:<Web_dev></Web_dev>
    },
    {
      path:'/Services/Brand_design',
      element:<Brand_design></Brand_design>
    },
    {
      path:'/Services/Logo_Branding',
      element:<Logo_Branding></Logo_Branding>
    },
    {
      path:'/Services/Saas_design',
      element:<Saas_design></Saas_design>
    },
    {
      path:'/Company/About_us',
      element:<About_us></About_us>
    },
    {
      path:'/Company/Meet_the_team',
      element:<Meet_the_team></Meet_the_team>
    },
    {
      path:'/Company/Blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/Company/Career',
      element:<Career></Career>
    },
    {
      path:'/Company/Contact_us',
      element:<Contact_us></Contact_us>
    }
   ]
  },
]);
export default router;