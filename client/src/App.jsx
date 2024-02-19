import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/signin" element={<Signin/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route  path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
