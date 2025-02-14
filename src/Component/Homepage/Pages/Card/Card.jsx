import React, { useEffect } from 'react';
import './code.css';
import './code.js'
import { FaArrowCircleRight } from "react-icons/fa";
import { ShimmerButton } from "../../../../components/magicui/shimmer-button";
import { ShineBorder } from "../../../../components/magicui/shine-border";

// import { NeonGradientCard } from "@/registry/magicui/neon-gradient-card";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import neture1 from '../../../../assets/images/neture1.jpg'
import neture2 from '../../../../assets/images/nature2.jpg'
import neture3 from '../../../../assets/images/neture3.jpg'
import StackingCard from '../StackingCard/StackingCard';
import { TextReveal } from "../../../../components/magicui/text-reveal";
import { LineShadowText } from "../../../../components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import ContractForm from '../ContractForm/ContractForm';



const Card = () => {

    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "white" ? "white" : "white";

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);


    return (
        <div className='bg-gradient-to-t to-[#020514] from-[#2facff] '>
            <div>
                <h1 className="text-balance py-10 uppercase text-center text-5xl font-semibold text-white leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                MY 
                   <span> <LineShadowText className="italic " shadowColor={shadowColor}>
                        Projects
                    </LineShadowText></span>
                </h1>
            </div>
            <div className=' grid grid-cols-2 mx-auto max-w-screen-xl gap-10 py-10 px-10'>
                <div data-aos="zoom-in-down">
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
                                    <div class="carddivimage ">

                                        <img src={neture1} className=' hoverimgshadow h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>
                </div>
                <div data-aos="zoom-in-down">
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

                                        <img src={neture2} className='  h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>
                </div>
                <div data-aos="zoom-in-down">
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

                                        <img src={neture3} className='  h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>
                </div>
                <div data-aos="zoom-in-down">
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

                                        <img src={neture2} className='  h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>
                </div>
                <div data-aos="zoom-in-down">
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
                <div data-aos="zoom-in-down">
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

                                        <img src={neture3} className='  h-40 w-80 rounded-xl  justify-center flex border-none   hover:border-none relative group' alt="" />
                                        <div className="arrowbutton absolute -right-3 flex items-center justify-center top-[35%] hidden group-hover:flex">
                                            <FaArrowCircleRight className="text-4xl text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </ShineBorder>
                </div>

            </div>
            <div className='flex text-center justify-center items-center my-14'>
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg w-40 uppercase">
                        Other Project
                    </span>
                </ShimmerButton>
            </div>
            {/* card  */}
            <StackingCard></StackingCard>
            {/* contract form */}
            <ContractForm></ContractForm>
        </div>
    );
};

export default Card;