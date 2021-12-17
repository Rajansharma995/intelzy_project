import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import SideBar from './static/SideBar';
import {ReactComponent as ImageIcon} from '../../assets/icons/image.svg';
import PostCard from '../../components/common/PostCard'
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
      const submitHandler = (e) => {
          e.preventDefault();
      }
    return (
        <>
            <div className='flex flex-1 h-full  overflow-y-auto'>
                        <div className='flex-1 overflow-y-auto'>
                            <div className='w-3/4 m-auto border-2'>
                                <form action="" className='' onSubmit={submitHandler}>
                                    <div className=''>
                                        <textarea className='px-5 focus:outline-none focus:ring-blue-400 focus:ring-1  w-full resize-none ' name="" id="" cols="20" rows="5" placeholder='Add new post'></textarea>
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center border-b-2 px-2'>
                                            <div>
                                                <label htmlFor="image" className='cursor-pointer'><ImageIcon/></label>
                                                <input type='file' id='image' className='hidden'/>
                                            </div>
                                            <button className='bg-blue-500 py-2 px-7 rounded-lg text-white'>Post</button>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    {[1,2,3,4,5].map((num) => {
                                        return(
                                            <div key={num}>
                                                <PostCard/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                <div className='max-w-fit h-screen'>
                    <input type="text" className='bg-gray-200 p-2 px-10 rounded-full focus:outline-none  focus:bg-white focus:ring-1 focus:ring-blue-400 mt-3' placeholder='Search Zeb' />
                </div>
            </div>
        </>
    )
}

export default MainPage
