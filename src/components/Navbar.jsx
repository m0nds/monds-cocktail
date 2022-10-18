import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 h-14 bg-white shadow-inner ">
      <h1 className="text-2xl tracking-widest">
        m0nds<span className="text-green-300">Cocktail</span>
      </h1>
      <div className="flex space-x-4 sm:space-x-8">
        <Link to="/">
          <span className="hover:text-gray-400" href="#">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="hover:text-gray-400" href="">
            About
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
