import React from 'react'

const ServiceHighLight = ({ Icon, title, desc }) => {
    return (
        <div className="p-6 rounded-lg flex md:items-start items-center justify-center flex-col">
            <div className="h-12 w-12 flex items-center justify-center border rounded-full mb-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3f3fc2b4] via-[#3f3fc2dc] to-[#3f3fc232]">
                <Icon className='text-2xl text-white' />
            </div>
            <h3 className="text-2xl text-[#1d1c1c] text-start font-[500] mb-2">{title}</h3>
            <p className="text-[#3c4b62] text-start">{desc}</p>
        </div>
    )
}

export default ServiceHighLight
