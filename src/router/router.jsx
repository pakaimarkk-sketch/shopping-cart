import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { CartPage } from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
