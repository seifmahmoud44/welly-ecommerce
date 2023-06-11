import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { HiFilter } from "react-icons/hi";
import { BiSortUp } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addFilterd, getProducts, removeFilterd } from "../store/shopSlice";

import ProductCard from "../components/ProductCard";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import FilterMenu from "../components/FilterMenu";

const Shop = () => {
  const products = useSelector((state) => state.shopSlice.products.products);
  const fiterdProducts = useSelector(
    (state) => state.shopSlice.filterdProducts
  );

  const [brand, setBrand] = useState(true);
  const [priceMenu, setPriceMenu] = useState(true);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1749);
  const [sortProducts, setSortProducts] = useState("high");
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    if (openFilterMenu) {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }
  }, [dispatch, openFilterMenu]);

  return (
    <div className="relative ">
      {/* filter menu */}
      <div
        className={`absolute w-full h-full bg-white top-0 z-10 transition-all border-r-2 ${
          openFilterMenu ? "left-0" : "-left-[100%]"
        }`}
      >
        <FilterMenu
          menu={setOpenFilterMenu}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      <h1 className="text-center font-body font-bold text-4xl py-5">SHOP</h1>
      <div className="flex w-4/5 m-auto">
        {/* filter side */}
        <div className="w-1/5 max-[991px]:hidden">
          <h1 className="font-bold text-lg">Filter</h1>
          {/* brand filter */}
          <div className=" overflow-hidden py-2 pr-4  items-center w-full">
            <div className="flex" onClick={() => setBrand(!brand)}>
              <h1 className="flex-1 font-bold cursor-pointer">Brand</h1>
              <IoIosArrowUp
                className={
                  brand
                    ? "rotate-180 transition-all"
                    : "rotate-0 transition-all"
                }
              />
            </div>

            <div
              className={
                brand
                  ? " transition-all  origin-top ml-3 mt-4"
                  : "hidden transition-all  origin-top ml-3 mt-4 "
              }
            >
              <div className="flex items-center mb-4">
                <input
                  id="smartphones1"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "smartphones"
                            )
                          )
                        )
                      : dispatch(removeFilterd("smartphones"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  smartphones
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="smartphones2"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "laptops"
                            )
                          )
                        )
                      : dispatch(removeFilterd("laptops"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  laptops
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="smartphones3"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "fragrances"
                            )
                          )
                        )
                      : dispatch(removeFilterd("fragrances"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  fragrances
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="smartphones3"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "skincare"
                            )
                          )
                        )
                      : dispatch(removeFilterd("skincare"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  skincare
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="smartphones3"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "groceries"
                            )
                          )
                        )
                      : dispatch(removeFilterd("groceries"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  groceries
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="smartphones3"
                  type="checkbox"
                  name="category"
                  onClick={(e) =>
                    e.target.checked
                      ? dispatch(
                          addFilterd(
                            products.filter(
                              (item) => item.category === "home-decoration"
                            )
                          )
                        )
                      : dispatch(removeFilterd("home-decoration"))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="smartphones3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  home-decoration
                </label>
              </div>
            </div>
          </div>
          {/* price filter */}
          <div className=" overflow-hidden py-2 pr-4  items-center w-full">
            <div>
              <div className="flex " onClick={() => setPriceMenu(!priceMenu)}>
                <h1 className="flex-1 font-bold cursor-pointer">Price</h1>
                <IoIosArrowUp
                  className={
                    priceMenu
                      ? "rotate-180 transition-all"
                      : "rotate-0 transition-all"
                  }
                />
              </div>
              {priceMenu && (
                <div className="flex justify-around mt-4">
                  <input
                    className="w-1/3 border border-black p-1 rounded-md pl-2"
                    type="number"
                    placeholder="from"
                    min="1"
                    max="1749"
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                    }}
                    value={minPrice}
                  />
                  <input
                    className="w-1/3 border border-black p-1 rounded-md pl-2"
                    type="number"
                    placeholder="to"
                    min="1"
                    max="1749"
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                    }}
                    value={maxPrice}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* product side */}
        <div className="w-4/5 max-[991px]:w-full">
          {/* sort button */}
          <div className="flex justify-end max-[991px]:justify-between">
            <Button
              onClick={() => setOpenFilterMenu(true)}
              className="min-[991px]:hidden flex  justify-center items-center p-2 px-3 text-black"
            >
              Filter
              <HiFilter className="ml-4" />
            </Button>
            <Menu className="">
              <MenuHandler>
                <Button className="flex  justify-center items-center p-2 px-3 text-black">
                  {sortProducts === "high" ? "Higher Price" : "Lower Price"}{" "}
                  <BiSortUp className="ml-4" />
                </Button>
              </MenuHandler>
              <MenuList className=" space-y-1  p-0 py-2">
                <MenuItem
                  onClick={() => setSortProducts("high")}
                  className={`hover:bg-green-300 p-1 px-2 rounded-none ${
                    sortProducts === "high" && "bg-green-300"
                  }`}
                >
                  Higher Price
                </MenuItem>
                <MenuItem
                  onClick={() => setSortProducts("low")}
                  className={`hover:bg-green-300 p-1 px-2 rounded-none ${
                    sortProducts === "low" && "bg-green-300"
                  }`}
                >
                  Lower Price
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className=" grid grid-cols-4 space-x-4 space-y-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {products && fiterdProducts.length === 0
              ? products

                  .filter(
                    (item) => item.price <= maxPrice && item.price >= minPrice
                  )
                  .sort((a, b) =>
                    sortProducts === "high"
                      ? b.price - a.price
                      : a.price - b.price
                  )
                  .map((item) => {
                    return (
                      <div key={item.id}>{<ProductCard product={item} />}</div>
                    );
                  })
              : fiterdProducts
                  .filter(
                    (item) => item.price <= maxPrice && item.price >= minPrice
                  )
                  .sort((a, b) =>
                    sortProducts === "high"
                      ? b.price - a.price
                      : a.price - b.price
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        {<ProductCard product={product} />}
                      </div>
                    );
                  })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
