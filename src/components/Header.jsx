import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="navbar">
        <h2 className="navHeader">PORTFOLIO</h2>
      </div>
    );
  }
}

export default Header;
