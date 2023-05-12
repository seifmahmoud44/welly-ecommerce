import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/shopSlice";
import MainSlider from "../components/MainSlider";

import "../index";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <MainSlider />
    </div>
  );
};

export default Home;
