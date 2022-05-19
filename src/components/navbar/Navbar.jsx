import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <span className="text-primary"
          ><i className="fas fa-rocket"></i> To Space </span>
          and Beyond
      </h1>
      <nav>
        <ul>
          <Link to= "/"><li>Home</li></Link>
          <Link to= "/about"><li>About</li></Link>
          <Link to= "/login"><li>Login</li></Link>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;

