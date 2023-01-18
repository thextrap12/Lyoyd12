import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
const Social = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jhon-lyoyd-alejo-54351b164/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/thextrap12" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/lyoyd12" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default Social;
