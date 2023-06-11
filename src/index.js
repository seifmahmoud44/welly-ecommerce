import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
//pages
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { store } from "./store/store";
import Faqs from "./pages/Faqs";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "wish",
        element: <WishList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
