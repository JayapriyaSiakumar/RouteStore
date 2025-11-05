import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4 fixed bottom-0 w-screen">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025
        <Link href="/" className="hover:underline">
          RouteStore
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
