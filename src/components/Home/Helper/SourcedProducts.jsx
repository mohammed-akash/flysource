import React, { Suspense } from 'react'
import { viableProducts } from '@/data'
import CustomScroller from '@/components/Common/Scroller'
const SourcedProducts = () => {
    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='w-full flex flex-col items-start my-20 mb-4'>
                <div className='w-full flex flex-col'>
                    <h2 className='text-2xl text-[#3f3fc2] mb-2'>Our Variety</h2>
                    <div className="w-full flex flex-col md:gap-6 gap-3 justify-end md:mb-0 mb-8">
                        <h1 className='md:text-5xl text-3xl font-medium block'>Discover a World of Products <br className='md:block hidden' /> Sourced Just for You</h1>
                        <p className=''>We specialize in sourcing an extensive range of products across industries, connecting you with reliable suppliers worldwide.</p>
                    </div>
                </div>
                <div className="w-full">
                    <CustomScroller data={viableProducts} />
                </div>

            </div>
        </Suspense>
    )
}

export default SourcedProducts
