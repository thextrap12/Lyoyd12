import React from "react";
import "./Services.css";
import { BsCheckLg } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Create user-friendly interfaces</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Build a backend for a website</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Maintain the backend <br/> for a website</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Creates a Web from <br/> a scratch</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Maintain the Website</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Do other services for<br/> Developing a <br/>website</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Minimum knowledge<br/> but can study to <br/>meet requirements</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Creates a content <br/> with minmum knowledge</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Willing to work with everyone</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
