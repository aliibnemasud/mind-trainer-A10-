import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Error from './componants/Error/Error';
import Header from './componants/Header/Header';
import Login from './componants/Login/Login';
import SignUp from './componants/SIgnUp/SignUp';
import Registered from './componants/Registered/Registered';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/registered" element={<Registered></Registered>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>     
    </div>
  );
}

export default App;
