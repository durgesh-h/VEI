// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black font-spacegrotesk text-gray-400 p-10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Vaibhav Electricals & Infrastructure</h2>
          <p>Leading the way in electrical innovation and infrastructure since 1998.</p>
          <div className="flex space-x-4">
            {/* Example Social Links */}
            <a href="mailto:vaibhavelectricalsinfra@gmail.com" className="hover:text-white">vaibhavelectricalsinfra@gmail.com</a>
            
          </div>
        </div>
        
        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/AboutUs" className="hover:text-white">About Us</a></li>
            <li><a href="/Services" className="hover:text-white">Services</a></li>
            <li><a href="/Projects" className="hover:text-white">Projects</a></li>
            <li><a href="/ContactUs" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        
        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/Services" className="hover:text-white">Electrical Installations</a></li>
            <li><a href="/Services" className="hover:text-white">Infrastructure Development</a></li>
            <li><a href="/Services" className="hover:text-white">Maintenance & Support</a></li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Stay Updated</h3>
          <p>Sign up for our newsletter to get the latest news and updates.</p>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your Email" className="p-2 rounded text-black" />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-black p-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-700 text-center p-4 mt-8">
         © {new Date().getFullYear()} Vaibhav Electricals & Infra. All rights reserved. <br></br>Developed by <a href="https://dgfolio.vercel.app" target='blank' className="hover:text-white">Durgesh Prasad</a>
      </div>
    </footer>
  );
};

export default Footer;
