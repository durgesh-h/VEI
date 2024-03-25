import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Service 1: Electrical Installation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Electrical Installation</h3>
            <p className="text-lg mb-4">
              We provide professional electrical installation services for
              residential, commercial, and industrial properties. Electrical
              installation and maintenance is the process of installing and
              maintaining electrical systems and equipment. It may include tasks
              such as installing wiring, repairing or replacing damaged
              equipment, and inspecting electrical systems for safety.
            </p>
          </div>

          {/* Service 2: Infrastructure Development */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">
              Infrastructure Development
            </h3>
            <p className="text-lg mb-4">
              Electrical Infrastructure development in which electrical poles,
              towers and above or below-ground wires and cables, and all
              necessary foundations, line switches, transformers, panels, meters
              and other appliances, appurtenances and fixtures related to the
              foregoing.
            </p>
          </div>

          {/* Service 3: Maintenance Services
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Maintenance Services</h3>
            <p className="text-lg mb-4">
              We offer scheduled maintenance plans, troubleshooting, repairs, and emergency services to ensure the smooth operation of electrical and infrastructure systems.
            </p>
          </div> */}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/Services"
            className="inline-block bg-yellow-500 text-black px-8 py-2.5 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
