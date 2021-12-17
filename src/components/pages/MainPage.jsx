import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import SideBar from './static/SideBar';
import '../../assets/css/MainPage.css';
const MainPage = ({setIsOpen, setPubKey}) => {
    const navigate = useNavigate();
   
    
    useEffect(() => {
        console.log('test1')
        const timeOut = setTimeout(() => {
            console.log('test-mid')
            console.log(localStorage.getItem('walletAddress'))
          if(localStorage.getItem('walletAddress')){
            console.log('test2')
            window.solana.request({method:'connect'})
           }
        window.solana.on('connect', () => console.log('connected'))
        }, 1000);
        // return () => clearTimeout(timeOut)
      } ,[])
      
    return (
        <>
            
                    
                    <div className='flex flex-1 h-full  overflow-y-auto'>
                        <div className='flex-1 overflow-y-auto'>
                            <form action="" className='w-3/4  m-auto'>
                                <div className=''>
                                    <textarea className='border-2 px-5 focus:outline-none focus:ring-blue-400 focus:ring-1  w-full resize-none rounded-xl' name="" id="" cols="20" rows="5" placeholder='Add new post'></textarea>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p>Icons</p>
                                        <button className='bg-blue-500 py-2 px-7 rounded-lg text-white'>Post</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='max-w-fit h-screen'>
                            <input type="text" className='bg-gray-200 p-2 px-10 rounded-full focus:outline-none  focus:bg-white focus:ring-1 focus:ring-blue-400 mt-3' placeholder='Search Zeb' />
                        </div>
                    </div>
                    
                
        </>
    )
}

export default MainPage
