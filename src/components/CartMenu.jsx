import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  cartTotal,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../store/shopSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
const CartMenu = ({ close }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [width, setWidth] = useState("before:w-0");
  const goal = 500;

  const dispatch = useDispatch();
  const subresult = useSelector((state) => state.shopSlice.cartTotal);

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
    setTotalPrice(subresult);
  }, [totalPrice, dispatch, subresult]);

  const cartItems = useSelector((state) => state.shopSlice.cart);

  return (
    <div className="px-4 flex flex-col justify-between h-full">
      <div className="h-1/8">
        <h1 className="p-4 text-2xl border-b-2 mb-3">YOUR CART</h1>
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
      <div className=" h-4/8 overflow-auto flex flex-col justify-start items-center h-full">
        {cartItems.map((product) => (
          <div key={product.id} className="overflow-auto flex mb-3">
            <img
              src={product.thumbnail}
              alt=""
              className="aspect-square w-1/4 object-cover"
            />
            <div className="w-3/4 px-3 py-2 space-y-4">
              <h1>{product.title}</h1>
              <div className="flex justify-around  items-center w-full">
                <div className="flex justify-between items-center rounded-md overflow-hidden border-2 border-gray-400">
                  <div
                    className="px-2 hover:bg-slate-200 transition-all cursor-pointer "
                    onClick={() => {
                      dispatch(increaseQuantity(product));
                      dispatch(cartTotal());
                    }}
                  >
                    +
                  </div>
                  <div className="px-2   ">{product.quantity}</div>
                  <div
                    className="px-2 hover:bg-slate-200 transition-all cursor-pointer "
                    onClick={
                      product.quantity <= 1
                        ? () => {
                            dispatch(removeProduct(product));
                            dispatch(cartTotal());
                          }
                        : () => {
                            dispatch(decreaseQuantity(product));
                            dispatch(cartTotal());
                          }
                    }
                  >
                    -
                  </div>
                </div>
                <RiDeleteBin6Line
                  className="text-xl text-red-600 cursor-pointer"
                  onClick={() => {
                    dispatch(removeProduct(product));
                    dispatch(cartTotal());
                  }}
                />
                <h1>${product.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* cart footer */}
      <div className="p-3 border-t h-1/8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">TOTAL</h1>
          <h1 className="font-bold">{`$ ${totalPrice} USD`}</h1>
        </div>
        <button className="w-full py-3 bg-gray-800 text-center text-white font-bold text-xl rounded-md tracking-[3px]">
          CHECK OUT
        </button>
        <Link
          to={"/cart"}
          className="underline text-center m-auto block"
          onClick={() => close(false)}
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
