import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.contexts";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

import App from "./App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
