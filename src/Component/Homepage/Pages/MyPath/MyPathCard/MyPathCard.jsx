import React from 'react';


import neture1 from '../../../../../assets/images/neture1.jpg'
import nature2 from '../../../../../assets/images/nature2.jpg'
import neture3 from '../../../../../assets/images/neture3.jpg'


// 1 frontend basic
import { TiHtml5 } from "react-icons/ti";

import { BiSolidFileCss } from "react-icons/bi";


// 2 frontend component Library
import { SiShadcnui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { FaBootstrap, FaCcStripe, FaPaypal } from "react-icons/fa";
import { RiTailwindCssFill, RiVisaFill } from "react-icons/ri";

// 3 full frontend
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";

// 4 programming langauge
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

// 5 backend path
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";

// 6 database path

import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

// 7 extra react
import { SiMongoose } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

// 8 version contronl
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const MyPathCard = () => {





    return (
        <div className=' space-y-2 grid grid-cols-2 pt-36 pl-10 py-5 absolute gap-10 z-10 space-y-44 ml-3 '>
            {/* 1st */}
            <div className=' h-80 w-[520px] rounded-2xl bg-[#2d4e4a]  backdrop-blur-sm -mt-32 text-left px-3 py-3 border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>Frontend Basic</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><TiHtml5 /></div>
                    <div className=' text-5xl text-[#8ceee2]'><BiSolidFileCss /></div>
                    <div className=' text-5xl text-[#8ceee2]'><RiJavascriptFill /></div>
                </div>
                <div className=' font-semibold'>

                    <li>{`HTML: Structures web pages using elements (<div>, <p>, <a>, etc.)`}</li>
                    <li>{`CSS: Styles web pages with colors, layouts (Flexbox, Grid), and animations.`}</li>
                    <li>{`JavaScript: Adds interactivity (events, DOM manipulation, API handling).`}</li>
                    

                </div>
            </div>
            {/* 2nd */}
            <div>
                <div className=' h-80 w-[520px] p-10 rounded-2xl  text-left px-3 py-3 mt-8 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>CSS Frameworks</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><SiShadcnui /></div>
                    <div className=' text-5xl text-[#8ceee2]'><SiDaisyui /></div>
                    <div className=' text-5xl text-[#8ceee2]'><FaBootstrap /></div>
                    <div className=' text-5xl text-[#8ceee2]'><RiTailwindCssFill /></div>
                </div>
                <div className=' font-semibold'>

                    <li>ShadCN: A collection of beautifully styled UI components built on Radix UI and Tailwind CSS.</li>
                    <li>DaisyUI: A plugin for Tailwind CSS that provides pre-designed UI components with themes</li>
                    
                    <li> Tailwind CSS: A utility-first CSS framework that allows rapid styling with minimal custom CSS .</li>
                    

                </div>
                </div>
            </div>
            {/* 3rd */}
            <div>
                <div className=' h-80 w-[520px] -mt-52  p-10 rounded-2xl  text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>Compleate Frontend</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><RiJavascriptFill /></div>
                    <div className=' text-5xl text-[#8ceee2]'><FaReact /></div>
                    <div className=' text-5xl text-[#8ceee2]'><SiVite /></div>
                    <div className=' text-5xl text-[#8ceee2]'><TbBrandRedux /></div>
                </div>
                <div className=' font-semibold'>

                    <li>JavaScript: A dynamic programming language that enables interactivity, DOM manipulation, API handling .</li>
                    <li>Vite: A fast build tool and development server for modern JavaScript frameworks, offering instant Hot Module Replacement (HMR).</li>
                    <li>React: A JavaScript library for building dynamic UI components  with state management and hooks.</li>
                    

                </div>
                </div>
            </div>
            {/* 4th */}
            <div className=' pt-32'>
                <div className=' h-80 w-[520px]  mt-2 p-10 rounded-2xl  text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'> Programming Langauge</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><RiJavascriptFill /></div>
                    <div className=' text-5xl text-[#8ceee2]'><FaPython /></div>
                    <div className=' text-5xl text-[#8ceee2]'><SiTypescript /></div>
                </div>
                <div className=' font-semibold'>

                    <li>JavaScript: A dynamic, interpreted language used for web development, enabling interactivity and DOM manipulation.</li>
                    <li>TypeScript: A superset of JavaScript that adds static typing, improving code reliability and maintainability.</li>
                    <li>Python: A high-level, versatile language known for its simplicity, readability, and use in web development, data science, and automation.</li>
                    

                </div>
                </div>
            </div>
            {/* 5th */}
            <div className=' '>
                <div className=' h-80 w-[520px] -mt-48 p-10 rounded-2xl  text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>Backend Freamwork</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><SiExpress /></div>
                    <div className=' text-5xl text-[#8ceee2]'><RiNextjsFill /></div>
                    <div className=' text-5xl text-[#8ceee2]'><SiDjango /></div>
                </div>
                <div className=' font-semibold'>

                    <li>Express.js: A lightweight and flexible Node.js framework for building web applications and RESTful APIs.</li>
                    <li>Next.js: A React framework with server-side rendering (SSR), static site generation (SSG), and API routes for full-stack development.</li>
                    <li>Django: A Python-based web framework following the MVT pattern, known for its security, scalability, and built-in admin panel.</li>

                </div>
                </div>
            </div>
            {/* 6th */}
            <div className=''>
                <div className=' h-80 w-[520px] mt-40 p-10 rounded-2xl text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>Database Tools</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><BiLogoPostgresql /></div>
                    <div className=' text-5xl text-[#8ceee2]'><TbBrandMysql /></div>
                    <div className=' text-5xl text-[#8ceee2]'><DiMongodb /></div>
                    <div className=' text-5xl text-[#8ceee2]'><SiMongoose /></div>
                </div>
                <div className=' font-semibold'>

                    <li>PostgreSQL: A powerful, open-source relational database known for advanced features, scalability, and strong ACID compliance.</li>
                    <li>MySQL: A widely used relational database with high performance, reliability, and ease of use, popular in web applications.</li>
                    <li>MongoDB: A NoSQL database that stores data in flexible JSON-like documents, ideal for handling large-scale, unstructured data.</li>
                   

                </div>
                </div>
            </div>
            {/* 7th */}
            <div className=' '>
                <div className=' h-80 w-[520px] -mt-52 p-10 rounded-2xl text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'> version Control</h1>
                <div className=' flex gap-3 my-3'>
                    
                    <div className=' text-5xl text-[#8ceee2]'><FaGitSquare /></div>
                    <div className=' text-5xl text-[#8ceee2]'><FaGithub /></div>
                    
                </div>
                <div className=' font-semibold'>

                    {/* <li>Redux: A state management library for JavaScript applications, commonly used with React to manage global state predictably.</li>
                    <li> Mongoose: An Object Data Modeling (ODM) library for MongoDB in Node.js, providing schema validation and easy interaction with the database.</li>
                     */}
                    <li>Git: A distributed version control system that tracks changes in code, allowing multiple developers to collaborate and manage code history efficiently.</li>
                    <li>GitHub: A cloud-based platform for hosting Git repositories, enabling collaboration, version control, and project management through features like pull requests    and issues.</li>
                    


                </div>
                </div>
            </div>
            {/* 8th */}
            <div className=' pt-36 '>
                <div className=' h-80 w-[520px] -ml-40  mr-40 p-10 rounded-2xl text-left px-3 py-3 backdrop-blur-sm bg-[#2d4e4a] border-t-4 border-l-2 border-r border-[#c4cdd3] hover:shadow-lg hover:shadow-[#ffffff]'>
                <h1 className='text-white px-5 py-2 btn rounded-lg border-none bg-gradient-to-t to-[#172522] from-[#101220] uppercase'>Payment Getway</h1>
                <div className=' flex gap-3 my-3'>
                    <div className=' text-5xl text-[#8ceee2]'><FaCcStripe  /></div>
                    <div className=' text-5xl text-[#8ceee2]'><FaPaypal  /></div>
                    <div className=' text-5xl text-[#8ceee2]'><RiVisaFill   /></div>
                    
                </div>
                <div className=' font-semibold'>

                    <li>Stripe :  Best for online businesses and developers (custom integrations).</li>
                    <li>PayPal : Great for peer-to-peer payments, small businesses, and online checkout.</li>
                    <li>Visa : Not a payment processor, but a card network used for transactions globally.</li>
                    

                </div>
                </div>
            </div>

        </div>
    );
};

export default MyPathCard;