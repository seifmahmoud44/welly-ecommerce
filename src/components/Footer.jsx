import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openShop, setOpenShop] = useState(false);
  const [openQuick, setOpenQuick] = useState(false);
  return (
    <div className="w-full py-10 bg-gradient-to-r from-dark-green via-50% via-light-green to-dark-green">
      <div className="w-4/5 bg-transparent m-auto space-x-3 flex max-[991px]:flex-col max-[991px]:space-y-4 ">
        {/* first col */}
        <div className="w-1/4 p-3 flex flex-col justify-center max-[991px]:items-center max-[991px]:w-full">
          <h1 className="font-logo text-5xl ">welly</h1>
          <div className="flex justify-start items-center space-x-3 text-2xl mt-5">
            <AiOutlineTwitter className="hover:scale-105 transition-all cursor-pointer" />
            <FaFacebookF className="hover:scale-105 transition-all cursor-pointer" />
            <ImPinterest className="hover:scale-105 transition-all cursor-pointer" />
            <FaInstagram className="hover:scale-105 transition-all cursor-pointer" />
          </div>
        </div>
        {/* second col */}
        <div className="w-1/4 p-3 max-[991px]:hidden ">
          <h1 className="text-xl font-bold ">SHOP BY</h1>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/shop">
            Shop All
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/about">
            About Us
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/faqs">
            Faqs
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/contact">
            Contacts
          </Link>
        </div>
        {/* third col */}
        <div className="w-1/4 p-3 max-[991px]:hidden">
          <h1 className="text-xl font-bold ">QUICK LINKS</h1>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/">
            Search
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/">
            Privacy Policy
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/">
            Refund Policy
          </Link>
          <Link className="block mt-3 hover:ml-2 transition-all" to="/">
            Terms of Service
          </Link>
        </div>
        {/* fourth col */}
        <div className="fix w-1/4 p-3 flex flex-col justify-center max-[991px]:w-full max-[991px]:items-center ml-0">
          <h1 className=" text-xl font-bold">Get The Newsletter</h1>
          <div className="flex justify-start items-center  text-lg mt-5 max-[991px]:mt-2 max-[991px]:space-x-0">
            <div className="w-full">
              <input
                type="email"
                className="w-4/7 p-1 px-2 block rounded-lg max-[991px]:w-full "
                placeholder="Email Address"
              />
              <button className="py-1 px-5 text-center bg-white rounded-lg block  mt-3 text-base max-[991px]:mx-auto">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        {/* responsive sections */}
        <div>
          <div
            className=" overflow-hidden p-2  items-center hidden max-[991px]:flex w-4/5 m-auto  "
            onClick={() => setOpenShop(!openShop)}
          >
            <h1 className="flex-1 font-bold cursor-pointer">SHOP BY</h1>
            <IoIosArrowUp
              className={
                openShop
                  ? "rotate-180 transition-all"
                  : "rotate-0 transition-all"
              }
            />
          </div>
          <div
            className={
              openShop
                ? "scale-y-100 transition-all origin-top w-4/5 m-auto"
                : "scale-y-0 transition-all origin-top w-4/5 m-auto hidden"
            }
          >
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Search
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Privacy Policy
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Refund Policy
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Terms of Service
            </Link>
          </div>
        </div>
        <div>
          <div
            className=" overflow-hidden p-2  items-center hidden max-[991px]:flex w-4/5 m-auto  "
            onClick={() => setOpenQuick(!openQuick)}
          >
            <h1 className="flex-1 font-bold cursor-pointer mb-4">
              QUICK LINKS
            </h1>
            <IoIosArrowUp
              className={
                openQuick
                  ? "rotate-180 transition-all"
                  : "rotate-0 transition-all "
              }
            />
          </div>
          <div
            className={
              openQuick
                ? "scale-y-100 transition-all origin-top w-4/5 m-auto mb-4"
                : "scale-y-0 transition-all origin-top w-4/5 m-auto hidden"
            }
          >
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Search
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Privacy Policy
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Refund Policy
            </Link>
            <Link className="block mt-3 hover:ml-2 transition-all" to="/">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
