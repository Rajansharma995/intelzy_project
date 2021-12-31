import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import SideBar from './static/SideBar';
import {ReactComponent as ImageIcon} from '../../assets/icons/image.svg';
import PostCard from '../../components/common/PostCard'
import {ReactComponent as NetflixIcon} from '../../assets/icons/netflix.svg';
import '../../assets/css/MainPage.css';
import { getProvier } from '../../login/Phantom';
const MainPage = ({setIsOpen}) => {
    const navigate = useNavigate();
   const [pubKey, setPubKey] = useState('')
   
  
    useEffect(() => {
       setTimeout(async () => {
        try{
            const Provider = getProvier();
            const res = await Provider.connect()
            console.log('res is ',res)
            setPubKey(res.publicKey.toString())
        }catch(err){
            console.log(err)
        }
            
        
        }, 2000);
        // return () => clearTimeout(timeOut)
      } ,[])
      const submitHandler = (e) => {
          e.preventDefault();
      }
    return (
        <>
        {
            !pubKey ? 'loading...' : (
                <div className='flex flex-1 h-full  overflow-y-auto'>
                        <div className='flex-1 overflow-y-auto'>
                            <div className='w-3/4 m-auto border-2'>
                                <form action="" className='' onSubmit={submitHandler}>
                                    <textarea className='px-5 focus:outline-none focus:ring-blue-400 focus:ring-1  w-full resize-none ' name="" id="" cols="20" rows="5" placeholder='Add new post'></textarea>
                                    <div className=''>
                                        <div className='flex justify-between items-center border-b-2 py-1 px-2'>
                                            <div>
                                                <label htmlFor="image" className='cursor-pointer'><ImageIcon/></label>
                                                <input type='file' id='image' className='hidden'/>
                                            </div>
                                            <button className='bg-blue-500 py-2 px-7 rounded-lg text-white'>Post</button>
                                        </div>
                                    </div>
                                </form>
                                {/* <NetflixIcon/> */}
                                <div>
                                    {[1,2,3,4,5].map((num) => {
                                        return(
                                            <div key={num}>
                                                <PostCard pubKey={pubKey}/>
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
            )
        }
            
        </>
    )
}

export default MainPage
