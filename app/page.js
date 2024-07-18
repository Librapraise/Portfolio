    "use client";

    import React from "react";
    import Image from "next/image";
    import { motion } from "framer-motion";
    import Link from "next/link";
    import { LuExternalLink } from "react-icons/lu";


    const Homepage = () => {
    return (
        <motion.div 
            className="h-full overflow-hidden" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%"}} 
            transition={{ duration: 0.5 }}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                        <Image src="/hero.png" alt="" fill className="object-contain" />
                    </div>
            

                    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center my-6 lg:my-0">
                
                        <h1 className="text-[26px] md:text-4xl font-bold">
                            Crafting Digital Experiences, Designing Tomorrow.
                        </h1>
                    
                        <p className="md:text-lg">
                            Welcome to my digital canvas, where innovation and creativity
                            converge. With a keen eye for aesthetics and a mastery of code, my
                            portfolio showcases a diverse collection of projects that reflect my
                            commitment to excellence.
                        </p>
                    
                        <div className="w-full flex gap-4">
                            <Link href="/CV - Praise Alabi.pdf" target="_blank">
                            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white flex items-center">
                                Resume
                                <LuExternalLink className="w-6 ml-2"/>
                            </button>
                            </Link>
                            <Link href="mailto:alabipraise26@gmail.com" target="_blank">
                            <button className="p-4 rounded-lg ring-1 ring-black">
                                Contact Me
                            </button>
                            </Link>
                        </div>
                    </div>
            </div>
        </motion.div>
    );
    };

    export default Homepage;
