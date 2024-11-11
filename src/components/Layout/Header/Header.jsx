'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { IoIosArrowRoundUp } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiMenu3Fill } from "react-icons/ri";
import BlogModal from './BlogModal'
import ServiceModal from './ServiceModal'
const Header = () => {
    const menuRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
    const [initialPosition, setInitialPosition] = useState({ top: 48, left: 36 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (menuRef.current) {
            // Store initial position once when component mounts
            const rect = menuRef.current.getBoundingClientRect();
            setInitialPosition({ top: rect.top, left: rect.left });
        }
    }, []);

    useEffect(() => {
        if (!showMenu && menuRef.current) {
            menuRef.current.style.top = `${initialPosition.top}px`;
            menuRef.current.style.left = `${initialPosition.left}px`;
        }
    }, [showMenu, initialPosition]);

    const handleMouseEnter = (link) => {
        setIsHovered(true);
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredLink(null);
    };

    const handleDragStart = (e) => {
        const rect = menuRef.current.getBoundingClientRect();
        setDragStartPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleDrag = (e) => {
        if (e.clientX === 0 && e.clientY === 0) return; // Prevents invalid drag events
        menuRef.current.style.left = `${e.clientX - dragStartPosition.x}px`;
        menuRef.current.style.top = `${e.clientY - dragStartPosition.y}px`;
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const rect = menuRef.current.getBoundingClientRect();
        setDragStartPosition({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
        });
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            menuRef.current.style.left = `${touch.clientX - dragStartPosition.x}px`;
            menuRef.current.style.top = `${touch.clientY - dragStartPosition.y}px`;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-full md:py-4 py-2 flex items-center justify-between gap-2 relative">
            {isHovered && hoveredLink && (
                <div
                    className="w-full bg-white top-20 border absolute md:min-h-[40vh] flex items-center gap-2 z-[999] shadow p-8 rounded"
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='w-full'>
                        {hoveredLink === 'blogs' ? <BlogModal /> : ''}
                        {hoveredLink === 'offerings' ? <ServiceModal /> : ''}
                        {hoveredLink === 'resources' ? <div className='flex items-center justify-center'>This Resource will be added Soon</div> : ''}
                    </div>
                </div>
            )}
            <div className="flex items-center justify-start gap-4">
                <Link href={'/'}>
                    <div className="flex items-center gap-2">
                        <img src="/site-logo.png" className='h-[3.5rem]' alt="site-logo" />
                        <div className="flex flex-col -space-y-1">
                            <h1 className='text-lg m-0 font-normal tracking-wider uppercase'>Fast</h1>
                            <h1 className='text-xl m-0 font-normal tracking-wider uppercase'>Sourcer</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <h1 className='text-2xl md:hidden' onClick={() => {
                    setShowMenu(!showMenu);
                    if (showMenu) handleMouseLeave();
                }}>
                    <RiMenu3Fill />
                </h1>
                <div className={`${showMenu ? '' : 'hidden md:flex'}  items-center gap-4`}>
                    <div ref={menuRef}
                        draggable={showMenu}
                        onDragStart={handleDragStart}
                        onDrag={handleDrag}
                        onMouseUp={handleDragEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className={`flex md:items-center items-start text-base tracking-wide md:flex-row flex-col md:shadow-none md:bg-transparent bg-white  ${showMenu ? 'absolute top-12 right-9' : ''}  md:top-auto md:right-auto  shadow md:border-none border md:z-auto z-[9999]`}>
                        <Link className='text-[0.9rem] py-[5px] md:px-[16px] px-[8px]' href={'/'}>Home</Link>
                        <Link className='text-[0.9rem] py-[5px] md:px-[16px] px-[8px]' href={'/about'}>About</Link>
                        <div onClick={() => handleMouseEnter('offerings')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'offerings' ? 'bg-[#99999933]' : ''}`}>
                            <div className='text-[0.9rem]'>Offerings</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                        <div onClick={() => handleMouseEnter('blogs')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'blogs' ? 'bg-[#99999933]' : ''} `}>
                            <div className='text-[0.9rem]'>Blogs</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                        <div onClick={() => handleMouseEnter('resources')} className={`md:w-auto w-full flex items-center md:justify-center justify-between cursor-pointer gap-1 py-[5px] md:px-[16px] px-[8px] rounded ${hoveredLink === 'resources' ? 'bg-[#99999933]' : ''} `}>
                            <div className='text-[0.9rem]' >Insights</div>
                            <MdOutlineKeyboardArrowDown className='text-lg' />
                        </div>
                    </div>
                    <Link href={'/contact'}>
                        <div className='md:flex hidden text-sm items-center cursor-pointer justify-center gap-2  font-light tracking-wider w-32 py-[0.3rem] border-[#3f3fc2] text-[#616161] border rounded-full'>
                            <h2 className='text-[#3f3fc2]'>
                                Contact
                            </h2>
                            <div className=" rotate-45 border h-8 w-8 flex  items-center justify-center rounded-full bg-[#3f3fc2] text-white">
                                <IoIosArrowRoundUp size='1.3rem' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
