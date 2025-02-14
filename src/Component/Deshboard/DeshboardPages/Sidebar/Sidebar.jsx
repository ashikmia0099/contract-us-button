import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { FaImage } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className=' text-left  mt-10 '>
            
            <NavLink to='Introduction-Video' className='mt-2'>
                <h5 className=' text-white flex items-center font-semibold gap-2 uppercase mt-2  px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <FaHome></FaHome></span> <span className=' '>Intro Video</span></h5>
            </NavLink>
            <NavLink to='My-Project'>
                <h5 className='text-white  flex items-center font-semibold gap-2 uppercase mt-4 px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <GrProjects></GrProjects></span> <span className=' '>My Project</span></h5>
            </NavLink>
            <NavLink to='Project-Using-Technology'>
                <h5 className='text-white  flex items-center font-semibold gap-2 uppercase mt-4 px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <GrTechnology ></GrTechnology ></span> <span className=' '>Project Using Technology</span></h5>
            </NavLink>
            <NavLink to='My-Project-Scroll-Image'>
                <h5 className=' text-white flex items-center font-semibold gap-2 uppercase mt-4 px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <FaImage></FaImage></span> <span className=' '>My Project Image</span></h5>
            </NavLink>
            <NavLink to='Contract-Me'>
                <h5 className='text-white flex items-center font-semibold gap-2 uppercase mt-4 px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <MdAttachEmail></MdAttachEmail></span> <span className=' '>Contract Me Form</span></h5>
            </NavLink>
            <NavLink to='Address-Form'>
                <h5 className='text-white flex items-center font-semibold gap-2 uppercase mt-4 px-3 py-1 rounded-lg bg-[#16345e]'> <span className=' text-xl'> <FaLocationDot></FaLocationDot></span> <span className=' '>Contract Me bottom</span></h5>
            </NavLink>
            
            
            
        </div>
    );
};

export default Sidebar;