import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import HamburgerMenu from "../Assests/menuIcon.svg";
import NavData from "../Datas/Data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={NavData.logo} alt="" />
          </Link>
          <div className="nav-btn">
            <button type="button">
              <img src={HamburgerMenu} alt="" />
            </button>
          </div>
        </div>
        <div className="links-container">
          <ul className="nav-links">
            {NavData.navLinks.map((item: any, id: number) => {
              return (
                <li key={id}>
                  <Link to={item.url}>{item.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
