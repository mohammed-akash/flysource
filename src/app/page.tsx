import React from 'react'
import WhyWe from '@/components/WhyWe'
import Footer from '@/components/Footer'
import Wrapper from '@/components/Wrapper'
import Faq from '@/components/Faq'
import { IoIosArrowRoundUp } from "react-icons/io";
import { faq } from '@/data'
import { MdOutlineLightMode } from "react-icons/md";
import { BsSourceforge } from "react-icons/bs";
import { FaNimblr } from "react-icons/fa";
const page = () => {
  return (
    <div className='w-full relative flex overflow-hidden items-center flex-col justify-center '>
      <div className="sm:w-[90%] w-full px-2 ">
        <div className="w-full py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className='h-9' alt="" />
            <h1 className='text-xl font-light tracking-wider uppercase'>FlySource</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className='text-sm flex items-center cursor-pointer justify-center gap-2  font-light tracking-wider w-32 py-[0.3rem] border-[#2d0080a1] text-[#616161] border rounded-full'>
              <h2>
                Contact
              </h2>
              <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#2d0080a1] text-white">
                <IoIosArrowRoundUp size='1.3rem' />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative h-[84vh] flex items-center justify-between" style={{
        }}>
          <div className="flex flex-col w-full items-center gap-3">
            <div className=" relative w-full flex flex-col items-center md:gap-8 sm:gap-5 gap-4 ">
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
              <div className="flex flex-col gap-4 mt-2 items-center">
                <h1 className='font-extralight text-4xl uppercase text-center z-10'> The Best Place for</h1>
                <h1 className='font-extralight text-5xl uppercase text-center z-10'>Streamlined and Excelent</h1>
                <h1 className='font-extralight text-4xl uppercase text-center z-10'>Outsourcing Solution</h1>
              </div>
              <p className='text-center capitalize mt-4'>Streamline your operations with our straightforward outsourcing solutions, designed to enhance <br className='md:block hidden' /> efficiency and reduce overhead costs.</p>
              <button className='uppercase tracking-wider mt-4 border py-[0.5rem] px-7 bg-[#3f3fc2] text-white rounded-lg'>Begin Now</button>
            </div>
          </div>
        </div>
        <Wrapper />
        <WhyWe />
      </div>
      <div className='w-full md:h-[70vh] h-[50vh]' style={{
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://res.cloudinary.com/dn83xtspp/image/upload/fl_preserve_transparency/v1721190498/truck_qnrbal.jpg?_s=public-apps")',
      }} />
      <div className='w-full relative flex overflow-hidden my-10 items-center flex-col justify-center '>
        <div className="sm:w-[80%] w-full px-2 ">
          {
            (faq ?? []).map((item, index) => (
              <Faq key={item.id} title={item.question} index={index} value={item.answer} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default page
