import React, { useState } from 'react'
import { cn } from "../lib/utils";
import { useEffect } from 'react';
const navItem = [
    { name: "Home", href: "#hero" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" }
]

const NavBar = () => {
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(
        () => {
            const handleScroll = () => {
                setisScrolled(window.screenY > 10)
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);

        }
    ), []
    return (
        <nav className={cn("fixed w-full z-0 transition duration-300", 
            isScrolled ? "py-3 bg-background-/80 background-blur-md shadow-xs" : "py-5"
        )}>
            {/* LOGO */}
            <div className='container flex items-center justify-between'>
                <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
                    <span className=' relative z-10'>
                        Portfolio
                        <span className='text-glow text-foreground'>
                            Mhselfs
                        </span>
                    </span>
                </a>
            </div>

            {/* Desktop Version */}
            <div className='flex'>
                {navItem.map((item, key)=>{
                    <a href={item.href}>
                        {item.name}
                    </a>
                })}
            </div>

            {/* Mobile Version */}
        </nav>
    )
}

export default NavBar