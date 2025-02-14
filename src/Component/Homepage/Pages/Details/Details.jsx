import React from 'react';

import nature2 from '../../../../assets/images/neture1.jpg'
import { FaReact } from "react-icons/fa6";
import { NeonGradientCard } from "../../../../components/magicui/neon-gradient-card";
import { Lens } from "../../../../components/magicui/lens";
import { TypingAnimation } from "../../../../components/magicui/typing-animation";
import { FlipText } from "../../../../components/magicui/flip-text";
import { TextAnimate } from "../../../../components/magicui/text-animate";





const Details = () => {
    return (
        <div className=' pt-52 -mt-20 px-5 lg:px-20   bg-gradient-to-t to-[#010313] from-[#010313]'>

            <div className=' grid lg:grid-cols-2 border-b-2 border-gray-800 pb-5'>
                <div>
                    <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area" >
                        <img src={nature2} alt="image placeholder" className=' h-96 rounded-xl border-none' />
                    </Lens>

                </div>
                <div className=' mx-5 mt-5 lg:mt-0'>

                    <TypingAnimation className=' text-5xl font-bold text-gray-100'>Car Doctor</TypingAnimation>


                    <span className=' text-xl font-bold border-b-2 border-gray-400 pb-1 text-white pt-4 mt-4'>Description :</span>
                    <TextAnimate animation="blurInUp" by="character" className=' text-lg font-semibold my-3 text-white'>
                        Professionally promote professional methods of empowerment through e-business partnerships. Appropriately engineer extensible ideas without web-enabled niches. Credibly orchestrate ethical deliverables and standards compliant manufactured products. Credibly create plug-and-play ROI and enabled e-services. Dramatically pursue business innovation vis-a-vis B2B process improvements.

                        
                    </TextAnimate>

                    <div className=' my-10 gap-3 lg:gap-10 grid md:grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <button className='btn w-full border-none rounded-full bg-gradient-to-t to-[#111533] from-[#0e2136] text-xl font-semibold text-white uppercase'>live link</button>
                        </div>
                        <div>
                            <button className='btn w-full border-none rounded-full bg-gradient-to-t to-[#111533] from-[#0e2136] text-xl font-semibold text-white uppercase'>Github link</button>
                        </div>
                        <div>
                            <button className='btn w-full border-none rounded-full bg-gradient-to-t to-[#111533] from-[#0e2136] text-xl font-semibold text-white uppercase'> Video</button>
                        </div>
                        


                    </div>

                </div>
            </div>

            <div className=' mt-6 pb-10'>
                <FlipText
                    className=' text-3xl lg:text-5xl font-bold uppercase my-6 text-white'
                    word="Using Technology"
                />

                <div className=' my-10 grid lg:grid-cols-2 gap-8'>
                    <NeonGradientCard className=' '>
                        <div className=' flex gap-6'>
                            <FaReact className=' text-5xl '></FaReact>
                            <h3 className=' text-4xl font-bold'>React</h3>
                        </div>
                        <div>
                            <p className=' font-semibold my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at, ea vitae doloremque iste sequi saepe quam suscipit delectus laboriosam harum quae deleniti culpa officia repellat excepturi voluptatibus vero sed!</p>
                        </div>
                    </NeonGradientCard >

                    <NeonGradientCard className=' '>
                        <div className=' flex gap-6'>
                            <FaReact className=' text-5xl '></FaReact>
                            <h3 className=' text-4xl font-bold'>React</h3>
                        </div>
                        <div>
                            <p className=' font-semibold my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at, ea vitae doloremque iste sequi saepe quam suscipit delectus laboriosam harum quae deleniti culpa officia repellat excepturi voluptatibus vero sed!</p>
                        </div>
                    </NeonGradientCard >

                    <NeonGradientCard className=' '>
                        <div className=' flex gap-6'>
                            <FaReact className=' text-5xl '></FaReact>
                            <h3 className=' text-4xl font-bold'>React</h3>
                        </div>
                        <div>
                            <p className=' font-semibold my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at, ea vitae doloremque iste sequi saepe quam suscipit delectus laboriosam harum quae deleniti culpa officia repellat excepturi voluptatibus vero sed!</p>
                        </div>
                    </NeonGradientCard >

                    <NeonGradientCard className=' '>
                        <div className=' flex gap-6'>
                            <FaReact className=' text-5xl '></FaReact>
                            <h3 className=' text-4xl font-bold'>React</h3>
                        </div>
                        <div>
                            <p className=' font-semibold my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at, ea vitae doloremque iste sequi saepe quam suscipit delectus laboriosam harum quae deleniti culpa officia repellat excepturi voluptatibus vero sed!</p>
                        </div>
                    </NeonGradientCard >

                </div>
            </div>
        </div>
    );
};

export default Details;