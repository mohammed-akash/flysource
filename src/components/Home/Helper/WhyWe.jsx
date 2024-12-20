'use client'
import React, { Suspense } from 'react'
import { FaGlobeEurope } from "react-icons/fa";
import ServiceHighLight from '@/components/Common/ServiceHighLight';
import { FaPersonShelter } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
const WhyWe = () => {

    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='w-full flex relative md:items-center items-start justify-center flex-col sm:mb-10 mb-5 sm:mt-20 mt-10'>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '0%',
                    height: '7rem',
                    width: '8rem',
                    background: 'rgb(12 134 255 / 75%)',
                    zIndex: -1,
                    filter: 'blur(90px)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '80%',
                    height: '7rem',
                    width: '8rem',
                    background: 'rgba(128, 111, 0, 0.75)',
                    zIndex: -1,
                    filter: 'blur(90px)'
                }} />
                <h2 className='w-full md:text-start text-center sm:text-2xl text-sm text-[#3f3fc2] bg-clip-text'>Our Perks & Benifits</h2>
                <h2 className='w-full mt-3 md:text-5xl text-3xl font-medium block md:text-start'>We believe in cultivating a Stong Connection <br className='md:block hidden' /> with our Customer.</h2>
                <p className='w-full md:text-start mt-4'>We are dedicated to building lasting relationships by providing exceptional support, tailored solutions, and a seamless experience every step of the way.<br className='md:block hidden' />  Our commitment to your success is at the heart of everything we do.</p>
                <div className="w-full mt-10 flex items-center justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-4 p-2">
                        <ServiceHighLight Icon={FaGlobeEurope} title={'Efficient Global Shipping'} desc={'We provide efficient and reliable global shipping solutions to ensure your products reach their destination on time.'} />
                        <ServiceHighLight Icon={FaPersonShelter} title={'Customs Clearance'} desc={'Our expertise in customs clearance ensures that your shipments comply with all regulations, avoIDing delays and additional costs.'} />
                        <ServiceHighLight Icon={GiPathDistance} title={'Real-Time Tracking'} desc={'Stay informed with our real-time tracking system, provIDing you with up-to-date information on the status of your shipments.'} />
                        <ServiceHighLight Icon={PiHandCoins} title={'Secure Handling'} desc={'We prioritize the safety of your products with secure handling and storage throughout the transportation process.'} />
                        <ServiceHighLight Icon={AiOutlineLike} title={'Flexible Solutions'} desc={'Our flexible shipping solutions are tailored to meet your unique business needs, ensuring the best possible service.'} />
                        <ServiceHighLight Icon={RiCustomerService2Fill} title={'Customer Support'} desc={'Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues that may arise.'} />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default WhyWe
