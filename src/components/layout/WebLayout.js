import React from 'react'

const WebLayout = ({children}) => {
    return (
        <>
            <div className='h-screen w-screen'>
            <div className='flex h-full'>
                {children}
            </div>
            </div>
        </>
    )
}

export default WebLayout
