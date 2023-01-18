import React from "react";
import "./Testemonials.css";
import AVTR1 from "../../assets/assets/avatar1.jpg";
import AVTR2 from "../../assets/assets/avatar2.jpg";
import AVTR3 from "../../assets/assets/avatar3.jpg";
import AVTR4 from "../../assets/assets/avatar4.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
const Testemonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testemonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review },index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}    />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testemonials;
