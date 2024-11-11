import React, { Suspense } from 'react'
import AnimatedNumber from '@/ClientHelper/AnimationNumber'
const TrustedBy = () => {
    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='w-full flex items-center  my-20 justify-center flex-col gap-5 '>
                <div className=' font-medium md:text-2xl text-xl text-center'>
                    Trusted by&nbsp;<AnimatedNumber className={'text-2xl font-semibold'} value={100000} />+ businesses like yours
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-8 place-items-center '>
                    <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2024/09/home_company_logo1.svg" alt="company-logo-1" />
                    <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2023/10/b18.svg" alt="company-logo-2" />
                    <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2023/10/b17.svg" alt="company-logo-3" />
                    <img className='px-8' src="https://www.cloudways.com/wp-content/uploads/2023/10/b16.svg" alt="company-logo-4" />
                </div>
            </div>
        </Suspense>
    )
}

export default TrustedBy
