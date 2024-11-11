import React, { Suspense } from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

const Advertise = () => {
    return (
        <Suspense fallback={<div>Loading TrustedBy...</div>}>
            <div className='w-full px-8 flex lg:items-end items-center gap-4 md:flex-row flex-col md:h-[60vh] bg-[#fafcff] pb-10 lg:h-[80vh] md:mb-10 mb-4'>
                <div className="md:w-1/2 w-full flex flex-col md:gap-6 gap-3 justify-end md:mb-0 mb-8">
                    <h1 className='md:text-5xl text-3xl font-medium block'>Got a product idea in mind? <br className='md:block hidden' /> Reach out for a free quote</h1>
                    <p className=''>No upfront costs, no obligations — <br className='md:block hidden' /> just a free quote and answers to any questions that you might have.</p>
                    <div className=' md:w-auto w-full flex  md:gap-4 gap-2 items-center flex-row  md:mt-5 mt-3'>
                        <button className='md:w-auto w-full flex uppercase tracking-wider border md:py-[0.4rem] py-[0.5rem] text-sm px-5 bg-[#3f3fc2] text-white rounded gap-1 items-center justify-center'>Learn More <IoIosArrowRoundUp className='md:text-2xl text-xl rotate-90 md:block hidden' /></button>
                        <button className='md:w-auto w-full uppercase tracking-wider border md:py-[0.4rem] py-[0.5rem] text-sm px-5 border-[#3f3fc2] text-[#3f3fc2] rounded '>Get a Quote </button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="grid gap-4">
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img loading="lazy"
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Advertise
