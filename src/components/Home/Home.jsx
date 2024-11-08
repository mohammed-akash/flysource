import React from 'react'
import WhyWe from '@/components/Home/WhyWe'
import Faq from '@/components/Home/Faq'
import { faq } from '@/data';
import Landing from '@/components/Home/Landing'
const page = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className="w-full md:px-4 px-2 ">
                <Landing />
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
            <div className='w-full relative flex overflow-hidden my-10 items-center flex-col justify-center '>
                <div className="sm:w-[80%] w-full px-2 ">
                    {
                        (faq ?? []).map((item, index) => (
                            <Faq key={item.id} title={item.question} index={index} value={item.answer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page
