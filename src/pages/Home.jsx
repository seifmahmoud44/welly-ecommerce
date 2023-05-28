import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/shopSlice";
import MainSlider from "../components/MainSlider";

import "../index";
import TopProducts from "../components/TopProducts";

const Home = () => {
  const products = useSelector((state) => state.shopSlice.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <MainSlider />
      <TopProducts products={products} />
    </div>
  );
};

export default Home;
