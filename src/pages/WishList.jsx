import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, cartTotal, removeWish } from "../store/shopSlice";
import { BsCartPlus } from "react-icons/bs";

const WishList = () => {
  const wishList = useSelector((state) => state.shopSlice.wishList);
  const dispatch = useDispatch();
  return (
    <div className="vh-cart flex items-center flex-col h-96 mt-10">
      <h1 className="text-center font-body font-bold text-4xl my-5">
        YOUR WISH LIST
      </h1>

      {wishList.length === 0 ? (
        <div className=" text-center ">
          <h1>Your Wish List Is Empty</h1>
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
          </div>
          <div className="w-4/5 m-auto max-[991px]:w-full max-[991px]:px-3">
            {wishList.map((product) => {
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
                        <RiDeleteBin6Line
                          className="text-xl text-red-600 cursor-pointer"
                          onClick={() => {
                            dispatch(removeWish(product));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addProduct({ ...product, quantity: 1 }));
                      dispatch(cartTotal());
                    }}
                    className="flex justify-center items-center bg-green-500 rounded-md py-2 px-4 text-white font-bold "
                  >
                    Add To Cart <BsCartPlus className="ml-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;
