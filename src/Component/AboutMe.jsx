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
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 gradiant-border cart-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-xl bg-primary/10'>
                                    <AtomIcon className='h-8 w-6 text-primary' />
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 gradiant-border cart-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-xl bg-primary/10'>
                                    <SortAscIcon className='h-8 w-6 text-primary' />
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    </p>
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