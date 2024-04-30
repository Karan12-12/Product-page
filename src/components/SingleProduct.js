import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsArray } from "../ProductData/Products";
import { useLocation } from "react-router-dom";
import { IoMdShareAlt } from "react-icons/io";
import { PiCopySimpleThin } from "react-icons/pi";
import Popup from "reactjs-popup";
import {
  WhatsappIcon,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";

function SingleProduct() {
  const [data, setData] = useState([...ProductsArray]);
  const [filteredData, setFilteredData] = useState([]);
  const { productId } = useParams();
  const location = useLocation();
  const [URL, setURL] = useState("");
  const [position, setPosition] = useState("top center");

  const handleResize = () => {
    const screenSize = window.innerWidth;
    if (screenSize <= 768) {
      setPosition("left center");
    } else {
      setPosition("top center");
    }
  };

  useEffect(() => {
    console.log("id", productId);
    let url = `${window.location.origin}${location.pathname}`;
    setURL(url);
    setFilteredData(data.filter((product) => product.id == productId));
    console.log(filteredData);

    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(URL);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="bg-[#cdd0d7] flex p-5 justify-center items-center h-screen">
      {filteredData.length > 0 && (
        <div>
          <div className="lg:w-[500px] md:w-[450px] sm:w-[400px] border-[2px]  border-transparent cursor-pointer md:min-h-[280px] bg-white rounded-xl overflow-hidden shadow-md shadow-black">
            <div className="p-5 ">
              <img
                src={filteredData[0].img}
                className="sm:w-full rounded-xl object-contain"
              />
            </div>
            <div
              className="px-4 py-3 bg-[#d5dbe9] flex items-center justify-between 
            "
            >
              <div>
                <p className="md:text-md text-xl font-semibold">
                  {filteredData[0].itemName}
                </p>
                <p className="">
                  <span>Price : ₹</span>
                  <span>{filteredData[0].price}</span>
                </p>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="flex items-center border-[1px] border-black rounded-full px-3 hover:shadow-xl py-2 bg-">
                      <span className="mr-2 text-xl">
                        <IoMdShareAlt />
                      </span>
                      <span className="text-xl font-semibold">Share</span>
                    </button>
                  }
                  position={position}
                >
                  <div className="bg-white flex flex-col items-center rounded-xl gap-3 shadow-xl p-5">
                    <div className=" flex gap-2 ">
                      <div>
                        <TelegramShareButton url={URL}>
                          <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>
                      </div>
                      <div>
                        <WhatsappShareButton url={URL}>
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                      </div>
                      <div>
                        <EmailShareButton url={URL}>
                          <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                      </div>
                    </div>
                    <div className=" md:block hidden border-[1px] p-3 rounded-xl border-black">
                      <span className="mr-2 overflow-hidden">{URL}</span>
                      <span
                        onClick={copyToClipboard}
                        className="bg-blue-500 px-3 cursor-pointer text-white font-semibold py-2 rounded-full"
                      >
                        Copy
                      </span>
                    </div>
                    <div className="md:hidden block">
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center"
                      >
                        <span className="text-xl bg-[#e2dada] p-2 mr-2 rounded-full ">
                          <PiCopySimpleThin />
                        </span>
                        <span className="text-xl">Copy link</span>
                      </button>
                    </div>
                  </div>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SingleProduct;
