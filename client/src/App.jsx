import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Slider from "./components/Slider.jsx";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Slider />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
