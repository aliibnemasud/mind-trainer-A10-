import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Error from './componants/Error/Error';
import Header from './componants/Header/Header';
import Login from './componants/Login/Login';
import SignUp from './componants/SIgnUp/SignUp';
import Registered from './componants/Registered/Registered';
import Services from './componants/Home/Services/Services';
import Checkout from './componants/Checkout/Checkout';
import RequireAuth from './componants/RequireAuth/RequireAuth';
import Blogs from './componants/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/registered" element={
        <RequireAuth>
          <Registered></Registered>
        </RequireAuth>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
