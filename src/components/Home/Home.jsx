'use client'
import React from 'react'
import WhyWe from '@/components/Home/WhyWe'
import Landing from '@/components/Home/Landing';
import TrustedBy from '@/components/Home/TrustedBy'
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
                <div className='w-full flex md:my-10 my-5 rounded-md bg-purple-900 py-4 sm:h-[60vh] h-[40vh] relative items-center justify-center flex-col'>
                    <p className='text-center md:w-[80%] lg:w-[70%] w-full sm:text-3xl font-light text-2xl mt-5 text-white'>We are dedicated to fostering a strong connection with our customers. Our offerings include premium services and bespoke solutions designed just for you.</p>
                </div>

                <WhyWe />

            </div>
            <div className='w-full md:h-[70vh] h-[50vh]' style={{
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: 'url("https://res.cloudinary.com/dn83xtspp/image/upload/fl_preserve_transparency/v1721190498/truck_qnrbal.jpg?_s=public-apps")',
            }} /> 
        </div>
    )
}

export default page
