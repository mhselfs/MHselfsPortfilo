import React from 'react'
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Key } from 'lucide-react';

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "GraphQL", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];
const Categorys = ["all", "frontend", "backend"];
const Skills = () => {
    const [activecategory, setActiveCategory] = useState("all")
    const fillteredSkills = skills.filter((skill) => activecategory === "all" || skill.category === activecategory)
    return (
        <section id='skills' className='py-24 px-4 bg-pri'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    <span className='text-primary'>
                        ‌مهارت‌های
                    </span>
                    ‌من‌
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {Categorys.map(
                        (category, key) => (
                            <button onClick={() => setActiveCategory(category)} key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activecategory === category ? "bg-primary text-primary-foreground" : "bg-secendary text-foreground hover:bg-primary")}>{category}</button>
                        )
                    )}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        fillteredSkills.map(
                            (skill, key) => (

                                <div key={key} className='bg-card p-6 rounded-xl shadow-2xl cart-hover m-4'>
                                    <div className='text-left mb-4'>
                                        <h3 className='font-semibold text-lg' >
                                            {skill.name}
                                        </h3>
                                    </div>
                                    <div className='w-full bg-secondary/30 h-2 rounded-full overflow-hidden'>
                                        <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={
                                            {
                                                width: skill.level + "%"
                                            }
                                        }>
                                        </div>
                                    </div>
                                    {/* Skill Level Present */}
                                    <div className="text-right mt-1">
                                        <span className="text-sm text-muted-foreground">
                                            {skill.level}%
                                        </span>
                                    </div>
                                </div>
                            )
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default Skills