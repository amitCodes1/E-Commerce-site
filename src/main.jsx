import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ProductsProvider } from "./context/ProductsContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
   <ProductsProvider>
  <WishlistProvider>
    <CartProvider>
      <App />
      <Toaster
  position="top-right"
  reverseOrder={false}/>
    </CartProvider>
  </WishlistProvider>
</ProductsProvider>
</ThemeProvider>
  </StrictMode>
);
