import React from 'react'

const PostWrapper = ({ title, image, desc }) => {
    return (
        <div className='w-full flex items-center justify-start gap-3'>
            <img className='w-[30%] md:h-24 h-16 object-cover rounded' src={image} alt="" />
            <div className="w-[70%]">
                <h2 className='md:text-xl text-sm md:line-clamp-2 line-clamp-1'>{title}</h2>
                <p className='mt-1 md:text-sm text-xs font-light line-clamp-2'>{desc}</p>
            </div>
        </div>
    )
}

export default PostWrapper
