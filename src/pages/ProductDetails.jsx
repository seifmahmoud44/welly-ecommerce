import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { addProduct, addWish, cartTotal } from "../store/shopSlice";

import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.shopSlice.products.products.find((p) => p.id === +id)
  );
  const dispatch = useDispatch();
  const images = [
    {
      original: product.images[0],
      thumbnail: product.images[0],
    },
    {
      original: product.images[1],
      thumbnail: product.images[1],
    },
    {
      original: product.images[2],
      thumbnail: product.images[2],
    },
    {
      original: product.images[3],
      thumbnail: product.images[3],
    },
  ];

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex w-4/5 m-auto min-[767px]:space-x-5 my-5 max-[767px]:flex-col max-[767px]:space-y-5">
      <ImageGallery
        className="w-2/5 "
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
      <div className="w-3/5 max-[767px]:w-full  space-y-4">
        <h1 className=" font-bold">{product.title}</h1>
        <h1>
          <span className=" font-bold">Brand : </span>
          {product.brand}
        </h1>
        <h1>
          <span className=" font-bold">Category :</span>
          {product.category}
        </h1>
        <h1 className=" font-bold">${product.price}</h1>
        {/* +++--- */}
        <div className="flex justify-between w-fit items-center rounded-md overflow-hidden border-2 border-gray-400">
          <div
            className="px-2 hover:bg-slate-200 transition-all cursor-pointer "
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </div>
          <div className="px-2">
            {quantity <= 0 ? setQuantity(1) : quantity}
          </div>
          <div
            className="px-2 hover:bg-slate-200 transition-all cursor-pointer "
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </div>
        </div>
        <h1>
          <span className=" font-bold">Description :</span>
          <p>{product.description}</p>
        </h1>
        <div className="flex space-x-5 max-[767px]:justify-center max-[767px]:w-full">
          <button
            onClick={() => {
              dispatch(addProduct({ ...product, quantity }));
              dispatch(cartTotal());
            }}
            className="flex justify-center items-center bg-green-500 rounded-md py-2 px-4 text-white font-bold "
          >
            Add To Cart <BsCartPlus className="ml-4" />
          </button>
          <button
            onClick={() => dispatch(addWish(product))}
            className="flex justify-center items-center bg-red-600 rounded-md py-2 px-4 text-white font-bold "
          >
            Wish List <BsHeart className="ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
