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
      path:'/projects',
      element:<Projects></Projects>
    },
    {
      path:'/services',
      element:<Services></Services>
    },
    {
      path:'/pricing',
      element:<Pricing></Pricing>
    },
  
    {
      path:'/services/ui-ux',
      element:<UI_UX></UI_UX>
    },
    {
      path:'/services/web-design',
      element:<Web_design></Web_design>
    },
    {
      path:'/services/web-development',
      element:<Web_dev></Web_dev>
    },
    {
      path:'/services/brand-design',
      element:<Brand_design></Brand_design>
    },
    {
      path:'/services/logo-&-branding',
      element:<Logo_Branding></Logo_Branding>
    },
    {
      path:'/services/saas-design',
      element:<Saas_design></Saas_design>
    },
    {
      path:'/company/about-us',
      element:<About_us></About_us>
    },
    {
      path:'/company/meet-the-team',
      element:<Meet_the_team></Meet_the_team>
    },
    {
      path:'/company/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/company/career',
      element:<Career></Career>
    },
    {
      path:'/company/contact-us',
      element:<Contact_us></Contact_us>
    }
   ]
  },
]);
export default router;