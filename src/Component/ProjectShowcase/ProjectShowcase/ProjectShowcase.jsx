import React from 'react';

import { AnimatedShinyText } from "../../../components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

import { Marquee } from "../../../components/magicui/marquee";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "../../../components/magicui/particles";



import { Lens } from "../../../components/magicui/lens";
import { BorderBeam } from "../../../components/magicui/border-beam";

import { Button } from "../../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import { TextAnimate } from "../../../components/magicui/text-animate";

import image1 from '../../../assets/images/bannerimg/backgroundimage.avif'
import keyimage from '../../../assets/images/bannerimg/bannertop.avif'
import roundImage from '../../../assets/images/bannerimg/backgroundbottom.avif'

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);



const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-400  hover:bg-gray-950/[.05] bg-white/10 backdrop-blur-sm",
                " "
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
        </figure>
    );
};




const ProjectShowcase = () => {

    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "white" ? "#ffffff" : "#E2E8F0");
    }, [resolvedTheme]);



    return (
        <div className=' pt-52 bg-[#020817] -mt-20'>

            <div className=' text-center'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={30}
                    ease={80}
                    color={color}
                    refresh
                />
                <div className="z-10 flex  items-center justify-center">
                    <div
                        className={cn("group rounded-full border border-black/5 bg-[#171b30] text-white  transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",)}>
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span className=' uppercase'>✨ Generate Ai Image</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>

                    </div>
                </div>
                <TextAnimate animation="blurInUp" by="character" className=' text-5xl lg:text-7xl font-semibold text-white mt-8 uppercase' style={{ fontFamily: "Merienda, serif" }}>
                    Enjoy codding
                </TextAnimate>

                <TextAnimate animation="slideLeft" by="character" className=' text-5xl lg:text-8xl font-semibold text-white mt-5 uppercase' style={{ fontFamily: "Macondo, serif" }}>Enjoy Working</TextAnimate>

                <TextAnimate animation="fadeIn" by="line" as="p" className=' font-medium text-white  my-10 lg:w-1/2 text-center mx-4 lg:mx-auto text-xl'>QueryLab offers instant, AI-powered database sandboxes with seamless querying, visualizations, and external data integration.</TextAnimate>
            </div>

            <div className='  pb-32 px-10 lg:px-20'>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4  bg-gradient-to-r from-[#060B1A]"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#060B1A]"></div>
                </div>
            </div>

            <div className=' mx-20 pb-10'>
                <TextAnimate animation="blurIn" as="h1" className=' text-5xl font-semibold text-white mt-2 text-center my-10 uppercase' style={{ fontFamily: "Audiowide, serif" }} >All Projects</TextAnimate >


                <TextAnimate animation="blurInUp" by="character" className=' font-light text-white my-10 mb-16 lg:w-1/2 text-center mx-auto text-xl' style={{ fontFamily: "Julee, serif" }}>QueryLab offers instant, AI-powered database sandboxes with seamless querying, visualizations, and external data integration.</TextAnimate>

                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>
                    <Card className="relative border-none  bg-[#04090a] rounded-xl">


                        <div>
                            <Lens
                                zoomFactor={2}
                                lensSize={150}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image placeholder"
                                    className=' w-full rounded-none'
                                    height={500}
                                />
                            </Lens>
                        </div>

                        <CardContent>
                            <CardTitle className="text-2xl text-white mt-4">Your next camp</CardTitle>
                            <CardDescription className='mt-2'>
                                See our latest and best camp destinations all across the five
                                continents of the globe.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-yellow-300 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                            <Button className="relative rounded-full uppercase bg-[#18181B] border-none text-white" size="lg" variant="outline">
                                Details
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-green-600 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </CardFooter>



                        <BorderBeam
                            duration={4}
                            size={300}
                            reverse
                            className="from-transparent via-green-200 to-transparent"
                        />
                    </Card>

                   

                </div>
            </div>

            <div className=' px-5 lg:px-40 pb-20 object-cover' style={{ backgroundImage: `url(${image1} ,)`, }}>
                <div className='  h-96 border-4 border-[#1f3468] mt-20 mb-20 rounded-2xl ' >
                    <div>
                        <img src={keyimage} className=' right-16 -mt-16 absolute hidden lg:block' alt="" />
                        <img src={roundImage} className=' left-16 mt-40 absolute -rotate-45 hidden lg:block' alt="" />
                    </div>
                    <div className='flex justify-center items-center h-full w-full'>
                        

                            <h1 className=' text-white text-center px-16 text-4xl lg:text-5xl font-semibold uppercase'>


                            <span>With </span>
                            <span className=' text-[#1862F7]'>Confidencial</span>
                            <span>, your</span>
                            <span> data </span>
                            <span>isn't just safe. It's </span>
                            <span className=' text-[#1862F7]'>acatalyst</span>
                            <span> for </span>
                            <span className=' text-[#1862F7]'>transformation</span>
                           

                            </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectShowcase;