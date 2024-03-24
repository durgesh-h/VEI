import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Electrical Installation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Electrical Installation</h3>
            <p className="text-lg mb-4">
              We provide professional electrical installation services for residential, commercial, and industrial properties.
            </p>
          </div>

          {/* Service 2: Infrastructure Development */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Infrastructure Development</h3>
            <p className="text-lg mb-4">
              Our infrastructure development projects include roadways, bridges, and utilities, providing comprehensive solutions from planning to construction.
            </p>
          </div>

          {/* Service 3: Maintenance Services */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Maintenance Services</h3>
            <p className="text-lg mb-4">
              We offer scheduled maintenance plans, troubleshooting, repairs, and emergency services to ensure the smooth operation of electrical and infrastructure systems.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/Services" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
