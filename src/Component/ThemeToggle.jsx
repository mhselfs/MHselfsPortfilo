import React, { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { cn } from '../lib/utils';

const ThemeToggle = () => {
    // Make light and dark mode state
    const [isDarkMode, setIsDarkMode] = useState(false);

    // for save dark mode or light mode
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true)

        } if (storedTheme == "light") {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
    }, [])
    // function to change light or dark
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");

        } else {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true)
            localStorage.setItem("theme", "dark");

        }
    }

    return (
        <button onClick={toggleTheme}
        className={
            // use `cn` function in `lib` for insert comma add another style in new line  
            cn("fixed top-13 md:top-10 -left-2 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
        )}>
            {
                isDarkMode ?
                    <Sun className='h-6 w-6 text-yellow-300' />
                    : <Moon className='h-6 w-6 text-blue-900' />
            }
        </button>
    )
}

export default ThemeToggle