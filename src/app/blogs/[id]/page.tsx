import React from 'react'

const page = ({ params }: any) => {
    let id = params.id;
    return (
        <div>
            Blog: {id}
        </div>
    )
}

export default page
