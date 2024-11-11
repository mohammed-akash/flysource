import React, { Suspense } from 'react'
import { MdLocationSearching, MdOutlinePhoneInTalk } from "react-icons/md";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
const ContactForm = () => {
    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='flex items-center justify-center'>
                <section className="md:w-[90%] w-full md:h-[90vh] md:my-10 my-0 flex items-center md:justify-end justify-center md:flex-row flex-col-reverse md:gap-8 gap-5 md:p-4 p-2 rounded ">
                    <div className='md:w-[40%] w-full relative bg-[#011d2b] md:h-full h-[50vh] rounded flex flex-col items-start justify-between md:p-8 p-4 overflow-hidden'>
                        <div className="bg-[#b6b6b62e] rounded-full h-[8rem] w-[8rem] lg:h-[12rem] lg:w-[12rem] absolute bottom-[-10%] right-[-10%]" />
                        <div className="bg-[#b6b6b62e] rounded-full h-[6rem] w-[6rem] lg:h-[9rem] lg:w-[9rem] absolute bottom-[-10%] right-[10%]" />
                        <div className="bg-[#b6b6b62e] rounded-full h-[6rem] w-[6rem] lg:h-[9rem] lg:w-[9rem] absolute bottom-[10%] right-[-10%]" />
                        <div>
                            <h1 className='text-white text-2xl'>Contact Information</h1>
                            <p className="text-sm font-light text-gray-400 mt-1">Say Something to Start a Chat</p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-4 items-center'>
                                <MdOutlinePhoneInTalk className='text-white md:text-2xl text-xl' />
                                <a href='tel:+8618819382301' className="text-base font-light text-gray-500">+86 18819382301</a>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdMailOutline className='text-white md:text-2xl text-xl' />
                                <a href='mailto:sandyshigz@gmail.com' className="text-base font-light text-gray-500">sandyshigz@gmail.com</a>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <MdLocationSearching className='text-white md:text-2xl text-xl' />
                                <a href='mailto:sandyshigz@gmail.com' className="text-base font-light text-gray-500">No.3 Huacheng Avenue, TianHe, <br /> Guangzhou, China</a>
                            </div>
                        </div>
                        <div className='text-white flex items-center gap-3'>
                            <a className='text-xl hover:scale-110 transition-all' href='https://facebook.com'>
                                <GrFacebookOption />
                            </a>
                            <a className='text-xl hover:scale-110 transition-all' href='https://instagram.com'>
                                <GrInstagram />
                            </a>
                            <a className='text-xl hover:scale-110 transition-all' href='https://twitter.com'>
                                <RiTwitterXFill />
                            </a>
                        </div>
                    </div>
                    <div className="py-8 lg:py-16 px-4 md:w-[60%] w-full">
                        <h2 className="mb-4 text-5xl tracking-tight font-medium text-center text-gray-900 md:text-start">Get In Touch</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center md:text-start text-gray-500 dark:text-gray-400 sm:text-xl">Let&apos;s get in touch and bring your ideas to life together, we can source, design, and manufacture exactly what you need.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your email*</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-[#999999] text-sm rounded-lg w-full p-2.5 " placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Subject*</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border border-[#999999] shadow-sm  text-black " placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your message*</label>
                                <textarea id="message" rows="6" className="p-2.5 w-full text-sm rounded-lg shadow-sm border border-[#999999] " placeholder="Leave a comment..." />
                            </div>
                            <button type='submit' className='md:w-auto w-full uppercase tracking-wider mt-4 border py-[0.4rem] text-sm px-7 border-[#999999] text-[#000] rounded '>Submit</button>
                        </form>
                    </div>
                </section>

            </div>
        </Suspense>
    )
}

export default ContactForm
