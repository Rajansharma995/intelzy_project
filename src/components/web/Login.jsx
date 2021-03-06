import React from 'react'
import { useState, Fragment } from 'react'
import {getProvier} from '../../login/Phantom';
import zebecLogo from '../../assets/images/zebec.png';
import phantomLogo from '../../assets/images/phantom.png';
import metamaskLogo from '../../assets/images/metamask.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import MainPage from '../pages/MainPage'
const { PublicKey, Connection, clusterApiUrl } = require("@solana/web3.js");
const connection = new Connection(clusterApiUrl('devnet'))
// console.log(window.solana.isConnected)
const Login = ({setIsLoggedin}) => {
  const [pubKey, setPubKey] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const submitHandler = async (e) => {
      const provider = getProvier()
      console.log(provider)
      provider.connect()
      .then(res => {
        
        const message = `Approve to connect to this App`;
        const encodedMessage = new TextEncoder().encode(message);
        window.solana.signMessage(encodedMessage, "utf8")
        .then(res => {
          localStorage.setItem('walletAddress', res.publicKey.toString())
          setPubKey(localStorage.getItem('walletAddress'));
          setIsLoggedin(true)
          navigate('/home')
        })

      }  
        )
      .catch(err => console.log(err))

      
    

    const get_balance = async () => {

      const publicKeyyy = new PublicKey(pubKey)
      const info = await connection.getBalance(publicKeyyy, "confirmed")
      console.log(`Current balance of ${pubKey} is: `, info, "LAMPORTS")
      return info
    }
    // console.log(await get_balance())
    // console.log(localStorage.getItem('walletAddress'))
    // console.log(pubKey)
    }
    
  
        // getProvier().disconnect();
        // localStorage.setItem('walletAddress', '')
    function closeModal() {
      setIsOpen(false)
    }
      
    function openModal() {
      setIsOpen(true)
    }
  return (
    <>
            
                <div className='w-full hidden md:block border-r-2 bg-gradient-to-r from-green-200 to-indigo-200  shadow-xl'>
                  <img src={zebecLogo} alt="" className='h-screen w-full object-cover'/>
                </div>
                <div className="text-center w-full mt-60">
                    
                    <div className='my-5 flex flex-col gap-y-3'>
                        <h1 className="text-5xl font-bold">Welcome to <span className='text-6xl bg-gradient-to-r rounded-xl p-3 from-green-300 to-purple-300 text-gray-100 inline-block'>Zeb</span></h1>
                        <p className='text-md text-gray-500'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates!"</p>
                    </div>
                    <div onClick={() => setIsOpen(true)} className='py-4 px-10 w-full h-full shadow-2xl inline cursor-pointer text-white focus:outline-none bg-gradient-to-r from-green-400 to bg-indigo-300 rounded-lg text-lg text-center'>
                      Connect to wallet
                    </div>
                    <Transition apper show={isOpen} as={Fragment}>
                      <Dialog as='div' onClose={closeModal}  className="fixed inset-0 z-10 overflow-y-auto bg-black md:bg-opacity-75">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>
                        <Transition.Child
                        as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className='md:w-1/6 m-auto text-gray-700 mt-40 block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                            <p className='flex justify-between mx-2 border-b-2 border-gray-400 pb-2 mb-white'>
                              <span className='block w-full text-center italic'>Connect to wallet</span>
                              <span className='font-bold cursor-pointer' onClick={closeModal}>X</span>
                            </p>
                            <ul className='font-bold text-xl pt-2 '>
                             
                                <li className='p-3 flex items-center gap-1 hover:bg-green-300 hover:text-gray-600 transition-all duration-300 cursor-pointer rounded-md'>
                                  <p className='' onClick={submitHandler}>Phantom</p>
                                  <img src={phantomLogo} alt="" className='h-7 w-7 object-cover'/>
                                </li>
                             
                              {/* <li className='p-3 flex items-center gap-1 hover:bg-green-100 hover:text-gray-600 transition-all duration-300 cursor-pointer rounded-md'>
                                <p>Metamask</p>
                                <img src={metamaskLogo} alt="" className='h-7 w-7 object-cover'/>
                              </li> */}
                            </ul>
                          </div>
                        </Transition.Child>
                      </Dialog>
                    </Transition>
                </div>
           
        

          
    </>
  )
    
}

export default Login;
