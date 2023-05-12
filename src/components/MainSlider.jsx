import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper";
import "../index.css";
import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";

const MainSlider = () => {
  return (
    <div>
      <Swiper
        fadeEffect={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={hero1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={hero2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
