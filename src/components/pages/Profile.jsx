import React,{useState} from 'react'
import CoverImage from '../../assets/images/cover.jpg';
import ProfileImage from '../../assets/images/profilepic.png';
import PostCard from '../common/PostCard';
const Profile = () => {
    
    
    return (
        <div className='w-3/4 m-auto h-full  overflow-y-auto'>
            <div className='relative mb-12'>
                <div className='w-full'>
                    <img src={CoverImage} alt="" className='h-52 w-full rounded-b-md object-cover'/>
                </div>
                <div className=''>
                    <img src={ProfileImage} alt="" className='h-20 w-20 rounded-full absolute -bottom-9 left-9 ring-1 ring-white ring-offset-2'/>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl'>Username</h1>
                <p className='text-gray-500'>followers & Following</p>
            </div>
            <div>
                <h1 className='text-xl font-bold py-3'>Posts</h1>
                <PostCard />
            </div>
        </div>
    )
}

export default Profile
