import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tighter'>
                        <span className='opacity-0 animate-fade-in'>
                            سلام من
                        </span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> محمدحسین </span>
                        <span className='text-glow opacity-0 animate-fade-in-delay-2'>میری‌پور </span>
                        <span className='opacity-0 animate-fade-in-delay-3'> هستم </span>
                    </h1>
                    <p dir='rtl' className='text-lg md:text-xl mx-auto opacity-100 animate-fade-in-delay-4'>
                        محمدحسینم طراح وب و بین نرد و گیک! چند خط کدی توی وب و ai بلد هستم و امیدوارم دنیا رو بهتر کنم
                        یادتون نره، فقط امیدوارم :)
                        <br />
                        به زودی پورتفیلو خودم رو اینجا براتون بارگزاری میکنم
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-5'>
                        <a href="#project" className='cosmic-button'
                        >
                            پروژه‌هایی که من توسعه داده‌ام
                        </a>
                    </div>


                </div>
            </div>

            <div className='absolute bottom-0 left-1/2 transform -translate-x-0.5 flex flex-col items-center animate-bounce '>
                <span className='text-sm mb-2'>
                    Scroll
                </span>
                <ArrowDown className='w-5 h-5 text-primary' />

            </div>
        </section>
    )
}

export default HeroSection

