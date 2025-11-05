import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // const checkProduct = cart.find((ele) => ele.id === product.id);
    // if (checkProduct) {
    //   alert("Product already in the cart");
    // }
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const checkProduct = cart.find((ele) => ele.id === product.id);
    if (checkProduct) {
      setCart((prevItem) => prevItem.filter((ele) => ele.id !== product.id));
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Header cartCount={cart.length} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
