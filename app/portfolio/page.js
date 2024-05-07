"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zoom } from "react-reveal";

const projects = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "SportsWear Website",
      desc: "A sportwear and casual wears online shopping website created with html, css and javascript.",
      img: "/sportswear.png",
      link: "https://sportswear-git-main-libras-projects-12c552db.vercel.app/index.html",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Wordpress Lystial Recoup",
      desc: "LystialRecoup is a dedicated organization specializing in the recovery of cryptocurrencies from online fraudsters.",
      img: "/bitcoinrecovery.png",
      link: "https://lystialrecoup.tech/",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "ChatBot App",
      desc: "This project is a chatbot implemented using machine learning techniques and libraries in Django and JavaScript.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/Librapraise/Chatbot-built-with-django-and-javascript",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "College Website",
      desc: "This website was built as a demo for a college using html, css and javascript",
      img: "/uniweb.png",
      link: "https://university-website-eosin.vercel.app/",
    },
  ];

const PortfolioPage = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

    return (
        <motion.div 
            className="h-full" 
            initial={{y: "-200vh"}} 
            animate={{y: "0%"}} 
            transition={{ duration: 0.5 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <Zoom>
                <div className="w-screen capitalize flex items-center justify-center h-[calc(100vh-96px)] text-7xl md:text-6xl xl:text-8xl text-center">
                    my works
                </div>
                </Zoom>

                <div className="sticky flex top-0 h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className={`h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purple-300 to-red-300`} />
                        {projects.map((project) => (
                            <div key={project.id} className={`h-screen w-screen flex justify-center items-center bg-gradient-to-r ${project.color}`}>
                                <div className="flex flex-col gap-6 text-black self-start mt-6 md:mt-4">
                                    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl">{project.title}</h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[320px]">
                                        <Image src={project.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[400px] xl:w-[500px] text-lg">{project.desc}</p>
                                    <Link href={project.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center text-center">
                <h1 className="capitalize text-5xl md:text-6xl xl:text-8xl md:mt-[200px]">do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                        <path
                            id="circlePath"
                            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                        </defs>
                        <text fill="#000">
                        <textPath xlinkHref="#circlePath" className="text-xl">
                            Front-end and Wordpress Developer
                        </textPath>
                        </text>
                    </motion.svg>
                    <Link 
                        href="/contact" 
                        className=""
                    >
                        <button className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center">
                        Hire Me
                        </button>
                        
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage;