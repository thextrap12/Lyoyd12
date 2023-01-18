import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Me.png";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jhon Lyoyd Alejo</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">
          Scroll Down!!!
        </a>
      </div>
    </header>
  );
};

export default Header;
