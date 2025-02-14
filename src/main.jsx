import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Button } from './components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Home from './Component/Homepage/Home/Home';
import Homepages from './Component/Homepage/Pages/Homepages/Homepages';
import ProjectShowcase from './Component/ProjectShowcase/ProjectShowcase/ProjectShowcase';
import Details from './Component/Homepage/Pages/Details/Details';
import Blogs from './Component/Blogs/Blogs';
import Deshboard from './Component/Deshboard/Deshboard';
import IntroFormVideo from './Component/Deshboard/DeshboardPages/SidebarPages/IntroVideoForm/IntroFormVideo';
import MyProjectForm from './Component/Deshboard/DeshboardPages/SidebarPages/MyProjectForm/MyProjectForm';
import MyProjectImage from './Component/Deshboard/DeshboardPages/SidebarPages/MyProjectImage/MyProjectImage';
import ProjectUsingTechnologyForm from './Component/Deshboard/DeshboardPages/SidebarPages/ProjectUsingTechnologyForm/ProjectUsingTechnologyForm';
import ContractMeForm from './Component/Deshboard/DeshboardPages/SidebarPages/ContractMeForm/ContractMeForm';
import AddressForm from './Component/Deshboard/DeshboardPages/SidebarPages/AddressForm/AddressForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homepages></Homepages>
      },
      {
        path: '/Project-Showcase',
        element: <ProjectShowcase></ProjectShowcase>
      },
      {
        path: '/Details',
        element: <Details></Details>
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>
      },
      
    ]
  },
  {
    path: 'Deshboard',
    element: <Deshboard></Deshboard>,
    children: [
      {
        path: 'Introduction-Video',
        element: <IntroFormVideo></IntroFormVideo>
      },
      {
        path: 'My-Project',
        element: <MyProjectForm></MyProjectForm>
      },
      {
        path: 'My-Project-Scroll-Image',
        element: <MyProjectImage></MyProjectImage>
      },
      {
        path: 'Project-Using-Technology',
        element: <ProjectUsingTechnologyForm></ProjectUsingTechnologyForm>
      },
      {
        path: 'Contract-Me',
        element: <ContractMeForm></ContractMeForm>
      },
      {
        path: 'Address-Form',
        element: <AddressForm></AddressForm>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);