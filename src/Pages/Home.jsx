import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Home = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const responseData = response.data.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setProducts(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 flex-wrap gap-4 justify-center max-w-screen mt-25">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className="max-w-xs lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a
                href="#"
                className="h-[200px] flex justify-center align-center">
                <img
                  className="p-8 rounded-t-lg max-h-[200px] min-h-[150px] align-center"
                  src={product.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <p className="line-clamp-4 mt-2 mb-2 text-neutral-800">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white ">
                    ${product.price}
                  </span>
                  {cart.find((ele) => ele.id === product.id) ? (
                    <button
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
                      onClick={() => {
                        removeFromCart(product);
                      }}>
                      Remove From cart
                    </button>
                  ) : (
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                      onClick={() => {
                        addToCart(product);
                      }}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
