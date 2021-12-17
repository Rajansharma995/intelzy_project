import React from 'react'

const WebLayout = ({children}) => {
    return (
        <>
            <div className='h-screen w-10/12 m-auto'>
            <div className='flex h-full'>
                {children}
            </div>
            </div>
        </>
    )
}

export default WebLayout
