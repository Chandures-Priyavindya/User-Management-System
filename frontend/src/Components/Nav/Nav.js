import React from "react";
import "./nav.css";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className=" top-0 left-0 w-full backdrop-blur-lg bg-white/30 shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-gray-800 drop-shadow-md">User Management System</h1>
      <ul className="flex space-x-6">
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          <Link to="/mainhome" className="active home-a">
          Home
          </Link>
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
        <Link to="/adduser" className="active home-a">
          Add User
          </Link>
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
        <Link to="/userdetails" className="active home-a">
          User Details
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
