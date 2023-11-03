import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route exact path="/about" element={<About></About>}></Route>
        <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
