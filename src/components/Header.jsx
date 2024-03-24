// import React from 'react'
// import { Link } from 'react-router-dom'


// function Header() {
//   return (
//    <>
//     <header className="bg-blue-500 text-white body-font shadow w-full">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//           <span className="ml-3 text-xl">Vaibhav Electricals & Infra</span>
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           {/* <a href="#" className="mr-5 hover:text-gray-900">Home</a>
//           <a href="#" className="mr-5 hover:text-gray-900">About Us</a>
//           <a href="#" className="mr-5 hover:text-gray-900">Services</a>
//           <a href="#" className="mr-5 hover:text-gray-900">Projects</a>
//           <a href="#" className="mr-5 hover:text-gray-900">Contact</a> */}

//           <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>&nbsp;
//           <Link to="/AboutUs" className="mr-5 hover:text-gray-900">About Us</Link>&nbsp;
//           <Link to="/Services" className="mr-5 hover:text-gray-900">Services</Link>&nbsp;
//           <Link to="/Projects" className="mr-5 hover:text-gray-900">Projects</Link>&nbsp;
//           <Link to="/ContactUs" className="mr-5 hover:text-gray-900">Contact Us</Link>&nbsp;
//         </nav>
//       </div>
//     </header>
//    </>
//   )
// }

// export default Header



import React, { useState } from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="TCS Logo" className="h-8 mr-2" />
          <span className="text-lg font-semibold">Vaibhav Electricals & Infra</span>
        </div>
        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/AboutUs" className="hover:text-gray-300">About</Link>
          <Link to="/Services" className="hover:text-gray-300">Services</Link>
          <Link to="/Projects" className="hover:text-gray-300">Projects</Link>
          <Link to="ContactUs" className="hover:text-gray-300">Contact</Link>
        </div>
        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            {!isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Dropdown (Mobile) */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/AboutUs" className="block py-2">About</Link>
          <Link to="/Services" className="block py-2">Services</Link>
          <Link to="/Projects" className="block py-2">Projects</Link>
          <Link to="/ContactUs" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

