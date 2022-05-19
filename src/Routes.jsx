import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Login from "./views/login/Login";

const RoutesComponent = (props) => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
=======
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
>>>>>>> ab2ce2cc730bc8e63e6dc9eb0ebf876279ad3278
    </Routes>
  );
};

export default RoutesComponent;
