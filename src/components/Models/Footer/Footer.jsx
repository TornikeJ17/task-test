import React from "react";
import "./Footer.scss";
import spaceShip from "../images/spaceShip.svg";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterBlock">
        <img src={spaceShip} alt="spaceShip" />
        <p className="FooterText">Exciting space adventure!</p>
      </div>
    </div>
  );
};

export default Footer;
