import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterd, removeFilterd } from "../store/shopSlice";
import { IoIosArrowUp } from "react-icons/io";

const FilterMenu = ({ menu, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const products = useSelector((state) => state.shopSlice.products.products);

  const [brand, setBrand] = useState(true);
  const [priceMenu, setPriceMenu] = useState(true);

  const dispatch = useDispatch();
  return (
    <div className="p-5 relative">
      <h1 className="text-center font-bold text-2xl">Filter</h1>
      {/* brand filter */}
      <div
        className="flex justify-center m-auto "
        onClick={() => setBrand(!brand)}
      >
        <h1 className="flex-1 font-bold cursor-pointer">Brand</h1>
        <IoIosArrowUp
          className={
            brand
              ? "m-auto rotate-180 transition-all "
              : "m-auto  rotate-0 transition-all"
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
                      products.filter((item) => item.category === "smartphones")
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
                      products.filter((item) => item.category === "laptops")
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
                      products.filter((item) => item.category === "fragrances")
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
                      products.filter((item) => item.category === "skincare")
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
                      products.filter((item) => item.category === "groceries")
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
      <div className="  w-full mt-5">
        <button
          className="block py-1 px-9 text-lg font-bold rounded-md m-auto bg-red-500"
          onClick={() => menu(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
