import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Updated Link component for mobile dropdown
  // Now it also closes the dropdown upon clicking a link
  const NavLink = ({ to, children }) => (
    <Link to={to} className="block py-2" onClick={toggleNavbar}>
      {children}
    </Link>
  );

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="hover:text-gray-300" onClick={isOpen ? toggleNavbar : undefined}>
            <img src={logo} alt="VEI Logo" className="h-8 mr-2" />
          </Link>
          <span className="text-lg font-semibold">
            <Link to="/" className="hover:text-gray-300" onClick={isOpen ? toggleNavbar : undefined}>
              Vaibhav Electricals & Infra
            </Link>
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/AboutUs" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/Services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/Projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link to="/ContactUs" className="hover:text-gray-300">
            Contact
          </Link>
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-black px-2 py-0.5 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Sign in
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AboutUs">About</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/ContactUs">Contact</NavLink>
          <NavLink to="/">
            <div className="inline-block bg-yellow-500 text-black px-2 py-0.5 rounded-lg hover:bg-yellow-600 transition duration-300">
              Sign in
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
