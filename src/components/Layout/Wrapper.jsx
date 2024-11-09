import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
const Wrapper = ({ children }) => {
    return (
        <div className='w-full relative flex overflow-hidden items-center flex-col justify-center md:px-8 px-2'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Wrapper
