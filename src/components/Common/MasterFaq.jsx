import React from 'react'
import Faq from './Faq'
import { faq } from '@/data';
const MasterFaq = () => {
    return (
        <div className='w-full relative flex overflow-hidden my-10 items-center flex-col justify-center '>
            <div className="sm:w-[80%] w-full px-2 ">
                <h1 className='md:text-5xl text-3xl font-medium block'>Frequently asked questions</h1>
                {
                    (faq ?? []).map((item, index) => (
                        <Faq key={item.id} title={item.question} index={index} value={item.answer} />
                    ))
                }
            </div>
        </div>
    )
}

export default MasterFaq
