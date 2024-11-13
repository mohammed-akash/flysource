'use client'
import React from 'react'
import Landing from '@/components/Home/Helper/Landing';
const ContactForm = React.lazy(() => import('@/components/Contact/Helper/ContactForm'))
const SourcedProducts = React.lazy(() => import('@/components/Home/Helper/SourcedProducts'))
const Advertise = React.lazy(() => import('@/components/Home/Helper/Advertise'))
const Geography = React.lazy(() => import('@/components/Common/Geography'))
const TrustedBy = React.lazy(() => import('@/components/Home/Helper/TrustedBy'))
const WhyWe = React.lazy(() => import('@/components/Home/Helper/WhyWe'))
const Knowledge = React.lazy(() => import('@/components/Home/Helper/Knowledge'))
const page = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className="w-full md:px-4 px-2 ">
                <Landing />
                <TrustedBy />
                <div className='w-full flex md:my-10 my-5 rounded-md bg-[#3f3fc2] py-4 sm:h-[60vh] h-[40vh] relative items-center justify-center flex-col'>
                    <h2 className='md:text-5xl sm:text-3xl text-2xl font-medium block text-white text-center'>Your Sourcing partner for any product, anytime</h2>
                    <p className='text-center md:w-[80%] lg:w-[70%] w-full font-extralight md:text-2xl text-xl mt-5 text-white'>We are dedicated to fostering a strong connection with our customers. Our offerings include premium services and bespoke solutions designed just for you.</p>
                </div>
                <SourcedProducts />
                <WhyWe />
            </div>
            <Advertise />
            <Geography />
            <Knowledge />
            <ContactForm />
        </div>
    )
}

export default page
