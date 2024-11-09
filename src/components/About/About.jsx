import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'
import Geography from '@/components/Common/Geography.jsx'
const About = () => {
    return (
        <div className='my-10'>
            <div className='flex items-start justify-center md:flex-row flex-col gap-4'>
                <div className="">
                    <h2 className='text-7xl uppercase md:text-start text-end'>About Fast Sourcer</h2>
                    <h2 className='text-3xl text-[#3f3fc2] mt-10 md:text-start text-center'> Your Partner for Sourcing Success</h2>
                    <p className=' font-light mt-4 md:text-start text-center'>
                        Fast Sourcer is a trusted partner for businesses seeking to streamline their procurement process and enhance supply chain efficiency.
                    </p>
                    <p className=' font-light mt-3 md:text-start text-center'>
                        Founded on the principles of transparency and reliability, Fast Sourcer started with a vision to revolutionize sourcing practices for businesses worldwide.
                    </p>
                    <div className=' md:w-auto w-full flex md:gap-4 gap-2 items-center md:flex-row flex-col mt-5'>
                        <button className='md:w-auto w-full flex uppercase tracking-wider text-xs mt-4 border md:py-[0.6rem] py-[0.8rem] px-7 bg-[#3f3fc2] text-white rounded gap-1 items-center justify-center'>Source Now</button>
                        <button className='md:w-auto w-full uppercase tracking-wider mt-4 text-xs border py-[0.5rem] px-7 border-[#3f3fc2] text-[#3f3fc2] rounded '>Learn More </button>
                    </div>
                </div>
                <img className=' md:w-[90%] w-full h-[60vh] rounded object-fit' src="/logistics.jpg" alt="" />
            </div>
            <div className=" relative flex items-center justify-around h-[50vh] bg-[#3f3fc2] mt-10 md:flex-row flex-col gap-8 md:gap-2 shadow-sm overflow-hidden">
                <div className="h-[6rem] w-[4rem] rotate-[75deg] lg:h-[20rem] lg:w-[20rem] absolute top-[-10%] right-[-10%]">
                    <img className='rounded-full' src="/dotted-pattern.png" alt='' />
                </div>
                <div className="w-full flex flex-col items-center text-white">
                    <h2 className='text-4xl font-medium text-center'>Get Better Quality And Pricing</h2>
                    <p className='font-light mt-4 text-center text-lg'>
                        Through direct sourcing from emerging countries, we provide you with long-term cost savings, <br />  improved quality, and service.  </p>
                    <div className='flex mt-4 text-sm items-center cursor-pointer justify-center gap-2  font-light tracking-wider w-40 py-[0.3rem] border-[#ffffff] text-[#616161] border rounded-full hover:scale-105 transition-all'>
                        <h2 className='text-[#ffffff]'>
                            Learn More
                        </h2>
                        <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#3f3fc2] text-white">
                            <IoIosArrowRoundUp size='1.3rem' />
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full relative flex items-center justify-center mt-28 lg:gap-12 gap-6 lg:flex-row flex-col">
                <div className="bg-[#80710083] blur-[90px] h-[6rem] w-[4rem] lg:h-[16rem] lg:w-[8rem] absolute top-[-10%] z-[-1] left-[50%]" />
                <div className="lg:w-1/2 w-full">
                    <iframe className='rounded-lg lg:h-[360px] md:h-[300px] h-[220px] w-full' src="https://www.youtube.com/embed/aNLuurii-Jo" title="Dragon Sourcing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="lg:w-1/2 w-full flex md:items-start items-center flex-col md:mt-0 mt-4">
                    <h2 className='w-full text-4xl md:text-start text-center'>Creating A Global Impact</h2>
                    <h3 className='w-full text-xl mt-3 md:text-start text-center'>Through direct sourcing from emerging countries</h3>
                    <p className=' font-light mt-4 text-lg md:text-start text-center'>
                        Fast Sourcer delivers long-term cost savings, improved quality, and reliable service. Whether you&apos;re looking to source competitively from emerging markets for export, support local operations with a global sourcing agent, or gather global procurement intelligence to make informed decisions, Fast Sourcer is your trusted partner in streamlined, efficient sourcing.
                    </p>
                    <div className='flex mt-4 text-sm items-center cursor-pointer justify-center gap-2  font-light tracking-wider w-40 py-[0.3rem] border-[#3f3fc2] text-[#616161] border rounded-full'>
                        <h2 className='text-[#3f3fc2]'>
                            Learn More
                        </h2>
                        <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#3f3fc2] text-white">
                            <IoIosArrowRoundUp size='1.3rem' />
                        </div>
                    </div>
                </div>
            </div>
            <Geography />
        </div>
    )
}

export default About
