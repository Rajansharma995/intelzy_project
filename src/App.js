import Login from "./components/web/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  
  // getProvier()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
