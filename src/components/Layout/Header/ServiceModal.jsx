'use client'
import Link from 'next/link'
import React from 'react'
import { FaBoxes } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaDragon } from "react-icons/fa6";
import { FaPersonRays } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";
import { IoIosArrowRoundUp } from 'react-icons/io';
const ServiceModal = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className="w-full md:mb-0 mb-4 flex justify-center flex-col gap-4">
                <h1 className='text-[#3f3fc2] text-2xl my-4'>
                    Services
                </h1>
                <div className="w-full flex flex-col items-start gap-3 pl-4">
                    <div className="w-full grid grid-cols-3 gap-8 place-items-center">
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/product-sourcing'}>
                            <GiCommercialAirplane className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Product Sourcing</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/product-development'}>
                            <FaBoxes className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Product Development</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/shipping-logistics'}>
                            <GiShipBow className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Shipping & Logistics</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/chine-knowledge'}>
                            <FaDragon className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Chine Knowledge</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/chine-knowledge'}>
                            <FaPersonRays className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Cosulting Services</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                        <Link className='flex items-start gap-3 py-3 px-8 rounded transition-all hover:bg-[#e9e9e98b] ' href={'/blogs/chine-knowledge'}>
                            <GiShop className='text-xl mt-1 text-[#3f3fc2]' />
                            <div className="">
                                <h2 className=' text-lg'>Chine Marketing</h2>
                                <p className='font-light text-xs'>Check For the best Product for Sourcing </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='mt-4 text-end w-full flex items-center justify-end '>
                <Link className='md:px-6 px-2 flex items-center rounded text-[#3f3fc2] transition-all py-[0.4rem] hover:bg-[#e9e9e9ae] bg-[#e9e9e98b]' href={'/services'}>
                    View More <IoIosArrowRoundUp size='1.3rem' className='rotate-90' />
                </Link>
            </div>
        </div>
    )
}

export default ServiceModal
