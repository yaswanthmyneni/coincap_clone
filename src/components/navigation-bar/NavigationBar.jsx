import React, { Component } from "react";
import {
  MdSettings,
  MdSearch,
  GiHamburgerMenu,
} from "../../assets/icons/icons";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <header className="header-position">
        <div className="header-container content-width">
          <div className="links-container">
            <p>Coins</p>
            <p>Exchange</p>
            <p>Swap</p>
          </div>
          <img
            className="logo"
            src="https://coincap.io/static/logos/black.svg"
            alt="logo"
          />
          <div className="links-container">
            <p>USD</p>
            <p>English</p>
            <MdSearch />
            <MdSettings />
          </div>
          <GiHamburgerMenu className="hamburger-icon" />
        </div>
      </header>
    );
  }
}

export { NavigationBar };
