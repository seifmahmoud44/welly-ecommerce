import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination } from "swiper";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const TopProducts = ({ products }) => {
  return (
    <div className="m-auto w-5/6">
      <h1 className="text-center my-7 text-5xl font-body font-bold max-[767px]:text-4xl">
        TOP PRODUCTS
      </h1>
      <Swiper
        modules={[FreeMode, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        grabCursor={true}
        breakpoints={{
          767: { slidesPerView: 1, spaceBetween: 40 },
          991: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {products &&
          products
            .filter((product) => product.category === "smartphones")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
      </Swiper>
      <Link
        to={"/shop"}
        className=" py-2 bg-gray-800 text-center px-5 text-white font-bold text-xl rounded-md my-6 block w-fit m-auto "
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default TopProducts;
