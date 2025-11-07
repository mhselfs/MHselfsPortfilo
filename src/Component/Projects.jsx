import { ExternalLink, Github } from 'lucide-react';
import React from 'react'

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "../public/projects/project1.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "../public/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "../public/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

const Projects = () => {
    return (

        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    <span className='text-primary'>
                        پروژه‌های‌
                    </span>
                    من
                </h2>

                <p className='text-center text-foreground mb-12 max-w-2xl mx-auto'>
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                    {projects.map(
                        (project, key) => (
                            <div key={key} className='group bg-card rounded-xl overflow-hidden shadow-2xl cart-hover'>
                                <div className='h-48 overflow-hidden'>
                                    <img src={project.image} alt={key} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-100%' />
                                </div>
                                <div className='p-6'>
                                    <div className="flex flex-warp gap-2 mb-4">
                                        {project.tags.map(
                                            (tag) => (
                                                <span className='bg-primary/30 px-2 py-1 text-sm font-medium rounded-full '>
                                                    {tag}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                                <h3 className='text-xl font-semibold mb-2'>
                                    {project.title}
                                </h3>
                                <p className='text-foreground text-sm mb-4'>
                                    {project.description}
                                </p>
                                <div className='flex justify-between items-center ml-4 mb-4'>
                                    <div className="flex space-x-3">
                                        <a target='_blank' href={project.demoUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <ExternalLink />
                                        </a>
                                        <a target='_blank' href={project.githubUrll} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}

                </div>
                    <div className='text-center items-center mt-12'>
                        <a href="https://github.com/mhselfs" className='cosmic-button w-fit'>
                            لینک گیت‌هاب من
                        </a>

                    </div>
            </div>
        </section>
    )
}

export default Projects