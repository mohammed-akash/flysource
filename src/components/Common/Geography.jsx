import React, { Suspense } from 'react'

const Geography = () => {
    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='flex items-center justify-center mt-20 flex-col'>
                <h2 className='text-3xl text-[#3f3fc2]'>Our Geography</h2>
                <p className='text-center mt-2'>Headquartered in the US and operating internationally, our team drives digital transformation for businesses globally. We ensure on-site <br className='lg:block hidden' /> presence to deliver services to our major target markets in:</p>
                <div className="mt-10">
                    <img className='' src='https://www.scnsoft.com/about/company-new/map/map-desktop.svg' alt='geography' />
                </div>
            </div>
        </Suspense>
    )
}

export default Geography
