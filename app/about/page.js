"use client";

import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "../components/brain";
import { useRef } from "react";
import { Fade } from "react-reveal";

const AboutPage = () => {

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    //const isSkillRefInView = useInView(skillRef, {once: true});
    const isSkillRefInView = useInView(skillRef, {margin: "-100px"});

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div 
            className="h-full" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%"}} 
            transition={{ duration: 0.5 }}
        >
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0">
                    <div className="flex flex-col gap-8 justify-center ">
                        <h1 className="text-2xl font-bold">BIOGRAPHY</h1>    
                        <p className="text-lg">
                            Praise Alabi, a Mechanical Engineering graduate from the Federal University of Ibadan, 
                            adds a fresh perspective to the tech scene. As a FrontEnd Developer, Praise creates immersive 
                            digital experiences that span industries, blending technology with intuitive design.
                        </p>          
                        <p className="text-lg">
                            Praise's knack for crafting user-friendly interfaces captivates diverse audiences. 
                            By mastering frontend development, Praise transforms complex ideas into engaging digital solutions, 
                            redefining how users interact with technology.
                        </p>
                        <p className="text-lg">
                            Driven by a passion for innovation, Praise stays ahead of emerging trends, pushing the boundaries 
                            of what's possible in frontend development. With a commitment to excellence, Praise embodies the 
                            spirit of ingenuity in every line of code, making an impact in the ever-evolving tech world.
                        </p>
                    </div>

                    {/*Skill container*/}
                    <div className="flex flex-col gap-8 justify-center" ref={skillRef}>

                        <motion.h1 
                            className="text-2xl font-bold"
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? {x: 0} : {}}
                            transition={{delay: 0.2}}
                        >
                            SKILLS
                        </motion.h1>  

                        <motion.div 
                            className="flex gap-4 flex-wrap"
                            initial={{ x: "-300px"}}
                            animate={isSkillRefInView ? {x:0} : {}}
                        >
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                JavaScript
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                React.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Next.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Python
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Django
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Figma
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Tailwind CSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Wordpress
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Git
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-[black]">
                                Framer Motion
                            </div>
                        </motion.div>

                        {/* SKILL SCROLL SVG */}
                        <motion.div
                             initial={{ opacity: 0.2, y: 0 }}
                             animate={{ opacity: 1, y: "10px" }}
                             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <Image src="/mousedown.svg" alt='mouse' width={50} height={50} />
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-8 justify-center pb-48" ref={experienceRef}>
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>

                        {/*Experience list*/}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}} 
                            className=""
                            >
                            
                            {/*Experience list item*/}
                            <div className="flex justify-between h-48">

                                {/*left div*/}
                                <Fade>
                                <div className="w-1/3">
                                    {/*Job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Intern at Zuri Team
                                    </div>
                                    {/*Job description*/}
                                    <div className="p-3 text-sm italic">
                                        Intern at Zuri Team, contributing to the design, 
                                        development, and deployment of innovative web applications.
                                    </div>
                                    {/*Job date*/}
                                    <div className="p-3 text-red-400 text-sm font-semibold">May 2022 - August 2022</div>
                                    {/*Job company*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Zuri Team</div>
                                </div>
                                </Fade>

                                {/*center div*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*line div*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*cirlce line div*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/*right div*/}
                                <div className="w-1/3"></div>
                            </div>

                            {/*Experience list item*/}
                            <div className="flex justify-between h-64">

                                {/*left div*/}
                                <div className="w-1/3 "></div>

                                {/*center div*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*line div*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*cirlce line div*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/*right div*/}
                                <Fade>
                                <div className="w-1/3">
                                    {/*Job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg">
                                        Freelancer
                                    </div>
                                    {/*Job description*/}
                                    <div className="p-3 text-sm italic">
                                        I provide web solutions, applying a range of technologies
                                        to address client requirements.
                                    </div>
                                    {/*Job date*/}
                                    <div className="p-3 text-red-400 text-sm font-semibold">April 2023 - present</div>
                                    {/*Job company*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelancing</div>
                                </div>
                                </Fade>
                            </div>
                            
                            {/*Experience list item*/}
                            <div className="flex justify-between h-48">

                                {/*left div*/}
                                <Fade>
                                <div className="w-1/3">
                                    {/*Job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        FrontEnd Developer
                                    </div>
                                    {/*Job description*/}
                                    <div className="p-3 text-sm italicp-3 text-sm italic">
                                        I spearhead web development at SozoRock Tech Inc., offering expertise in JavaScript frameworks.
                                    </div>
                                    {/*Job date*/}
                                    <div className="p-3 text-red-400 text-sm font-semibold">January 2024 - present</div>
                                    {/*Job company*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">SozoRock Tech Inc.</div>
                                </div>
                                </Fade>

                                {/*center div*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*line div*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*cirlce line div*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>

                                {/*right div*/}
                                <div className="w-1/3"></div>
                            </div>

                        </motion.div>
                    </div>
                </div>

                <div className="hidden sticky top-0 z-30 lg:block w-1/3 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;