import React from 'react'
import { useState, useEffect } from 'react'
import {getProvier} from '../../login/Phantom';
import zebecLogo from '../../assets/images/zebec.png';
import {useNavigate} from 'react-router-dom';
const { PublicKey, Connection, clusterApiUrl } = require("@solana/web3.js");
const connection = new Connection(clusterApiUrl('devnet'))
const Login = () => {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState('')
  const [pubKey, setPubKey] = useState('')
  const changeHandler = (e) => {
    const {value} = e.target;
    setLoginMode(value)
  }
  const submitHandler = (e) => {
    e.preventDefault();

    if (loginMode === "phantom" && getProvier()){
      const provider = getProvier()
      console.log(provider)
      provider.connect()
      .then(res => {
        localStorage.setItem('walletAddress', res.publicKey.toString())
        setPubKey(localStorage.getItem('walletAddress'))
      }  
        )
      .catch(err => console.log(err))
    } 

    const get_balance = async () => {

      const publicKeyyy = new PublicKey(pubKey)
      const info = await connection.getBalance(publicKeyyy, "confirmed")
      console.log(`Current balance of ${pubKey} is: `, info, "LAMPORTS")
      return info
    }
    // console.log(await get_balance())
    // console.log(localStorage.getItem('walletAddress'))
    console.log(pubKey)
    }
    
  
        // getProvier().disconnect();
        // localStorage.setItem('walletAddress', '')
        // window.solana.on('disconnect', ()=> console.log('disconnected'))
    const logOut = () => {
      localStorage.setItem('walletAddress', '')
      navigate('/')
    }
  return (
    <>
    {localStorage.getItem('walletAddress') ?
        (<>
            <h1>Welcome</h1>
            <button className='bg-red-500 p-5 text-white rounded-xl' onClick={logOut}>Sign out</button>
          </>) : 
          (
            <div>
            <div className='flex flex-row justify-between'>
                <div className='w-full hidden md:block border-r-2 bg-gradient-to-r from-green-200 to-indigo-200  shadow-xl'>
                  <img src={zebecLogo} alt="" className='h-screen w-full object-cover'/>
                </div>
                <div className="text-center w-full mt-60">
                    {localStorage.getItem('walletAddress') ? (<p>This is {localStorage.getItem('walletAddress')}</p>):('')}
                    
                    <div className='my-5 flex flex-col gap-y-3'>
                        <h1 className="text-5xl font-bold">Welcome to <span className='text-6xl bg-gradient-to-r rounded-xl p-3 from-green-300 to-purple-300 text-gray-100 inline-block'>Zeb</span></h1>
                        <p className='text-md text-gray-500'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates!"</p>
                    </div>
                    <form className='flex flex-col w-1/2 m-auto gap-y-3 items-center' onSubmit={submitHandler}>
                        <select className="py-4 px-10 w-full text-white focus:outline-none bg-gradient-to-r from-green-400 to bg-indigo-300 rounded-lg text-lg text-center" name='loginMode' value={loginMode} id="loginMode" onChange={changeHandler}>
                          <option value="" disabled className='text-white'>Choose a Wallet</option>
                          <option value="phantom">Phantom</option>
                          <option value="metamask">Metamask</option>
                        </select>
                        {loginMode && <button type='submit' className='inline rounded-lg w-3/4 p-3  bg-gradient-to-r from-green-400 to bg-indigo-300 text-white hover:bg-green-300 transition-all duration-700'>Connect via {loginMode}</button>}
                        
                    </form>
                </div>
            </div>
        </div>
          )}
    </>
  )
    
}

export default Login;
