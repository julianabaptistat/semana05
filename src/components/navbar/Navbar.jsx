import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navbar" class="navbar">
      <h1 class="logo">
        <span class="text-primary"
          ><i class="fas fa-rocket"></i> To Space </span
        >and Beyond
      </h1>
      <nav>
        <ul>
          <Link to= "/home"><li>Home</li></Link>
          <Link to= "/about"><li>About</li></Link>
          <Link to= "/login"><li>Login</li></Link>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;
