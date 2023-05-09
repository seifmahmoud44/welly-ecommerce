import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/shopSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
