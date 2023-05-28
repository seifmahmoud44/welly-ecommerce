import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper";
import "../index.css";
import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import { Link } from "react-router-dom";

const MainSlider = () => {
  return (
    <div className="relative">
      <Swiper
        fadeEffect={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide relative">
          <img src={hero1} alt="" />
          <div className=" absolute left-[10%] top-1/4 w-fit  h-2/4 z-10 max-[767px]:scale-50 max-[767px]:-left-[10%]">
            <div className="flex flex-col justify-center items-start h-full space-y-5">
              <h1 className="text-6xl font-bold">GET START</h1>
              <h3 className="text-2xl  font-light ">your favourite shopping</h3>
              <Link
                to="/shop"
                className="py-2 px-5 rounded-md bg-black text-white  text-sm"
              >
                SHOPING NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative">
          <img src={hero2} alt="" />
          <div className=" absolute left-[10%] top-1/4 w-fit  h-2/4 z-10 max-[767px]:scale-50 max-[767px]:-left-[10%]">
            <div className="flex flex-col justify-center items-start h-full space-y-5">
              <h1 className="text-6xl font-bold">GET START</h1>
              <h3 className="text-2xl  font-light ">your favourite shopping</h3>
              <Link
                to="/shop"
                className="py-2 px-5 rounded-md bg-black text-white  text-sm"
              >
                SHOPING NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
