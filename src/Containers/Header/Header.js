import React from "react";
import logo from '../assets/img/logo.svg';
import '../Header/Header.css'

const Header = () => {
  return (
    <div className="ui fixed pointing menu header " style={{padding:"6px 30px"}}>
        <a className="item">
          <img className="logoImages" src={logo} alt="images logo" />
        </a>
        <div className="right menu">
          <div className="ui vertical animated button">
            <div className=" content">
              <i className="shop icon"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
