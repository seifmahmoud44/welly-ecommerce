import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartMenu = () => {
  const [totalPrice, setTotalPrice] = useState(499);
  const [width, setWidth] = useState("before:w-0");
  const goal = 500;
  useEffect(() => {
    if (totalPrice >= goal / 4) {
      setWidth("before:w-1/4");
    }
    if (totalPrice >= goal / 2) {
      setWidth("before:w-3/4");
    }
    if (totalPrice >= goal / 1) {
      setWidth("before:w-full");
    }
  }, [totalPrice]);

  return (
    <div className="h-full px-4 flex flex-col justify-between ">
      <h1 className="p-4 text-2xl border-b-2 mb-3">YOUR CART</h1>
      <div className="">
        <div
          className={` relative overflow-hidden rounded-full h-2 w-full bg-slate-300 ${width} before:h-full before:z-10 before:absolute before:top-0 before:left-0 before:bg-dark-green `}
        ></div>
        <div className="border-b-2 mb-3 pb-3 flex  justify-center items-center space-x-3 mt-3">
          <FaShippingFast className="text-5xl" />
          <h1 className="text-center">
            Free Shipping!
            <br /> <span className="font-bold">$500</span>
          </h1>
        </div>
      </div>
      {/* cart items */}
      <div className=" flex-1">hi</div>
      {/* cart footer */}
      <div className="p-3 border-t">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">TOTAL</h1>
          <h1 className="font-bold">{`$ ${totalPrice} USD`}</h1>
        </div>
        <button className="w-full py-3 bg-gray-800 text-center text-white font-bold text-xl rounded-md tracking-[3px]">
          CHECK OUT
        </button>
        <Link to={"/cart"} className="underline text-center m-auto block">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
