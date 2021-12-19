import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LikeIcon} from '../../assets/icons/like.svg';
import {ReactComponent as CommentIcon} from '../../assets/icons/comment.svg';
const PostCard = (props) => {
    
    return (
        <div className='hover:bg-gray-100 cursor-pointer transition-all duration-300 border-b-2 p-3'>
            <Link to='/profile'>
                <div className='flex gap-x-3'>
                        <img src="https://source.unsplash.com/collection/190727/1519x580" alt="" className='h-10 w-10 rounded-full' />
                        <p className='text-gray-500  '>
                            <h1 className='font-bold'>
                                {localStorage.getItem('walletAddress')}
                            </h1>
                            <p className='flex justify-between'>
                                <code>
                                    @Username_username
                                </code>
                                <small className='text-sm  font-semibold'>
                                    {new Date().toLocaleDateString("en-US",{ month: 'short', day: 'numeric'})}
                                </small>
                            </p>
                        </p>
                        
                </div>
            </Link>
            <div>
                <div className='w-10/12 m-auto py-4'>
                    <p>This is caption Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad.</p>
                    <img src="https://source.unsplash.com/collection/190727/1519x580" alt=""  className='rounded-xl h-screen object-cover'/>
                    <div className='flex items-center gap-x-3 pt-4 justify-around'>
                        <div className='flex items-center  gap-x-2'>
                            <LikeIcon/>
                            <p className='text-gray-400'>12</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <CommentIcon/>
                            <p className='text-gray-400'>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
