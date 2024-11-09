import Wrapper from '@/components/Layout/Wrapper';
import React from 'react'

const page = ({ params }: any) => {
    let id = params.id;
    return (
        <Wrapper>
            <div className='h-[70vh] flex items-center justify-center'>
                {id}
            </div>
        </Wrapper>
    )
}

export default page
