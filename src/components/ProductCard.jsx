import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addProduct,
  addSelectedProduct,
  addWish,
  cartTotal,
} from "../store/shopSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productHandler = () => {
    dispatch(addSelectedProduct(product.id));
    navigate(`/product/${product.id}`);
  };
  return (
    <div className=" mb-9 overflow-hidden relative group">
      <img
        onClick={productHandler}
        className="aspect-[3/4]  w-full contain cursor-pointer"
        src={product.thumbnail}
        alt=""
      />
      <h1>{product.title}</h1>
      <div className="flex justify-center items-center space-x-5">
        <h1 className="font-bold">$ {product.price}</h1>
      </div>
      <div className="flex flex-col justify-center items-center absolute top-0 -right-20 space-y-4 p-2 group-hover:right-0 transition-all">
        <button
          onClick={() => {
            dispatch(addProduct({ ...product, quantity: 1 }));
            dispatch(cartTotal());
          }}
          className="  p-1.5  rounded-full border-black border-2 hover:scale-110   transition-all "
        >
          <BsCartPlus className=" text-2xl " />
        </button>
        <button
          onClick={() => dispatch(addWish(product))}
          className=" p-1.5 rounded-full border-black border-2 hover:scale-110   transition-all  "
        >
          <BsHeart className=" text-2xl  transition-all " />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
