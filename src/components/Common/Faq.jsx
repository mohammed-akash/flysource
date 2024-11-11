'use client'
import React from 'react'
import { useState } from 'react'
import { FiPlus } from "react-icons/fi";
const Faq = ({ title, value, index }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='my-10 transition-all'>
            <div className="flex sm:items-center items-start gap-3">
                <span>
                    {index + 1}.
                </span>
                <div className="w-full flex gap-3 items-center justify-between">
                    <h2 className='cursor-pointer font-light sm:text-xl text-lg' onClick={() => setOpen(!open)}>{title}</h2>
                    <span className='cursor-pointer' onClick={() => setOpen(!open)}>
                        <FiPlus className='sm:text-[1.4rem] text-xl' color='#616161' />
                    </span>
                </div>
            </div>

            {
                open ? <p className=' pl-8 w-[90%] transition-all mt-4 font-light sm:text-md text-sm'>{value}</p> : ''
            }
        </div>
    )
}

export default Faq
