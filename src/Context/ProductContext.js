import { createContext, useContext } from "react";

export const ProductContext = createContext({
  // Methods
  handleUpdate: (category) => {},
  toggleBar: () => {},
});

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ProductContext.Provider;
