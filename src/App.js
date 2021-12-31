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
import './Assets/css/global.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/riderRegister" element={<RiderRegister />}></Route>
        <Route path="/learnerRegister" element={<LearnerRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
