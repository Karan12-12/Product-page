import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./Context/ProductContext";
import { useState } from "react";

function App() {
  const [sideBar, setSideBaar] = useState(false);
  const [category, setCategory] = useState("All Products");

  const handleUpdate = (category) => {
    console.log("handleupdate called ", category);
    setSideBaar(false);
    setCategory(category);
  };

  const toggleBar = () => {
    setSideBaar(!sideBar);
  };
  return (
    <div className="App">
      <ProductProvider
        value={{
          toggleBar,
          handleUpdate,
          setSideBaar,
          setCategory,
          category,
          sideBar,
        }}
      >
        <div className="flex sm:flex-row flex-col md:w-screen">
          <div className="md:w-[25%]">
            <Navbar />
          </div>
          <div className="md:w-[75%]">
            <Outlet />
          </div>
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;
