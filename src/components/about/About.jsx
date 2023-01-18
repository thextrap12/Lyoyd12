import React from "react";
import "./About.css";
import ME from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>6months Working</small>
            </article>
            <p>My name is Jhon Lyoyd Alejo. A Software Engineer in Cognizant
            Philippines.</p>
            <a href="#contacts" className="btn btn-primary center-btn">Let's Talk!!!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
