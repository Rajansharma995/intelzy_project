import Login from "./components/web/Login";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import {useState} from 'react';
import WebLayout from "./components/layout/WebLayout";
import SideBar from "./components/pages/static/SideBar";
import Notifications from "./components/pages/Notifications";
import ProtectedRoute from "./components/common/ProtectedRoute";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  console.log('navbar')
  return (
    <div className="App">
      <Router>
        <WebLayout>
          {
            isLoggedin && <SideBar setIsLoggedin={setIsLoggedin} />
          }
          <Routes>
            <Route path='/home' element={<ProtectedRoute><MainPage/></ProtectedRoute>}></Route>
            <Route path='/notifications' element={<ProtectedRoute><Notifications/></ProtectedRoute>} />
            <Route path='/' element={isLoggedin ? <MainPage/> : <Login setIsLoggedin={setIsLoggedin}/>}></Route>
            
          </Routes>
        </WebLayout>
      </Router>
    </div>
  );
}

export default App;
