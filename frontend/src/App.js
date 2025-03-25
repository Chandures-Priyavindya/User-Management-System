import React from "react";
import './App.css';
import './index.css';
import Home from "./Components/Home/Home";

import { Route, Routes } from "react-router";
import Adduser from "./Components/Add User/Adduser";
import Userdetails from "./Components/User Details/Userdetails";

function App() {
  return (
    <div>
      
      
      <React.Fragment>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/mainhome" element={<Home/>}/>
          <Route path="/adduser" element={<Adduser/>}/>
          <Route path="/userdetails" element={<Userdetails/>}/>
        </Routes>
      </React.Fragment>
      
      
    
    </div>
  );
}

export default App
