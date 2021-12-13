import React from 'react'
import {useNavigate} from 'react-router-dom';
import zebecLogo from '../../assets/images/logo.png';
import {ReactComponent as Bell} from '../../assets/icons/bell.svg';
import {ReactComponent as Bookmark} from '../../assets/icons/bookmark.svg';
import {ReactComponent as Home} from '../../assets/icons/home.svg';
import {ReactComponent as Message} from '../../assets/icons/message.svg';
import {ReactComponent as Profile} from '../../assets/icons/profile.svg';
const MainPage = ({setIsOpen, setPubKey}) => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.setItem('walletAddress', '');
        window.solana.on('disconnect', ()=> console.log('disconnected'));
        setIsOpen(false)
        setPubKey('')
        console.log('logout')
        window.solana.request({ method: "disconnect" }).then((res) => navigate('/'))
      }
    return (
        <div>
            <div>
                <div className='flex text-center'>
                    <div className='w-2/3 border-2 border-gray-200 h-screen overflow-hidden'>
                        <div className='w-1/2 cursor-pointer m-auto flex flex-col gap-y-5 text-2xl font-semibold'>
                            <div className='flex'>
                                LOGO
                            </div>
                            
                                <div className='flex items-center flex-row gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Home/>
                                    <p>Home</p>
                                </div>
                                <div className='flex flex-row gap-x-3 items-center hover:bg-gray-200 p-2 rounded-full'>
                                    <Bell/>
                                    <p>Notification</p>
                                </div>
                                <div className='flex flex-row gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Message />
                                    <p>Message</p>
                                </div>
                                <div className='flex flex-row gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Bookmark/>
                                    <p>Bookmarks</p>
                                </div>
                                <div className='flex flex-row gap-x-3 hover:bg-gray-200 p-2 rounded-full'>
                                    <Profile/>
                                    <p>Profile</p>
                                </div>
                            
                        </div>
                    </div>
                    <div className='w-full border-2 h-screen overflow-y-auto'>Main area</div>
                    <div className='w-full border-2 h-screen overflow-y-auto '>
                        <input type="text" className='bg-gray-200 p-2 px-10 rounded-full focus:outline-none  focus:bg-white focus:ring-1 focus:ring-blue-400 mt-3' placeholder='Search Zeb' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
