import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  cartTotal,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../store/shopSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.shopSlice.cart);
  const totalCart = useSelector((state) => state.shopSlice.cartTotal);
  const dispatch = useDispatch();

  return (
    <div className="vh-cart">
      <h1 className="text-center font-body font-bold text-4xl my-5">
        YOUR CART
      </h1>

      {cartProducts.length === 0 ? (
        <div className="h-full text-center ">
          <h1>Your Cart Is Empty</h1>
          <Link
            to={"/shop"}
            className="m-auto px-4 my-4 w-fit block py-3 bg-gray-800 text-center text-white font-bold text-xl rounded-md tracking-[3px]"
          >
            Back To Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center text-lg font-body font-bold w-4/5 m-auto max-[767px]:w-full max-[767px]:px-3">
            <h1 className="">PRODUCT</h1>
            <h1 className="">QUANTITY</h1>
            <h1 className="">TOTAL</h1>
          </div>
          <div className="w-4/5 m-auto max-[991px]:w-full max-[991px]:px-3">
            {cartProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex justify-between items-center w-full my-3"
                >
                  <img
                    src={product.thumbnail}
                    className="aspect-[1/1] w-[150px] object-cover "
                    alt=""
                  />
                  <div className="space-y-3 w-2/5 max-[767px]:w-1/5 flex justify-between items-center max-[767px]:flex-col max-[767px]:items-start">
                    <div>
                      <h1>{product.title}</h1>
                      <p>${product.price}</p>
                    </div>

                    <div>
                      <div className="flex justify-around  items-center w-full space-x-4 ">
                        <div className="flex justify-between items-center rounded-md overflow-hidden border-2 border-gray-400 ">
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
                      </div>
                    </div>
                  </div>
                  <div className="">${product.price * product.quantity}</div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center space-x-5 my-4 font-bold text-2xl max-[767px]:justify-between px-3">
            <h1>Sub Total :</h1>
            <h1 className="font-bold">${totalCart}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
