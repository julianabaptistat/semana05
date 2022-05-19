import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD

const Navbar = (props) => {
  return (
    <div className="navbar">
=======
export default Navbar;

const Navbar = (props) => {
  return (
    <div id="navbar" class="navbar">
>>>>>>> ab2ce2cc730bc8e63e6dc9eb0ebf876279ad3278
      <h1 className="logo">
        <span className="text-primary"
          ><i className="fas fa-rocket"></i> To Space </span>
          and Beyond
      </h1>
      <nav>
        <ul>
<<<<<<< HEAD
          <Link to= "/"><li>Home</li></Link>
=======
          <Link to= "/home"><li>Home</li></Link>
>>>>>>> ab2ce2cc730bc8e63e6dc9eb0ebf876279ad3278
          <Link to= "/about"><li>About</li></Link>
          <Link to= "/login"><li>Login</li></Link>
        </ul>
      </nav>
    </div>
  )
};

<<<<<<< HEAD
export default Navbar;
=======
>>>>>>> ab2ce2cc730bc8e63e6dc9eb0ebf876279ad3278

