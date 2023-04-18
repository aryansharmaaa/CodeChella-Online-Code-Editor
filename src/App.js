import React from "react";
import { Route, Routes} from 'react-router-dom'; // need to import 'react-router-dom' to use Route and Switch components
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Register";
import ForgotPassword from "./components/ForgotP";
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} /> {/* Use 'exact' prop to only match the root path */}
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
    </>
  );
}

export default App;
