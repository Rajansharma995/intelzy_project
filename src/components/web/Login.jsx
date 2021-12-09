import React from 'react'
import { useState } from 'react'
import {getProvier} from '../../login/Phantom';
import zebecLogo from '../../assets/images/zebec.png';
const Login = () => {
    const [loginMode, setLoginMode] = useState('phantom')
    const [pubKey, setPubKey] = useState('')
  const changeHandler = (e) => {
    const {value} = e.target;
    setLoginMode(value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginMode === "phantom"){
      const publicKey = getProvier()
      setPubKey(publicKey);
    }
  }
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='w-full border-r-2'>
                <img src={zebecLogo} alt="" className='h-screen w-full object-cover'/>
                </div>
                <div className="text-center w-full mt-60">
                    {pubKey ? (<p>This is {pubKey}</p>):('')}
                    
                    <div className='my-5 flex flex-col gap-y-3'>
                        <h1 className="text-5xl font-bold">Welcome to <span className='text-6xl bg-gradient-to-r rounded-xl px-3 from-green-400 to-blue-500 text-gray-100'>Zeb</span></h1>
                        <p className='text-md text-gray-500'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates!"</p>
                    </div>
                    <form className='flex flex-col w-1/2 m-auto gap-y-3 items-center' onSubmit={submitHandler}>
                        <select className="py-4 px-10 text-white bg-blue-600 rounded-lg text-lg text-center" name='loginMode' value={loginMode} id="loginMode" onChange={changeHandler}>
                        <option value="phantom" className='text-center'>Connect via Phantom</option>
                        <option value="metamask" className='text-center'>Connect via Metamask</option>
                        </select>
                        <button type='submit' className='inline rounded-lg w-3/4 p-3 bg-blue-500 text-white hover:bg-blue-800 transition-all duration-500'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
