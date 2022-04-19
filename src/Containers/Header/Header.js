import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import '../Header/Header.css'

const Header = () => {
  return (
    <div className="ui fixed pointing menu header " style={{padding:"6px 30px"}}>
        <Link to='/' >
            <a className="item">
              <img className="logoImages" src={logo} alt="images logo" />
            </a>
        </Link>
        <div className="right menu headersSection">
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
