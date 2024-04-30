import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { ProductsArray } from "../ProductData/Products";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";

function Home() {
  const [productData, setProductData] = useState([...ProductsArray]);
  const [filteredData, setFilteredData] = useState([...productData]);

  const { category, handleUpdate } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    if (category === "All Products") {
      setFilteredData([...productData]);
    } else {
      setFilteredData(productData.filter((data) => data.category === category));
    }
  }, [category, productData]);

  function OpenProduct(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className="flex sm:flex-row w-screen md:w-[100%] flex-col">
      <div className="relative w-full">
        <div className="grid   overflow-auto  sm:py-10 sm:grid-cols-2 grid-cols-2 gap-x-2 lg:grid-cols-3 md:h-screen   md:w-[100%] w-[100%] md:gap-y-16 gap-y-5 gap-x-0 pt-32 pb-16 px-5 bg-[#cdd0d7] justify-items-center items-center">
          {filteredData.map((item, index) => (
            <div
              onClick={() => OpenProduct(item.id)}
              key={index}
              className="md:w-[220px] border-[2px] hover:border-[#ff2c2c] border-transparent cursor-pointer md:min-h-[280px] bg-white rounded-xl overflow-hidden shadow-md shadow-black"
            >
              <div className="p-2 ">
                <img
                  src={item.img}
                  className="sm:w-full rounded-xl object-contain"
                  alt={item.itemName}
                />
              </div>
              <div className="px-2 py-3 bg-[#d5dbe9]">
                <p className="md:text-md text-sm font-semibold">
                  {item.itemName}
                </p>
                <p className="">
                  <span>Price : ₹</span>
                  <span>{item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
