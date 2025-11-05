import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const Cart = ({ cart, setCart, removeFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  const calculateTotal = (cart) => {
    let tot = cart.reduce((acc, ele) => acc + ele.quantity * +ele.price, 0);
    console.log(tot);
    setTotal(tot.toFixed(2));
  };

  const incQuantity = (id) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decQuantity = (id) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const emptyCart = () => {
    return (
      <div className="text-2xl font-bold items-center justify-center mt-4 flex w-full gap-2 ">
        No Items in Cart
        <span className="text-amber-950">
          <FaCartPlus />
        </span>
      </div>
    );
  };

  const cartTable = () => {
    return (
      <div className="container m-auto">
        <div className="relative w-full h-[500px] overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Product Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src={product.image}
                      className="w-8 sm:w-10  xl:w-10"
                      alt="Product Image"
                    />
                  </td>
                  <td className=" px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => decQuantity(product.id)}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {product.quantity}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          incQuantity(product.id);
                        }}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${(product.quantity * +product.price).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeFromCart(product)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 whitespace-nowrap text-right text-lg font-bold text-gray-900">
                  Order Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-900">
                  ${total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="text-2xl font-bold items-center justify-center mt-25 flex w-screen gap-2 ">
        Cart
        <span className="text-amber-950">
          <FaCartPlus />
        </span>
      </div>
      {cart.length === 0 ? emptyCart() : cartTable()}
    </>
  );
};

export default Cart;
