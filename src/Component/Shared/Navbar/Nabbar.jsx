import { document } from 'postcss';
import React, { useState } from 'react';
import { MdAttachEmail } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Nabbar = () => {


    const links = <>


        <NavLink to='/' className={({ isActive }) =>
            isActive ? " border-b-2 border-[#A4DBC1] " : ""
        }>
            <li><p className='text-lg font-semibold'>Home</p></li>
        </NavLink>

        <NavLink to='/Project-Showcase' className={({ isActive }) =>
            isActive ? " border-b border-[#A4DBC1] " : ""
        }>
            <li><p className='text-lg font-semibold'>Project Showcase</p></li>
        </NavLink>
        {/* <NavLink to='/Blogs' className={({ isActive }) =>
            isActive ? " border-b border-[#A4DBC1] " : ""
        }>
            <li><p className='text-lg font-semibold'>Blogs</p></li>
        </NavLink> */}
        <NavLink to='/Details' className={({ isActive }) =>
            isActive ? " border-b border-[#A4DBC1] " : ""
        }>
            <li><p className='text-lg font-semibold'>Details</p></li>
        </NavLink>
        <NavLink to='/Deshboard' className={({ isActive }) =>
            isActive ? " border-b border-[#A4DBC1] " : ""
        }>
            <li><p className='text-lg font-semibold'>Deshboard</p></li>
        </NavLink>





    </>




    return (
        <div className="navbar  sticky top-0 z-40  lg:backdrop-blur-xl bg-[#0f141e80] text-white justify-between ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-14 rounded-full ml-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex pr-10 ">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


        </div>
    );
};

export default Nabbar;




/**
 * Overview: This Is a Contract Us button project. when a user click contract us button this time show a popup. this popup 2 input field and 2 button . this field input Name and email and using have 2 button submit button working submiting form and cancle button hide popup banner. 
 * 
 * 
 * steps --->
 * 1. openPopuphandle function work is show popup form 
 * 2. openPopuphandle under set setPopup state 
 * 3. handleFormData function work is  when submit form form all data store in setFormData state and           show alart message
 * 
 * 
 * Run this code on your compiler : 
 * 
 * steps:
 * 1. clone github on your repogotry 
 * 2. write cmd npm i
 * 3. run project npm run dev
 * 
 * **/