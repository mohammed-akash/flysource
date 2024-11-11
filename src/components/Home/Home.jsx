'use client'
import React from 'react'
import WhyWe from '@/components/Home/Helper/WhyWe'
import Landing from '@/components/Home/Helper/Landing';
import TrustedBy from '@/components/Home/Helper/TrustedBy'
import Geography from '../Common/Geography';
import Advertise from '@/components/Home/Helper/Advertise'
import SourcedProducts from '@/components/Home/Helper/SourcedProducts'
import ContactForm from '@/components/Contact/Helper/ContactForm';
const page = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className="w-full md:px-4 px-2 ">
                <Landing />
                <TrustedBy />
                {/* <div className='w-full flex items-center justify-around my-20 '>
                    <div className='w-full flex items-start justify-center flex-col gap-3 '>
                        <div className='flex items-center justify-center '>
                            
                            <span className='text-5xl font-semibold text-[#3f3fc2]'>
                                &nbsp;+
                            </span>
                        </div>
                        <div>
                            <h1 className='text-3xl font-medium mb-2'>Satisfied Customer</h1>
                            <p>From Chile powder to industrial toolboxes - we've helped clients across 34 countries</p>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-center flex-col gap-3 '>
                        <div className='flex items-center justify-center '>
                            <AnimationNumber className={'text-5xl font-semibold text-[#3f3fc2]'} value={600} />
                            <span className='text-5xl font-semibold text-[#3f3fc2]'>
                                &nbsp;+
                            </span>
                        </div>
                        <div>
                            <h1 className='text-3xl font-medium mb-2'>Satisfied Customer</h1>
                            <p>From Chile powder to industrial toolboxes - we've helped clients across 34 countries</p>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-center flex-col gap-3 '>
                        <div className='flex items-center justify-center '>
                            <AnimationNumber className={'text-5xl font-semibold text-[#3f3fc2]'} value={600} />
                            <span className='text-5xl font-semibold text-[#3f3fc2]'>
                                &nbsp;+
                            </span>
                        </div>
                        <div>
                            <h1 className='text-3xl font-medium mb-2'>Satisfied Customer</h1>
                            <p>From Chile powder to industrial toolboxes - we've helped clients across 34 countries</p>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-center flex-col gap-3 '>
                        <div className='flex items-center justify-center '>
                            <AnimationNumber className={'text-5xl font-semibold text-[#3f3fc2]'} value={600} />
                            <span className='text-5xl font-semibold text-[#3f3fc2]'>
                                &nbsp;+
                            </span>
                        </div>
                        <div>
                            <h1 className='text-3xl font-medium mb-2'>Satisfied Customer</h1>
                            <p>From Chile powder to industrial toolboxes - we've helped clients across 34 countries</p>
                        </div>
                    </div>
                </div> */}
                <div className='w-full flex md:my-10 my-5 rounded-md bg-[#3f3fc2] py-4 sm:h-[60vh] h-[40vh] relative items-center justify-center flex-col'>
                    <h2 className='md:text-5xl sm:text-3xl text-2xl font-medium block text-white text-center'>Your Sourcing partner for any product, anytime</h2>
                    <p className='text-center md:w-[80%] lg:w-[70%] w-full font-extralight md:text-2xl text-xl mt-5 text-white'>We are dedicated to fostering a strong connection with our customers. Our offerings include premium services and bespoke solutions designed just for you.</p>
                </div>
                <SourcedProducts />
                <WhyWe />
            </div>
            <Advertise />
            <Geography />
            <ContactForm />
        </div>
    )
}

export default page
