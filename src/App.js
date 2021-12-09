import { useState } from 'react'
import {getProvier} from './login/Phantom'
function App() {
  const [loginMode, setLoginMode] = useState('phantom')

  const changeHandler = (e) => {
    const {value} = e.target;
    setLoginMode(value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginMode === "phantom"){
      const {isPhantom} = getProvier()
      
    }
  }
  // getProvier()
  return (
    <div className="App">
      <div className="text-center mt-32">
        <h1 className="text-5xl font-bold my-3">Welcome to Zeb</h1>
        <form className='flex flex-col w-1/2 m-auto gap-y-3 items-center' onSubmit={submitHandler}>
          <select className="py-4 px-10 text-white bg-blue-600 rounded-lg text-lg text-center" name='loginMode' value={loginMode} id="loginMode" onChange={changeHandler}>
            <option value="phantom" className='text-center'>Connect via Phantom</option>
            <option value="metamask" className='text-center'>Connect via Metamask</option>
          </select>
          <button type='submit' className='inline rounded-lg w-1/5 p-3 bg-blue-800 text-white'>Login</button>
        </form>

      </div>
     
    </div>
  );
}

export default App;
