import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { useProducts } from "../Context/ProductContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { handleUpdate, toggleBar, sideBar } = useProducts();

  return (
    <div className="fixed z-10">
      <nav className=" w-screen md:w-[100%]  md:min-h-screen justify-between md:justify-start px-3 items-center flex flex-row  sm:flex-col bg-white ">
        <div>
          <Link to="/">
            <img
              className=" w-[200px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
            />
          </Link>
        </div>
        <div className="md:hidden block ">
          <span onClick={toggleBar} className="text-3xl text-[#ff2c2c]">
            <CgMenuRight />
          </span>
        </div>

        <div className="flex md:flex-col md:block hidden md:mt-5  md:gap-5">
          <Link to="/">
            <p
              className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
              onClick={() => handleUpdate("All Products")}
            >
              All Products
            </p>
          </Link>
          <Link to="/">
            <p
              className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
              onClick={() => handleUpdate("mobiles")}
            >
              Mobiles
            </p>
          </Link>
          <Link to="/">
            <p
              className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
              onClick={() => handleUpdate("electronics")}
            >
              Electronics
            </p>
          </Link>
          <Link to="/">
            <p
              className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
              onClick={() => handleUpdate("shoes")}
            >
              Shoes
            </p>
          </Link>
        </div>
      </nav>
      <div
        className={`flex flex-col ${
          sideBar ? "block" : "hidden"
        } bg-white bg-opacity-80 p-3  md:hidden block absolute top-[60px] right-0 z-10 md:mt-5  md:gap-5`}
      >
        <Link to="/">
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("All Products")}
          >
            All Products
          </p>
        </Link>
        <Link to="/">
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("mobiles")}
          >
            Mobiles
          </p>
        </Link>
        <Link to="/">
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("electronics")}
          >
            Electronics
          </p>
        </Link>
        <Link to="/">
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("shoes")}
          >
            Shoes
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
