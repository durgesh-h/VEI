import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Electrical Installation */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Electrical Installation</h2>
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Electrical Installation"
            className="mb-4 rounded-lg"
          />
          <p className="text-lg mb-4">
            Our experienced electricians provide professional electrical
            installation services for residential, commercial, and industrial
            properties. From wiring and lighting to panel upgrades and
            electrical fixtures, we ensure safe and efficient installations
            tailored to your needs.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Wiring and Rewiring</li>
            <li>Lighting Installation</li>
            <li>Panel Upgrades</li>
            <li>Electrical Fixtures</li>
            <li>and more...</li>
          </ul>
        </div>

        {/* Service 2: Infrastructure Development */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Infrastructure Development</h2>
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Infrastructure Development"
            className="mb-4 rounded-lg"
          />
          <p className="text-lg mb-4">
            We specialize in infrastructure development projects, including
            roadways, bridges, and utilities. Our team of experts delivers
            comprehensive solutions from planning and design to construction
            management and maintenance.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Road Construction</li>
            <li>Bridge Engineering</li>
            <li>Utility Installation</li>
            <li>Site Development</li>
            <li>and more...</li>
          </ul>
        </div>

        {/* Service 3: Maintenance Services */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Maintenance Services</h2>
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Maintenance Services"
            className="mb-4 rounded-lg"
          />
          <p className="text-lg mb-4">
            Our maintenance services ensure the smooth operation and longevity
            of your electrical and infrastructure systems. We offer scheduled
            maintenance plans, troubleshooting, repairs, and emergency services
            to keep your facilities running efficiently.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Regular Inspections</li>
            <li>Troubleshooting</li>
            <li>Emergency Repairs</li>
            <li>Preventive Maintenance</li>
            <li>and more...</li>
          </ul>
        </div>

        {/* Add more services here */}
      </div>
    </div>
  );
};

export default ServicesPage;
