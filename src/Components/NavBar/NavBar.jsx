import React from 'react';
import "./NavBar.css";
import { logo } from '../../assets';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About me</a>
        </li>
        
        <li className="navbar-logo">
          <a href="#">
            <img src={logo} alt="Logo" className="logo-img"/>
          </a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
