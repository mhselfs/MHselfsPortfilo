import React, { useState } from 'react'
import { cn } from "../lib/utils";
import { useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
const navItem = [
    { name: "Home", href: "#hero" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" }
]

const NavBar = () => {
    const [isScrolled, setisScrolled] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);

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
        <nav className={cn("fixed w-full z-0 transition duration-300 items-center",
            isScrolled ? "py-3 bg-background-/80 background-blur-md shadow-xs" : "py-5"
        )}>
            {/* LOGO */}
            <div className='container flex justify-between'>
                <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
                    <span className=' relative z-10'>
                        Portfolio
                        <span className='text-glow text-foreground'>
                            Mhselfs
                        </span>
                    </span>
                </a>


                {/* Desktop Version */}
                <div className='hidden md:flex space-x-8'>
                    {navItem.map((item, key) => {
                        return (
                            <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transparent-colors duration-300'>
                                {item.name}
                            </a>
                        )
                    })}
                </div>
                {/* Mobile Version */}
                <button className='md:hidden p-2 text-foreground z-50' onClick={() => setisMenuOpen((prev) => !prev)}>
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
                <div className={cn("fixed inset-0 bg-background backdrop-blur-lg z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>

                    <div className='flex flex-col space-y-8 text-xl'>
                        {navItem.map((item, key) => {
                            return (
                                <a onClick={() => setisMenuOpen(false)} href={item.href} key={key} className='text-foreground/80 hover:text-primary transparent-colors duration-300'>
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar