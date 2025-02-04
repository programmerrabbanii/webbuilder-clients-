import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
             
              ? "border-b-2 border-blue-600 text-lg text-blue-600 pb-2"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-blue-600 text-blue-600 pb-2"
              : "text-gray-700 hover:text-blue-600 text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/process"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-blue-600 text-blue-600 pb-2"
              : "text-gray-700 hover:text-blue-600 text-lg"
          }
        >
          Process
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/seven"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-lg border-blue-600 text-blue-600 pb-2"
              : "text-gray-700 hover:text-blue-600 text-lg"
          }
        >
          Seven Reasons
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md p-4 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <img className="h-10" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-lg ">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar