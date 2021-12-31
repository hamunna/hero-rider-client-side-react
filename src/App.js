import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import RiderRegister from './Pages/RiderRegister/RiderRegister';
import LearnerRegister from './Pages/LearnerRegister/LearnerRegister';
import Login from './Pages/Login/Login';
import Packages from './Pages/Products/Packages/Packages';
import Header from './Components/Header/Header';
import './Assets/css/global.css';
import AdminHome from './Pages/AdminDashboard/AdminHome/AdminHome';
import Profile from './Pages/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
     
        <Route path="/riderRegister" element={<RiderRegister />}></Route>
        <Route path="/learnerRegister" element={<LearnerRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        
        <Route path="/packages" element={<Packages />}></Route>
        
        <Route path="/adminDashboard" element={<AdminHome />}></Route>
        
        <Route path="/profile" element={<Profile />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
