import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/lyoyd12" target='_blank'>
          <AiFillFacebook />
        </a>
        <a href="https://twitter.com/JLyoyd" target='_blank'>
          <IoLogoTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCsVFoYCULW5J1RSgfRGS_-Q" target='_blank'>
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Lyoyd Services. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
