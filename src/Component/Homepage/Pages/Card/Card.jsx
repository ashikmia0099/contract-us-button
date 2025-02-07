import React from 'react';
import './code.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { ShimmerButton } from "../../../../components/magicui/shimmer-button";
import { ShineBorder } from "../../../../components/magicui/shine-border";

// import { NeonGradientCard } from "@/registry/magicui/neon-gradient-card";


import neture1 from '../../../../assets/images/neture1.jpg'
import neture2 from '../../../../assets/images/nature2.jpg'
import neture3 from '../../../../assets/images/neture3.jpg'




const Card = () => {
    return (
        <div>
            <div className=' grid grid-cols-2 mx-auto max-w-screen-xl gap-10 my-10 px-10'>
                <div>
                    <ShineBorder
                        className="relative flex  w-full flex-col items-center justify-center   border bg-background md:shadow-xl cardsecdiv  py-4 px-6 rounded-xl bg-slate-600 
                hover:bg-gradient-to-r hover:from-[#060807] hover:to-[#49dd9a6]"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            <div className="flex">


                                <div>
                                    <h1 class="honetext text-5xl text-white w-1/2">Dragon News</h1>
                                </div>

                                <div class="card-container ">
                                    <div class="carddivimage">

                                        <img src={neture1} className='  h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>

                </div>
                <div>
                    <div className="cardsecdiv flex py-4 px-6 rounded-xl bg-slate-400 
                hover:bg-gradient-to-r hover:from-[#4ead82] hover:to-[#49dd9a6]">


                        <div>
                            <h1 class="honetext text-5xl text-white w-1/2">Dragon News</h1>
                        </div>

                        <div class="card-container ">
                            <div class="carddivimage">

                                <div class="carddiv h-40 w-80 rounded-[20px] bg-green-300 text-clip items-center justify-center flex border-none p-3 pl-12 pr-5 hover:border-none">
                                    <h1>Card</h1>
                                    <div>
                                        <p class=" right-arrow"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cardsecdiv flex py-4 px-6 rounded-xl bg-slate-400 
                hover:bg-gradient-to-r hover:from-[#4ead82] hover:to-[#49dd9a6]">


                        <div>
                            <h1 class="honetext text-5xl text-white w-1/2">Dragon News</h1>
                        </div>

                        <div class="card-container ">
                            <div class="carddivimage">

                                <div class="carddiv h-40 w-80 rounded-[20px] bg-green-300 text-clip items-center justify-center flex border-none p-3 pl-12 pr-5 hover:border-none">
                                    <h1>Card</h1>
                                    <div>
                                        <p class=" right-arrow"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cardsecdiv flex py-4 px-6 rounded-xl bg-slate-400 
                hover:bg-gradient-to-r hover:from-[#4ead82] hover:to-[#49dd9a6]">


                        <div>
                            <h1 class="honetext text-5xl text-white w-1/2">Dragon News</h1>
                        </div>

                        <div class="card-container ">
                            <div class="carddivimage">

                                <div class="carddiv h-40 w-80 rounded-[20px] bg-green-300 text-clip items-center justify-center flex border-none p-3 pl-12 pr-5 hover:border-none">
                                    <h1>Card</h1>
                                    <div>
                                        <p class=" right-arrow"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='flex text-center justify-center items-center'>
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg w-40 uppercase">
                        Other Project
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default Card;