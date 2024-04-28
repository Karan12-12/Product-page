import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

function Home() {
  const [sideBar, setSideBaar] = useState(false);

  const [productData, setProductData] = useState([
    {
      category: "mobiles",
      itemName: "Samsung Galaxy A32",
      price: "11999",
      img: "https://images-cdn.ubuy.co.in/6359f583cbde3e1ab24af1a8-samsung-galaxy-a32-5g-cricket-only.jpg",
    },
    {
      category: "shoes",
      itemName: "Fancy Sneaker ",
      price: "1299",
      img: "https://i.pinimg.com/736x/d2/bd/12/d2bd12dbfdd33b695047bcad635e168c.jpg",
    },
    {
      category: "mobiles",
      itemName: "Vivo V23 5G",
      price: "9999",
      img: "https://asia-exshopstatic-vivofs.vivo.com/KuCZNhz3cVxH4yrP/my/1666159195292/b1210093814e347e708dc809f8e4aa5e.png_w860-h860.webp",
    },
    {
      category: "electronics",
      itemName: "LG LED TV (32 inches) ",
      price: "13999",
      img: "https://images-na.ssl-images-amazon.com/images/I/61IDNYMwNbL._AC_SX355_.jpg",
    },
    {
      category: "electronics",
      itemName: "LG Fridge ",
      price: "10899",
      img: "https://images-cdn.ubuy.co.in/65979c2cb910f53d2e6e34ae-3-5cu-ft-compact-refrigerator-mini.jpg",
    },
    {
      category: "shoes",
      itemName: "Casual Sneakers  ",
      price: "899",
      img: "https://rukminim2.flixcart.com/image/850/1000/l5cslu80/shoe/e/a/p/8-line-shoes-8-fashion-black-original-imaggfjgtxrnubxk.jpeg?q=90&crop=false",
    },
    {
      category: "mobiles",
      itemName: "Redmi Note 11 pro+",
      price: "6999",
      img: "https://m.media-amazon.com/images/I/717DeSsnXpL.jpg",
    },
    {
      category: "electronics",
      itemName: "HP Pavilion 14 ",
      price: "55999",
      img: "https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg",
    },

    {
      category: "shoes",
      itemName: "Trend Casual Shoes ",
      price: "799",
      img: "https://lzd-img-global.slatic.net/g/p/181669ccfad6d3a49fd00557e9674d9d.jpg_360x360q75.jpg_.webp",
    },
    {
      category: "electronics",
      itemName: "Bajaj Personal Cooler ",
      price: "10999",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674276522/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/267356_dhs7mm.png",
    },
    {
      category: "shoes",
      itemName: "Next IIN Sneaker ",
      price: "1199",
      img: "https://5.imimg.com/data5/VH/HO/KA/SELLER-84868583/men-sneakers-shoes-500x500.jpeg",
    },
    {
      category: "mobiles",
      itemName: "Xiomi 12 pro+",
      price: "15899",
      img: "https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg",
    },
    {
      category: "shoes",
      itemName: "Next Sneaker ",
      price: "1499",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    },
    {
      category: "mobiles",
      itemName: "Itel Mobile",
      price: "13499",
      img: "https://www.itel-india.com/wp-content/uploads/2024/01/12-min-450x450.jpg",
    },
    {
      category: "electronics",
      itemName: "LivPure RO+UV ",
      price: "11999",
      img: "https://livpure.com/cdn/shop/products/livpure-pep-pro-grand-copper-ro-uv-mineralizer-36187462238361.jpg?v=1686204808&width=1445",
    },
  ]);
  const [filteredData, setFilteredData] = useState([...productData]);
  const [category, setCategory] = useState("All Products");

  useEffect(() => {
    if (category === "All Products") {
      setFilteredData([...productData]);
    } else {
      setFilteredData(productData.filter((data) => data.category === category));
    }
  }, [category, productData]);

  function handleUpdate(category) {
    console.log("handleupdate called ", category);
    setSideBaar(false);
    setCategory(category);
  }

  function toggleBar() {
    setSideBaar(!sideBar);
  }

  return (
    <div className="flex sm:flex-row w-screen flex-col">
      <nav className="md:w-[25%] w-screen    md:min-h-screen justify-between md:justify-start px-2 items-center flex flex-row  sm:flex-col bg-white ">
        <div>
          <img
            className=" w-[200px]"
            src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
          />
        </div>
        <div className="md:hidden block ">
          <span onClick={toggleBar} className="text-3xl text-[#ff2c2c]">
            <CgMenuRight />
          </span>
        </div>

        <div className="flex md:flex-col md:block hidden md:mt-5  md:gap-5">
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("All Products")}
          >
            All Products
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("mobiles")}
          >
            Mobiles
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("electronics")}
          >
            Electronics
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("shoes")}
          >
            Shoes
          </p>
        </div>
      </nav>
      <div className="relative w-full">
        <div
          className={`flex flex-col ${
            sideBar ? "block" : "hidden"
          } bg-white bg-opacity-80 p-3  md:hidden block absolute top-0 right-0 z-10 md:mt-5  md:gap-5`}
        >
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("All Products")}
          >
            All Products
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("mobiles")}
          >
            Mobiles
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("electronics")}
          >
            Electronics
          </p>
          <p
            className="text-xl hover:text-[#ff2c2c] m-2 font-semibold cursor-pointer"
            onClick={() => handleUpdate("shoes")}
          >
            Shoes
          </p>
        </div>

        <div className="grid  overflow-auto  sm:py-10 sm:grid-cols-2 grid-cols-2 gap-x-2 lg:grid-cols-3 md:h-screen   md:w-full w-[100%] md:gap-y-16 gap-y-5 gap-x-0 pt-10 pb-16 px-5 bg-[#cdd0d7] justify-items-center items-center">
          {filteredData.map((item, index) => (
            <div
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
