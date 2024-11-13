'use client'
import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

const Knowledge = () => {
    return (
        <div className='relative overflow-hidden w-full flex items-center justify-center md:min-h-[80vh] min-h-[100vh] bg-[#fff3e78f]'>
            {/* <div className='absolute rotate-[-70deg] rounded-full right-0 w-1/2 h-[130vh] top-0 bg-[#3f3fc292] clip-path-[polygon(0%_0%,_100%_0%,_100%_70%,_0%_100%)]' /> */}

            <div className=' w-full md:w-[90%] flex md:flex-row flex-col items-center justify-center'>
                <div className="md:w-1/2 w-full flex flex-col md:items-start items-center gap-4">
                    <h2 className='w-full mt-3 text-3xl font-medium block md:text-start text-center'>Empowering Your Sourcing Strategy with Insightful Market Intelligence</h2>
                    <h2 className='text-xl md:text-start text-center'>We deliver actionable insights and market knowledge to enhance your sourcing decisions and strengthen your supply chain.</h2>
                    <p className='w-full md:text-start text-center mt-4 font-light'>In today&apos;s complex sourcing landscape, buyers face challenges from fluctuating costs to shifting supply chain dynamics. Access to timely, in-depth market data and proactive risk assessments is essential for making informed purchasing choices. Our sourcing services focus on identifying reliable suppliers, optimizing cost structures, and providing real-time updates on market trends and potential disruptions. By filtering the most relevant data from countless sources, we help you stay ahead, ensuring your sourcing strategy is both resilient and efficient.</p>
                    <div className=' md:w-auto w-full flex  md:gap-4 gap-2 items-center flex-row  md:mt-5 mt-3'>
                        <button className='md:w-auto w-full flex uppercase tracking-wider border md:py-[0.4rem] py-[0.5rem] text-sm px-5 bg-[#3f3fc2] text-white rounded gap-1 items-center justify-center'>Learn More <IoIosArrowRoundUp className='md:text-2xl text-xl rotate-45' /></button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full gap-4 flex items-center justify-center md:mt-0 mt-10">
                    <img className='md:w-[40%] w-[45%] md:-translate-y-12 rounded-lg' src="https://www.dragonsourcing.com/wp-content/uploads/2024/10/Insightsimg1.jpg.webp" alt="" />
                    <img className='md:w-[40%] w-[45%] md:translate-y-12 rounded-lg' src="https://www.dragonsourcing.com/wp-content/uploads/2024/10/Insightsimg2.jpg.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Knowledge
