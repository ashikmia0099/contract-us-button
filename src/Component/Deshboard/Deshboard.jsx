import React from 'react';
import Sidebar from './DeshboardPages/Sidebar/Sidebar';
import AdminNavbar from './DeshboardPages/SidebarPages/AdminNavbar/AdminNavbar';
import { NavLink, Outlet } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";

const Deshboard = () => {
    return (
        <div className=' grid grid-cols-12 '>
            {/* sidebar */}
            <div className=' col-span-2 min-h-screen bg-gradient-to-t to-[#0A1D36] from-[#010313] px-5 overflow-auto'>
                <div className=' mt-10 flex gap-3 items-center ' >
                   
                       <NavLink to='/Deshboard'> <h1 className=' text-white text-xl font-bold flex gap-2 items-center'> <span><MdDashboard></MdDashboard></span>Deshboard</h1></NavLink>
                       
                </div>
                <div className=" divider divide-gray-100  "></div>
                <div  className="h-[calc(100vh)] overflow-auto">
                    <Sidebar></Sidebar>
                </div>


            </div>
            {/* sidebaroutlet */}
            <div className=' col-span-10 bg-gradient-to-t to-[#152336] from-[#133c3d] h-[calc(100vh)] overflow-auto'>
                <AdminNavbar></AdminNavbar>
                <div className=' flex items-center justify-center '>
                <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Deshboard;