import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import zebecLogo from '../../../assets/images/logo.png';
import {ReactComponent as Bell} from '../../../assets/icons/bell.svg';
import {ReactComponent as Bookmark} from '../../../assets/icons/bookmark.svg';
import {ReactComponent as Home} from '../../../assets/icons/home.svg';
import {ReactComponent as Message} from '../../../assets/icons/message.svg';
import {ReactComponent as Profile} from '../../../assets/icons/profile.svg';
import { useNavigate } from 'react-router-dom';
const { PublicKey, Connection, clusterApiUrl } = require("@solana/web3.js");
const connection = new Connection(clusterApiUrl('devnet'))
const SideBar = ({setIsLoggedin}) => {
    
    
    const navigate = useNavigate()
    const logOut = () => {
        
        localStorage.setItem('walletAddress', '');
        // setIsOpen(false)
        console.log('logout')
        window.solana.request({method:"disconnect"}).then(res => navigate('/'))
        // setPubKey('')
        console.log('below')
        window.solana.on('disconnect', ()=> console.log('disconnected'));
        setIsLoggedin(false)
    
    }
    return (
            <div className='w-1/5 overflow-hidden flex flex-col justify-between'>
                        <div className='w-9/12 m-auto cursor-pointer flex flex-col gap-y-5 text-xl my-0'>
                            <div className='flex-1'>
                                <img src={zebecLogo} alt="" />
                            </div>
                            <NavLink to='/home' style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' })}>
                                <div className='flex flex-1 items-center flex-row gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                <Home/>
                                <p >Home</p>
                                </div>
                            </NavLink>

                            <NavLink to='/notifications' style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' })}>
                                <div className='flex flex-row gap-x-3 items-center hover:bg-gray-200 p-2 rounded-full'>
                                    <Bell/>
                                    <p>Notification</p>
                                </div>
                            </NavLink>
                                <div className='flex flex-row items-center gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Message />
                                    <p>Message</p>
                                </div>
                                <div className='flex flex-row items-center gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Bookmark/>
                                    <p>Bookmarks</p>
                                </div>
                                <NavLink to='/profile' style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' })}>
                                    <div className='flex flex-row items-center gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                        <Profile/>
                                        <p>{`${localStorage.getItem('walletAddress').slice(0,5)}..`}</p>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to='/'>
                                <button className='w-full bg-blue-500 hover:bg-blue-600 transition-all duration-500 px-5 py-3 rounded-full shadow-xl text-white' onClick={logOut}>
                                    Logout
                                </button>
                            </NavLink>
                            
                    </div>
     
    )
}

export default SideBar
