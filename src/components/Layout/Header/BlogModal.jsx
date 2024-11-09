import Link from 'next/link'
import React from 'react'
import PostWrapper from '@/components/Common/PostWrapper';
import { posts } from '@/data';

const BlogModal = () => {
    return (
        <div className='w-full flex md:flex-row flex-col items-center justify-center '>
            <div className="md:w-[25%] w-full md:mb-0 mb-4 flex justify-center flex-col gap-4">
                <h1 className='text-[#3f3fc2]'>
                    Blog Categories
                </h1>
                <div className="flex flex-col items-start gap-3 pl-4">
                    <Link href={'/blogs'}>Product Sourcing</Link>
                    <Link href={'/blogs'}>Product Development</Link>
                    <Link href={'/blogs'}>Shipping & Logistics</Link>
                    <Link href={'/blogs'}>Chine Knowledge</Link>
                </div>
                <div className='md:text-start mt-4 text-end w-full '>
                    <Link className='md:px-6 px-2 rounded text-[#3f3fc2] transition-all py-[0.4rem] hover:bg-[#e9e9e98b]' href={'/blogs'}>View More</Link>
                </div>
            </div>
            <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4">
                {
                    (posts ?? []).map((post, index) => (
                        <PostWrapper key={post.ID} image={post.iconImage} title={post.title} desc={post.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogModal
