import { socialMedia } from '@/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex items-center flex-col justify-center mt-10'>
            <div className="w-[90%] flex sm:flex-row flex-col py-6 gap-5 sm:justify-between justify-center items-center  border-t">
                <div className="flex items-center sm:flex-row flex-col gap-2">
                    <img src="/logo.svg" className='h-12' alt="" />
                    <div className="flex flex-col sm:items-start items-center">
                        <h1 className='text-[1.3rem] text-[#4a4a4a] font-light tracking-wider uppercase'>FastSource</h1>
                        <p className='text-xs text-[#636363]'>Extending the Edge of the OutSourcing Industry</p>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 place-content-center p-4">
                    <div className="p-6 rounded-lg flex items-start justify-start flex-col">
                        <h3 className="text-[#a4a4a4] text-xl text-center font-[400] mb-2">Quicks Links</h3>
                        <div className=" flex flex-col gap-1">
                            <Link href={'/'} className='text-base font-light text-[#888888]'>Home</Link>
                            <Link href={'/about'} className='text-base font-light text-[#888888]'>Services</Link>
                            <Link href={'/contact'} className='text-base font-light text-[#888888]'>Blog</Link>
                            <Link href={'/contact'} className='text-base font-light text-[#888888]'>Contact</Link>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg flex items-start justify-start flex-col">
                        <h3 className="text-[#a4a4a4] text-xl text-center font-[400] mb-2">Legal</h3>
                        <div className=" flex flex-col gap-1">
                            <Link href={'/'} className='text-base font-light text-[#888888]'>Pricing</Link>
                            <Link href={'/about'} className='text-base font-light text-[#888888]'>about</Link>
                            <Link href={'/contact'} className='text-base font-light text-[#888888]'>Contact</Link>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg flex items-start justify-start flex-col">
                        <h3 className="text-[#a4a4a4] text-xl text-center font-[400] mb-2">Know Us</h3>
                        <div className=" flex flex-col gap-1">
                            <Link href={'/about'} className='text-base font-light text-[#888888]'>About</Link>
                            <Link href={'/term-of-services'} className='text-base font-light text-[#888888]'>Terms of Service</Link>
                            <Link href={'/privacy-policy'} className='text-base font-light text-[#888888]'>Privacy Policy</Link>
                            <Link href={'/privacy-policy'} className='text-base font-light text-[#888888]'>Site Map</Link>
                        </div>
                    </div>

                </div> */}
                <div className="flex items-start">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-end gap-3 mt-3">
                            {socialMedia.map((item) => (
                                <a href={item.link} target='_blank' rel='noopener noreferrer' key={item.ID} className='text-sm font-light text-[#888888]'>
                                    <img src={item.iconImage} alt={item.title} className='h-6 w-6' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <h1 className='text-xs text-[#4a4a4a] my-4 font-light tracking-wider text-center uppercase'>Copyright © 2024 FASTSOURCER. <br /> All rights reserved.</h1>
        </div>
    )
}

export default Footer
