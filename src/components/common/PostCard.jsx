import React from 'react'

const PostCard = () => {
    
    return (
        <div className='hover:bg-gray-100 transition-all duration-300 border-b-2 p-3'>
            <div className='flex gap-x-3'>
                <img src="https://source.unsplash.com/collection/190727/1519x580" alt="" className='h-10 w-10 rounded-full' />
                <p className='text-gray-500 font-bold '>{localStorage.getItem('walletAddress')}</p>
            </div>
            <div>
                <div className='w-10/12 m-auto'>
                    <img src="https://source.unsplash.com/collection/190727/1519x580" alt=""  className='rounded-xl my-5 object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default PostCard
