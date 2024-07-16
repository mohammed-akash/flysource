import React from 'react'
import { sections } from '@/data'
const WhyWe = () => {
    return (
        <div className='w-full flex relative items-center justify-center flex-col'>
            <h2 className='text-center sm:text-xl text-sm'>OUR PERKS & BENEFITS</h2>
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

            <p className='text-center md:w-[80%] lg:w-[60%] w-full sm:text-3xl font-light text-2xl mt-5 text-[#313030]'>We believe in cultivating a Stong Connection with our Customer. So we Offer</p>
            <div className="w-full mt-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-4 p-2">
                    {sections.map((section, index) => (
                        <div key={index} className="p-6 rounded-lg flex items-center justify-center flex-col">
                            <img src={section.iconImage} alt={section.title} className="w-16 h-16 mb-4" />
                            <h3 className="text-2xl text-[#1d1c1c] text-center font-[500] mb-2">{section.title}</h3>
                            <p className="text-[#313030] text-center">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyWe
