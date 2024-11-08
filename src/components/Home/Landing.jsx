'use client'
import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { BsSourceforge } from "react-icons/bs";
import { FaNimblr } from "react-icons/fa";
import { IoIosArrowRoundUp } from 'react-icons/io';
import { motion } from 'framer-motion';
const Landing = () => {

    return (
        <div className="w-full relative md:flex-row flex-col flex items-center justify-center">
            <div className="bg-[#80007e83] blur-[90px] h-[6rem] w-[4rem] lg:h-[12rem] lg:w-[8rem] absolute top-[20%] left-[40%]" />
            <div className="flex flex-col md:w-[70%] w-full items-center gap-3 mt-8">
                <div className="relative w-full flex flex-col md:items-start items-center md:gap-8 sm:gap-5 gap-4 ">
                    <div className="flex items-center gap-4 ">
                        <div className='border h-10 w-10 rounded-full flex items-center justify-center bg-white shadow'>
                            <MdOutlineLightMode size='1.6rem' />
                        </div>
                        <div className='border h-10 w-10 rounded-full flex items-center justify-center bg-white shadow'>
                            <BsSourceforge size='1.6rem' />
                        </div>
                        <div className='border h-10 w-10 rounded-full flex items-center justify-center bg-white shadow'>
                            <FaNimblr size='1.6rem' />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6 gap-3 mt-2 items-start">
                        <h1 className='font-normal md:text-5xl text-4xl uppercase md:text-start text-center z-10'>Searching For Markets</h1>
                        <span className='font-semibold md:text-5xl text-5xl uppercase md:text-start text-center z-10 md:whitespace-nowrap bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text'>Best OutSourcer?</span>
                    </div>
                    <p className='md:text-start text-center capitalize text-[#475467]'>
                        We assist businesses of all scales, from emerging startups to Fortune 500 companies, in sourcing, designing, manufacturing, and importing products
                        from China efficiently and seamlessly
                    </p>
                    <div className=' md:w-auto w-full flex md:gap-4 gap-2 items-center md:flex-row flex-col'>
                        <button className='md:w-auto w-full flex uppercase tracking-wider mt-4 border md:py-[0.6rem] py-[0.8rem] px-7 bg-[#3f3fc2] text-white rounded gap-1 items-center justify-center'>Get Started <IoIosArrowRoundUp className='md:text-2xl text-xl rotate-90' /></button>
                        <button className='md:w-auto w-full uppercase tracking-wider mt-4 border py-[0.6rem] px-7 border-[#3f3fc2] text-[#3f3fc2] rounded '>Talk To Expert </button>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3 w-full relative md:h-[80vh] py-2 flex items-center justify-center'>
                <div className="  md:rotate-90 container mx-auto px-5 py-2 md:mt-0 mt-12">
                    <div className="w-full flex flex-wrap md:flex-row flex-col">
                        <div className="flex md:w-1/2 w-full flex-wrap">
                            <motion.div
                                initial={{ x: -50, y: -50, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, type: "spring" }}
                                viewport={{
                                    once: true,
                                }}
                                className="w-1/2 p-1 md:p-2 cursor-pointer hover:grayscale grayscale-0 transition-all border rounded-lg shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/643d656e3d24827b081cecdb_landing-image-20.webp" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, y: -50, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, type: "spring" }}
                                viewport={{
                                    once: true,
                                }}
                                className="w-1/2 p-1 md:p-2 cursor-pointer hover:grayscale grayscale-0 transition-all">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full shadow rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/643cd771e2685e7deb5512a3_landing-image-15.webp" />
                            </motion.div>
                            <motion.div className="rounded-lg mx-2 shadow w-full p-1 md:p-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/643e1b34b34b1628b6766805_landing-image-26.webp" />
                            </motion.div>
                        </div>
                        <div className="flex md:w-1/2 w-full flex-wrap">
                            <motion.div
                                className="w-full p-1 md:p-2 grayscale hover:grayscale-0 transition-all cursor-pointer rounded-lg shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full shadow rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/6438a7495ef94c525be40da1_landing-image-1.webp" />
                            </motion.div>
                            <motion.div
                                initial={{ x: -50, y: 50, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, type: "spring" }}
                                viewport={{
                                    once: true,
                                }}
                                className="w-1/2 p-1 md:p-2 cursor-pointer hover:grayscale grayscale-0 transition-all">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full shadow rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/643c54c57d21c03291c127d4_landing-image-12.webp" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, y: 50, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, type: "spring" }}
                                viewport={{
                                    once: true,
                                }}
                                className=" rounded-lg shadow w-1/2 p-1 md:p-2 cursor-pointer hover:grayscale grayscale-0 transition-all">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full shadow rounded-lg object-cover object-center"
                                    src="https://cdn.prod.website-files.com/632fa11904792046fcb6d8d3/643d6876c14d3062c8efc212_landing-image-21.webp" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
