import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
