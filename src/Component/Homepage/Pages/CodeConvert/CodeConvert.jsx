import React from 'react';
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import bularfade from '../../../../components/ui/blur-fade';
import { BlurFade } from "../../../../components/ui/blur-fade";
import { HyperText } from "../../../../components/ui/hyper-text";
import { ShimmerButton } from "../../../../components/ui/shimmer-button";

import { Card } from "@/components/ui/card";
import { CodeBlock, dracula } from "react-code-blocks";
import './CodeConvert.css'
import Marquee from "react-fast-marquee";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { TbBrandDjango } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";





const javascriptCode = `// Imports
const { Schema, model } = require('mongoose');

// Collection name
const collection = 'Design';

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

// Model
module.exports = model(collection, schema);`;



const typescriptCode = `// Imports
import { Schema, model } from 'mongoose';

// Collection name
const collection = 'Design';

// Schema
const schema = new Schema<TDesign>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

// Model
export default model<TDesign>(collection, schema);`;



const CodeConvert = () => {

    const [activeTab, setActiveTab] = useState("JavaScript");


    return (
        <div className=" mx-auto p-6 bg-gray-900 text-white shadow-lg border-animation">
            <BlurFade delay={0.25} inView className="mt-5 mb-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none uppercase  text-center mt-5 mb-2">
               <HyperText  duration={100}> Write Code Make World 👋</HyperText>
                </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className=" text-center  mb-10">
                <span className="text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none uppercase font-semibold text-center mt-5 mb-2">
                <HyperText>Enjoy coding</HyperText>
                </span>
            </BlurFade>
           
            <Marquee>
                <div className="flex flex-wrap gap-2 mb-4 border-b pb-10 border-gray-500 px-1">
                   
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><RiTailwindCssFill /></span><span className=' uppercase space-x-2 mx-2'>TAilwind</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><SiDaisyui /></span><span className=' uppercase'>DusyUi</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><SiShadcnui /></span><span className=' uppercase'>Shadcn</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><IoLogoJavascript /></span><span className=' uppercase'>javascript</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><FaReact /></span><span className=' uppercase'>React Js</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><SiExpress /></span><span className=' uppercase'>Express Js</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><SiNextdotjs /></span><span className=' uppercase'>Next.js</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><IoLogoPython /></span><span className=' uppercase'>Python</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><TbBrandDjango /></span><span className=' uppercase'>Django</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><FaDatabase /></span><span className=' uppercase'>DBMS</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><DiMongodb /></span><span className=' uppercase'>Mongodb</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><BiLogoPostgresql /></span><span className=' uppercase'>PostgreSQL</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><TbBrandMysql /></span><span className=' uppercase'>MYSQL</span></li>
                    <li className='btn rounded-full bg-white/75 backdrop-blur-sm border-none text-black hover:bg-white/60'><span className=' text-2xl text-gray-600'><FaAws /></span><span className=' uppercase '>AWS</span></li>


                </div>
            </Marquee>

            <div >

                <div className='grid grid-cols-2 mt-5 mx-6 border-2 border-gray-400 p-6 py-10 rounded-xl py-10 animated-border'>

                    <div className='mx-1'>
                        <h1 className=' text-xl font-semibold my-3 mx-3'>JavaScript Code</h1>
                        <Tabs value={activeTab} onValueChange={setActiveTab} >

                            <TabsContent value="JavaScript">
                                <CodeBlock text={javascriptCode} language="javascript" theme={dracula} />
                            </TabsContent>
                            <TabsContent value="TypeScript">
                                <CodeBlock text={typescriptCode} language="typescript" theme={dracula} />
                            </TabsContent>
                        </Tabs>
                    </div>


                    {/* Code Display */}

                    <div className='mx-1'>
                        <h1 className=' text-xl font-semibold m-3'>After TypeScript </h1>
                        <Card className="bg-gray-800 rounded-lg border-none">

                            <CodeBlock
                                text={activeTab === "JavaScript" ? javascriptCode : typescriptCode}
                                language={activeTab === "JavaScript" ? "javascript" : "typescript"}
                                theme={dracula}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeConvert;