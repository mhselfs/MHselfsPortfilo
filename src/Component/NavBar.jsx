import React, { useState } from 'react'
import { cn } from "../lib/utils";
import { useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const navItem = [
    { name: "اصلی", href: "#hero" },
    { name: "درباره من", href: "#about" },
    { name: "مهارت‌ها", href: "#skills" },
    { name: "پروژه‌های من ", href: "#projects" },
    { name: "راه‌های ارتباطی", href: "#contact" }
]

const NavBar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(
        () => {
            const handleScroll = () => {
                setIsScrolled(window.screenY > 10);
            };  
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);

        }
    ), []
    return (
        <nav className={cn("fixed w-full z-10 transition duration-300 items-center",
            "py-3 bg-primary/15 backdrop-blur-3xl"
        )}>
            {/* LOGO */}
            <div className='container flex justify-between'>
                <a href="#hero" className='text-xl font-bold text-primary flex '>
                    <span className=' relative z-1 -right-4'>
                        Portfolio
                        <span className='text-glow text-foreground'>
                            Mhselfs
                        </span>
                    </span>
                </a>



                {/* Desktop Version */}
                <div className='hidden md:flex space-x-8 z-100'>
                    {navItem.map((item, key) => {
                        return (
                            <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transparent-colors duration-300'>
                                {item.name}
                            </a>
                        )
                    })}
                </div>
                {/* Mobile Version */}
                <button className='md:hidden p-2 text-foreground' onClick={() => setisMenuOpen((prev) => !prev)}>
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
                <div className={cn("fixed top-0 left-0 bg-background backdrop-blur-lg z-60 items-center justify-center",
                    "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>

                    <div className='flex flex-col space-y-4 p-4 text-xl items-center h-screen bg-primary w-fit'>
                        {navItem.map((item, key) => {
                            return (
                                <a onClick={() => setisMenuOpen(false)} href={item.href} key={key} className='text-foreground/80 hover:text-primary transparent-colors duration-300'>
                                    {item.name}
                                </a>
                            )
                        })}
                        <ThemeToggle className="bottom-0"/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar