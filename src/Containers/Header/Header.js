import React from "react";


const Header = () => {
  return (
    <div className="ui fixed pointing menu header " style={{padding:"6px 30px"}}>
        <a className="item active">Shopping</a>
        <div className="right menu">
          <div className="ui vertical animated button">
            <div className="hidden content">Shop</div>
            <div className="visible content">
              <i className="shop icon"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
