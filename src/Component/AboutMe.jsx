import { AtomIcon, Code2, RibbonIcon, SortAscIcon } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    درباره <span className='text-primary'>
                        من
                    </span>

                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6 '>
                        <h3 className='text-2xl font-semibold'>بین گیگ و نرد
                        </h3>
                        {/* About My Selfs */}
                        <p className='text-foreground '>
                            دانشجوی پرانگیزه مهندسی کامپیوتر در دانشگاه آزاد اسلامی با تجربه در زبان‌های C#، C++ و Python هستم. در حال حاضر مهارت‌های خود را با یادگیری React و سایر فریم‌ورک‌های مدرن در زمینه توسعه فرانت‌اند گسترش می‌دهم. با داشتن توانایی‌های قوی در کار تیمی، ارتباط مؤثر و حل مسئله، به‌دنبال کارآموزی هستم تا در پروژه‌های نوآورانه مشارکت کرده و تجربه عملی در توسعه نرم‌افزار کسب کنم                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href="#contact" className='cosmic-button'>
                                تماس با من
                            </a>
                            {/* Add link of your CV Hear */}
                            {/* <a href="portfolio/src/assets/MohamadHossein CV V3.1.pdfportfolio/src/assets/MohamadHossein CV V3.1.pdf" className='cosmic-button bg-background/0 text-primary hover:bg-background/10'>
                                دانلود رزومه من
                            </a> */}

                        </div>
                    </div>
                    <div className='gird-cols-1 gap-6'>
                        <div className='p-6 gradiant-border cart-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-xl bg-primary/10'>
                                    <Code2 className='h-8 w-6 text-primary' />
                                    <p>
توسعه‌دهنده Frontend و AI با علاقه‌ی وافر به اکوسیستم گنوم فارسی، که سابقه‌ی مؤثری در تولید محتوا و اعتلای جامعه‌ی کاربری آن دارد. با آشنایی طیف وسیعی از زبان‌ها و فریم‌ورک‌های مختلف، قابلیت انطباق سریع با پروژه‌ها و تکنولوژی‌های نوین را داراست. نقطه قوت اصلی من، همگام بودن با آخرین تحولات هوش مصنوعی در فرآیند کدنویسی است؛ به‌طور مداوم از ابزارهای AI بهره می‌برم تا بهره‌وری، کیفیت کد و سرعت توسعه را به حداکثر برسانم. این رویکرد پیشروانه، تضمین‌کننده‌ی ارائه راه‌حل‌های خلاقانه و کارآمد در پروژه‌های پیچیده است.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 gradiant-border cart-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-xl bg-primary/10'>
                                    <AtomIcon className='h-8 w-6 text-primary' />
                                    <p>
یک توسعه‌دهنده مشتاق و نوآور با تمرکز بر حوزه‌های Frontend و AI، که به توانایی خود در یادگیری سریع مفاهیم و تکنولوژی‌های جدید و به‌کارگیری آن‌ها در پروژه‌ها افتخار می‌کند. دارای ذهنی ساختارمند که امکان تحلیل مسائل پیچیده و ارائه راه‌حل‌های بهینه را فراهم می‌آورد. تجربه‌ی موفق در کار تیمی و همکاری مؤثر با اعضای تیم برای دستیابی به اهداف مشترک، از نقاط قوت کلیدی من محسوب می‌شود. همواره در جستجوی چالش‌های جدید برای رشد و ارتقاء مهارت‌های فنی و فردی خود هستم.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 gradiant-border cart-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-xl bg-primary/10'>
                                    <SortAscIcon className='h-8 w-6 text-primary' />
                                    <p>
من فردی آرمان‌گرا و جویای پیشرفت هستم که همواره در تلاش برای رسیدن به سطوح عالی‌تر در مسیر شغلی و شخصی خود هستم. انگیزه‌ی اصلی من، فراتر رفتن از محدودیت‌های فعلی و دستیابی به دستاوردهای بزرگتر است. در کنار این تلاش، تمرکز ویژه‌ای بر نوشتن کد اسکیل‌پذیر (Scalable Code) دارم. معتقدم که یک کد خوب، نه تنها باید کارآمد و خوانا باشد، بلکه باید قابلیت رشد و انطباق با نیازهای آینده را نیز داشته باشد. این رویکرد، اطمینان از پایداری و موفقیت بلندمدت پروژه‌ها را تضمین می‌کند و من را در دستیابی به اهدافم یاری می‌رساند.                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe