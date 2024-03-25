// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-10 text-sm">
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
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/AboutUs" className="hover:text-white">About Us</Link></li>
            <li><Link to="/Services" className="hover:text-white">Services</Link></li>
            <li><Link to="/Projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/ContactUs" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        
        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Our Services</h3>
          <ul className="space-y-2">
            <li><Link to="/Services" className="hover:text-white">Electrical Installations</Link></li>
            <li><Link to="/Services" className="hover:text-white">Infrastructure Development</Link></li>
            <li><Link to="/Services" className="hover:text-white">Maintenance & Support</Link></li>
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
