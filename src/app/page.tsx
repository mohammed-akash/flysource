import React from 'react'
import WhyWe from '@/components/WhyWe'
import Footer from '@/components/Footer'
import { MdAutoGraph } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { TiSpiral } from "react-icons/ti";
import { PiFlowArrowLight } from "react-icons/pi";
const page = () => {
  return (
    <div className='w-full relative flex overflow-hidden items-center flex-col justify-center px-2'>
      <div className="sm:w-[90%] w-full ">
        <div className="w-full py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className='h-9' alt="" />
            <h1 className='text-xl font-light tracking-wider uppercase'>FlySource</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className='text-sm flex items-center justify-center gap-2  font-light tracking-wider w-32 py-[0.3rem] border-[#2d0080a1] text-[#616161] border rounded-full'>
              <h2>
                Contact
              </h2>
              <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#2d0080a1] text-white">
                <IoIosArrowRoundUp size='1.3rem' />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative sm:h-[70vh] h-[80vh] flex items-center justify-between">
          <div className="flex flex-col w-full items-center gap-3">
            <div className=" relative w-full flex flex-col items-center gap-3">
              <div className="flex flex-col gap-4 mt-2">
                <h1 className='font-extralight text-4xl uppercase text-center z-10'> The Best Place for</h1>
                <h1 className='font-extralight text-5xl uppercase text-center z-10'>Streamlined and Excelent</h1>
                <h1 className='font-extralight text-4xl uppercase text-center z-10'>Outsourcing Solution</h1>
              </div>
              <p className='text-center tracking-wide mt-4'>Streamline your operations with our straightforward outsourcing solutions, designed to enhance <br /> efficiency and reduce overhead costs.</p>
              <button className='uppercase mt-4 border py-[0.5rem] px-7 bg-[#2d0080] text-white rounded-lg'>Get Started</button>
            </div>
          </div>
        </div>
        <WhyWe />
      </div>
      <Footer />
    </div >
  )
}

export default page
