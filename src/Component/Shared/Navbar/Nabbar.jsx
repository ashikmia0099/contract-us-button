import { document } from 'postcss';
import React, { useState } from 'react';

const Nabbar = () => {

    const [openPopup, setPopup] = useState(false);
    const [formData, setFormData] = useState({})

    function openPopuphandle() {
        setPopup(true);
    }


    const handleFormData = e => {
        e.preventDefault();

        
        const name = e.target.name.value;
        const email = e.target.email.value;
        setFormData({name, email})
       alert(`Submit form successfully name: ${name},email: ${email} `)

    }




    return (
        <div>
            <div className='navbar opacity-100 fixed bg-slate-200'>
                {/* start  */}
                <div className=" navbar-start">
                    <button className='btn'>button</button>
                </div>
                {/* center  */}
                <div className=' navbar-center'>
                    <ul className=' flex gap-5'>
                        <li className='btn'>Home </li>
                        <li onClick={openPopuphandle} className='btn h-6'>Contratc Us</li>
                        <li className='btn'>About Us</li>
                    </ul>
                </div>
                {/* end  */}
                <div className='navbar-end'>
                    <button className='btn'>Register</button>
                </div>
            </div>
            {
                openPopup && (
                    <div id='popup' className=' absolute py-5 space-y-2 mx-auto bg-gray-600 px-4 pb-2 mt-20 right-72 rounded-xl'>

                        <form onSubmit={handleFormData} action="">
                            <input type='text' name='name' placeholder='Enter Your Name' className='pl-3 py-2 rounded-lg mb-1 w-full text-white'></input>
                            <input type='email' name='email' placeholder='Email' className='pl-3 py-2 rounded-lg w-full text-white'></input>

                            <div className=' justify-between flex mt-1'>
                                <div>
                                    <button className='btn' >Submit</button>
                                </div>
                                <div> <button className='btn bg-red-500' onClick={() => setPopup(false)}>Cancel</button></div>
                            </div>
                        </form>
                    </div>
                )
            }
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
 * **/