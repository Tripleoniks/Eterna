import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="cont">
        <div className="left">
          <input type="text" name="" id="" />
        </div>
        <div className="right">
          <i className="fas fa-user"></i>

          <div className="user-name">
            <span>
              Tunde Opawoye <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <div className="notify">
            <i className="fas fa-bell"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
