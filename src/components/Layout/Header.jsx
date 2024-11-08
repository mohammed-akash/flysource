'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowRoundUp } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiMenu3Fill } from "react-icons/ri";
const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [showMenu, setShowMenu] = useState(false)
    const handleMouseEnter = (link) => {
        setIsHovered(true);
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredLink(null);
    };
    return (
        <div className="w-full md:py-4 py-2 flex items-center justify-between gap-2 relative">
            {isHovered && hoveredLink && (
                <div
                    className="w-full bg-white top-20 border absolute h-[40vh] flex items-start gap-2 z-[999] shadow"
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href={'/'}>
                        <img src="/logo.svg" className='h-20' alt="Logo" />
                    </Link>
                    <div className="text-lg">
                        {hoveredLink === 'services' && <p>Our Services: Details...</p>}
                        {hoveredLink === 'blogs' && <p>Latest Blog Posts: Details...</p>}
                    </div>
                </div>
            )}
            <div className="flex items-center justify-start gap-4">
                <div className="flex items-center gap-2">
                    <img src="/site-logo.png" className='h-[3.5rem]' alt="" />
                    <div className="flex flex-col -space-y-1">
                        <h1 className='text-lg m-0 font-normal tracking-wider uppercase'>Fast</h1>
                        <h1 className='text-xl m-0 font-normal tracking-wider uppercase'>Sourcer</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl md:hidden' onClick={() => setShowMenu(!showMenu)}>
                    <RiMenu3Fill />
                </h1>
                <div className={`${showMenu ? '' : 'hidden md:flex'}  items-center gap-4`}>
                    <div className={`flex md:items-center items-start text-base tracking-wide md:flex-row flex-col md:shadow-none ${showMenu ? 'absolute top-12 right-9' : ''}  md:top-auto md:right-auto  shadow md:border-none border md:z-auto z-[9999] bg-white`}>
                        <Link className='text-[0.9rem] py-[5px] md:px-[16px] px-[8px]' href={'/'}>Home</Link>
                        <Link className='text-[0.9rem] py-[5px] md:px-[16px] px-[8px]' href={'/about'}>About</Link>
                        <div onClick={() => handleMouseEnter('services')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'services' ? 'bg-[#99999933]' : ''}`}>
                            <div className='text-[0.9rem]'>Services</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                        <div onClick={() => handleMouseEnter('blogs')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'blogs' ? 'bg-[#99999933]' : ''} `}>
                            <div className='text-[0.9rem]'>Blogs</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                        <div onClick={() => handleMouseEnter('resources')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'resources' ? 'bg-[#99999933]' : ''} `}>
                            <div className='text-[0.9rem]' >Resources</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                    </div>
                    <div className='md:flex hidden text-sm items-center cursor-pointer justify-center gap-2  font-light tracking-wider w-32 py-[0.3rem] border-[#2d0080a1] text-[#616161] border rounded-full'>
                        <h2>
                            Contact
                        </h2>
                        <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#2d0080a1] text-white">
                            <IoIosArrowRoundUp size='1.3rem' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
