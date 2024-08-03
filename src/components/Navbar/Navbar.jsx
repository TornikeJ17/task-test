import React, { useState } from "react";
import "./Navbar.scss";
import { svg } from "../SVG/svgFiles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="MenuContainer">
      <div className="MenuLogo">
        {svg[0].icon}
        {svg[1].icon}
      </div>
      <div className={`MenuLinks ${isOpen ? "open" : ""}`}>
        <a href="/" className="NavLink">
          Home
        </a>
        <a href="/products" className="NavLink">
          Products
        </a>
        <a href="/cart" className="NavLink">
          {svg[3].icon}
        </a>
      </div>
      <div className="MenuLinksMobile" onClick={toggleMenu}>
        {svg[2].icon}
      </div>
    </div>
  );
};

export default Navbar;
