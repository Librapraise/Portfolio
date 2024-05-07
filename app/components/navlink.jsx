"use client"

import React from "react";
const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");

const NavLink = ({ link }) => {
    
    const pathname = usePathname();
    return (
    <>
        <Link href={link.path} className={`${ pathname === link.path && "bg-black text-white p-2 rounded text-white p-2"}`}>
            {link.title}
        </Link>
    </>
    );
}

export default NavLink;