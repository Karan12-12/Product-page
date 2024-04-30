import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/home";
import SingleProduct from "./components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
