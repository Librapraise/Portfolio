"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion, stagger } from "framer-motion";



const links = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about",
        title: "About",
    },
    {
        path: "/portfolio",
        title: "Portfolio",
    },
    {
        path: "/contact",
        title: "Contact",
    },
]



const Navbar = () => {

    const [open, setOpen] = useState(false);


    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    };
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    };
    
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    };

    const listVariant = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            },
        },
    };
    
    const linkVariant = {
        closed: {
            x: -10,
            opacity: 0,
          },
          opened: {
            x: 0,
            opacity: 1,
          },
    };

    const iconVariant = {
        closed: {
            x: -10,
            opacity: 0,
          },
          opened: {
            x: 0,
            opacity: 1,
          },
    };

    return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 shadow-md">

        <div className="w-1/3 hidden md:flex items-center justify-center gap-5 text-sm font-semibold"
        >
            {links.map((link) => (
                <NavLink link={link} key={link.title} />
            ))}
        </div>

        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-[18px] rounded-md bg-black font-semibold p-2 flex justify-center items-center">
                <span className="text-black bg-white px-1 rounded-sm">LIBRA</span>
                <span className="text-white w-12 h-8 flex justify-center items-center">.dev</span>
            </Link>
        </div>

        
        {/* SOCIAL */}
        <div className="hidden md:flex gap-4 ">
            <motion.div transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                <Link href="https://github.com/Librapraise">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
            </motion.div>
            <motion.div transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                <Link href="https://twitter.com/libracrypt">
                    <FaTwitter className="w-[24px] h-[24px]"/>
                </Link>
            </motion.div>
            <motion.div transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                <Link href="https://www.instagram.com/prayze26/">
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
            </motion.div>
            <motion.div transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                <Link href="https://web.facebook.com/profile.php?id=100073119623851">
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
            </motion.div>
            <motion.div transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                <Link href="https://www.linkedin.com/in/praise-alabi-7ab013236/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </motion.div>
        </div>

        <button 
            className="w-10 h-8 flex flex-col justify-between items-center z-50 relative md:hidden"
            onClick={() => setOpen(!open)}
        >
            <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
 
            {/*Mobile Navbar */}
        { open && (
        <motion.div 
            variants={listVariant} initial="closed" animate="opened"
            className="md:hidden absolute top-0 left-0 w-screen h-screen flex flex-col text-white gap-6 text-2xl z-30 bg-black bg-opacity-90 backdrop-blur-md px-5 py-[80px]"
        >
            {links.map((link) => (
                <motion.div variants={linkVariant} key={link.title} className="uppercase bg-white w-[150px] p-2 rounded-lg text-black font-semibold hover:ease-in hover:text-white hover:bg-[coral]">
                    <Link
                        href={link.path}
                        onClick={() => setOpen(!open)}  
                        className=""
                    >
                        {link.title}
                    </Link>
                </motion.div>
            ))}


            {/* MOBILE SOCIAL */}
            <div 
                className="md:hidden flex gap-4 "
            >
                <motion.div variants={iconVariant} initial={{opacity: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}} >
                    <Link href="https://github.com/Librapraise" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Image src="/github.png" alt="" width={24} height={24} />
                    </Link>
                </motion.div>

                <motion.div variants={iconVariant} initial={{opacity: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}}>
                    <Link href="https://twitter.com/libracrypt" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <FaTwitter className="w-[24px] h-[24px] text-blue-500"/>
                    </Link>
                </motion.div>

                <motion.div variants={iconVariant} initial={{opacity: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}}>
                    <Link href="https://www.instagram.com/prayze26/" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Image src="/instagram.png" alt="" width={24} height={24} />
                    </Link>
                </motion.div>

                <motion.div variants={iconVariant} initial={{opacity: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}}>
                    <Link href="https://web.facebook.com/profile.php?id=100073119623851" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Image src="/facebook.png" alt="" width={24} height={24} />
                    </Link>
                </motion.div>

                <motion.div variants={iconVariant} initial={{opacity: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.2, rotate: 360,}}>
                    <Link href="https://www.linkedin.com/in/praise-alabi-7ab013236/" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Image src="/linkedin.png" alt="" width={24} height={24} transition={{duration: 0.5}} />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
        )}
    </div>
    );
}

export default Navbar;