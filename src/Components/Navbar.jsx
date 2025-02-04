import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Icon for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-blue-500 text-blue-400 pb-1 transition-all duration-300"
      : "text-white hover:text-blue-400 transition-all duration-300";

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img className="h-10" src={logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/process" className={linkClass}>Process</NavLink></li>
            <li><NavLink to="/seven" className={linkClass}>Seven Reasons</NavLink></li>
          </ul>

          {/* Contact Button */}
          <Link to="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 text-center py-4 rounded-md transition-all duration-300">
            <ul className="space-y-4">
              <li><NavLink to="/" className={linkClass} onClick={toggleMenu}>Home</NavLink></li>
              <li><NavLink to="/about" className={linkClass} onClick={toggleMenu}>About</NavLink></li>
              <li><NavLink to="/process" className={linkClass} onClick={toggleMenu}>Process</NavLink></li>
              <li><NavLink to="/seven" className={linkClass} onClick={toggleMenu}>Seven Reasons</NavLink></li>
              <li>
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 inline-block" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
