import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import "../index";
import CartMenu from "./CartMenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.shopSlice.cart);
  const wish = useSelector((state) => state.shopSlice.wishList);
  const navClasses =
    "max-[991px]:hidden  transition-all font-bold relative  before:absolute before:h-1 before:w-full before:bg-green-500 before:bottom-0 before:-left-16 overflow-hidden hover:before:-left-0 before:transition-all";
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const henderMenu = () => {
    setOpenCart(false);
    setOpenNav(false);
    setOpenSearch(false);
  };
  const close = (close) => {
    if (close === false) {
      setOpenCart(false);
    }
  };
  useEffect(() => {
    //stop scrolling
    if (openCart || openSearch || openNav) {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }
  }, [openCart, openSearch, openNav]);
  return (
    <>
      {openCart || openNav || openSearch ? (
        <div
          onClick={henderMenu}
          className="absolute top-0 right-0 w-full h-full bg-black z-10 opacity-30 transition-all"
        ></div>
      ) : null}
      <div className="w-full font-body relative shadow-md">
        <div className={openSearch ? "search open" : "search"}>
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg border p-2 border-black"
          />
          <AiOutlineClose
            onClick={() => setOpenSearch(false)}
            className="cursor-pointer hover:scale-125 transition-all"
          />
        </div>
        <div className="w-4/5 h-20 m-auto max-[767px]:w-full max-[767px]:pr-5 flex justify-between items-center space-x-11">
          {/*left side*/}
          <div className="flex justify-between items-center space-x-3 ml-0">
            <BsSearch
              onClick={() => setOpenSearch(true)}
              className="cursor-pointer text-xl max-[991px]:hidden hover:scale-125 transition-all"
            />
            <div className=" max-[991px]:hidden flex justify-center items-center relative">
              <div className="w-4 h-4 absolute text-sm p-2.5 -top-3 -right-3 bg-black  text-white rounded-full z-0 flex justify-center items-center">
                <span className="">{wish.length}</span>
              </div>
              <BsHeart className="cursor-pointer hover:scale-125 transition-all text-xl relative z-1" />
            </div>
            {/* menu */}
            <div
              className="hidden max-[991px]:block text-xl cursor-pointer hover:scale-125 transition-all"
              onClick={() => setOpenNav(true)}
            >
              <HiMenuAlt2 />
            </div>
            <div className={openNav ? "nav open" : "nav"}>
              <AiOutlineClose
                className="absolute top-4 right-4 text-xl hover:scale-125 transition-all cursor-pointer "
                onClick={() => setOpenNav(false)}
              />
              <div className="menu w-full h-full pt-10">
                <NavLink
                  className="block p-3 hover:bg-gray-200 hover:pl-6 transition-all"
                  to={"/"}
                  onClick={() => setOpenNav(false)}
                >
                  HOME
                </NavLink>

                <NavLink
                  className="block p-3 hover:bg-gray-200 hover:pl-6 transition-all"
                  to={"shop"}
                  onClick={() => setOpenNav(false)}
                >
                  SHOP
                </NavLink>
                <NavLink
                  className="block p-3 hover:bg-gray-200 hover:pl-6 transition-all"
                  to={"/about"}
                  onClick={() => setOpenNav(false)}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  className="block p-3 hover:bg-gray-200 hover:pl-6 transition-all"
                  to={"/contact"}
                  onClick={() => setOpenNav(false)}
                >
                  CONTACT
                </NavLink>
                <NavLink
                  className="block p-3 hover:bg-gray-200 hover:pl-6 transition-all"
                  to={"faqs"}
                  onClick={() => setOpenNav(false)}
                >
                  FAQS
                </NavLink>
                <NavLink to={"/wishlist"}>
                  <div className="p-3 flex space-x-6 items-center  hover:bg-gray-200 cursor-pointer">
                    <h1>Wish List</h1>
                    <div className="  flex justify-center items-center relative">
                      <div className="w-4 h-4 absolute text-sm p-2.5 -top-3 -right-3 bg-black  text-white rounded-full z-0 flex justify-center items-center">
                        <span className="">{wish.length}</span>
                      </div>
                      <BsHeart className="cursor-pointer hover:scale-125 transition-all text-xl relative z-1" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          {/*md side*/}
          <div className="flex justify-between max-[991px]:justify-center items-center w-10/12">
            <NavLink className={navClasses} to={"/faqs"}>
              FAQS
            </NavLink>
            <NavLink className={navClasses} to={"/shop"}>
              SHOP
            </NavLink>

            <h1
              className="font-logo text-4xl  cursor-pointer max-[991px]:translate-x-5 bg-clip-text bg-gradient-to-r from-light-green to-dark-green text-transparent h-[53px] "
              onClick={() => navigate("/")}
            >
              welly
            </h1>

            <NavLink className={navClasses} to={"/about"}>
              ABOUT
            </NavLink>
            <NavLink className={navClasses} to={"/contact"}>
              CONTACT
            </NavLink>
          </div>
          {/*right side*/}
          <div className="flex justify-between items-center space-x-3">
            <NavLink className={"max-[991px]:hidden"} to={"/signin"}>
              <FaRegUserCircle className="cursor-pointer text-xl hover:scale-125 transition-all" />
            </NavLink>
            <BsSearch
              onClick={() => setOpenSearch(true)}
              className="cursor-pointer text-xl max-[991px]:block hover:scale-125 transition-all min-[992px]:hidden"
            />

            <div className="flex justify-center items-center relative">
              <div className="w-4 h-4 absolute text-sm p-2.5 -top-3 -right-3 bg-black  text-white rounded-full z-0 flex justify-center items-center">
                <span className="">{cart.length}</span>
              </div>
              <HiOutlineShoppingCart
                className=" cursor-pointer text-xl relative z-1 hover:scale-125 transition-all"
                onClick={() => setOpenCart(true)}
              />
            </div>
            {/* cart menu */}
            <div className={openCart ? "cart open" : "cart"}>
              <AiOutlineClose
                className="absolute top-4 right-4 text-xl hover:scale-125 transition-all cursor-pointer "
                onClick={() => setOpenCart(false)}
              />
              <CartMenu close={close} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
