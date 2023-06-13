import React from "react";
import founder from "../images/founder.jpg";
const About = () => {
  return (
    <div className="w-4/5 m-auto max-[991px]:w-full flex flex-col text-center space-y-7 my-7">
      <img src={founder} alt="" className="w-3/5 m-auto" />
      <h1>
        Welcome to our ecommerce website! We are a team of passionate and
        experienced professionals who are dedicated to providing our customers
        with the best possible shopping experience. We offer a wide variety of
        products at competitive prices, and we are always working to add new and
        innovative products to our selection. We understand that shopping online
        can be daunting, so we have made it our mission to make the process as
        easy and convenient as possible. We offer a variety of payment options,
        free shipping on orders over $50, and a 100% satisfaction guarantee. We
        are committed to providing our customers with the best possible customer
        service. Our team of customer service representatives is available 24/7
        to answer your questions and help you with any problems you may have. We
        hope you enjoy shopping with us!
      </h1>
    </div>
  );
};

export default About;
