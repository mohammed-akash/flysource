import React from 'react'

const page = ({ params }: any) => {
    let id = params.id;
    return (
        <div className='h-[70vh] flex items-center justify-center'>
            {id}
        </div>
    )
}

export default page
