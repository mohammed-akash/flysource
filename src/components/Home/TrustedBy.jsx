import React from 'react'
import AnimationNumber from '@/helpers/AnimationNumber'
const TrustedBy = () => {
    return (
        <div className='w-full flex items-center  my-20 justify-center flex-col gap-5 '>
            <div className=' font-medium md:text-2xl text-xl text-center'>
                Trusted by&nbsp;<AnimationNumber className={'text-2xl font-semibold'} value={100000} />+ businesses like yours
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-8 place-items-center '>
                <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2024/09/home_company_logo1.svg" alt="" />
                <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2023/10/b18.svg" alt="" />
                <img className='px-8 border-none md:border-r' src="https://www.cloudways.com/wp-content/uploads/2023/10/b17.svg" alt="" />
                <img className='px-8' src="https://www.cloudways.com/wp-content/uploads/2023/10/b16.svg" alt="" />
            </div>
        </div>
    )
}

export default TrustedBy
