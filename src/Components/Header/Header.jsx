import React from 'react';
import "./Header.css"; 
import NavBar from '../NavBar/NavBar';
import { arrow } from '../../assets';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <NavBar />
        <div className ="cta">
        
          <h1 className ="discover">
            Discover <span class="nathalias">Nathalia's</span> <br /> Portfolio
          </h1>
      
          <p className ="introduction">Hello! I'm Nathalia, a computer science student<br />
            passionate about UI/UX design, full stack development,<br />
            and creative pursuits like designing and video editing.<br />
            Explore how I blend aesthetic design with technical<br />
            precision to craft engaging digital experiences.<br /><br />
          </p>

          <button className="connect-btn">Let's Connect 
            <img src={arrow} alt="arrow" className="arrow"/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
