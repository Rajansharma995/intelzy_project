import logo from './logo.svg';
import './App.css';
import {
  getProvider,

} from "zebecprotocol-sdk";

function App() {
  const clickHandler = () =>{
    console.log("clicked")
    getProvider();
  }
  // getProvider();
  return (
    <div className="App">
      <button onClick={clickHandler}>connect to  Wallet</button>
    </div>
  );
}

export default App;
