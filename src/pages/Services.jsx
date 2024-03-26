import React, { useState } from 'react';
import elc from '../assets/elc.jpg'
import infra from '../assets/infra.jpg'
import elc1 from '../assets/elc1.png'
import infra1 from '../assets/infra1.png'
import elc2 from '../assets/elc2.png'
import infra2 from '../assets/infra2.png'
import elc3 from '../assets/elc3.png'
import infra3 from '../assets/infra3.png'
import elc4 from '../assets/elc4.png'
import infra4 from '../assets/infra4.png'
import elc5 from '../assets/elc5.png'
import infra5 from '../assets/infra5.png'
import elc6 from '../assets/elc6.png'
import infra6 from '../assets/infra6.jpg'

const ServicesPage = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Electrical Installation",
      description: "Electrical installation and maintenance is the process of installing and maintaining electrical systems and equipment. It may include tasks such as installing wiring, repairing or replacing damaged equipment, and inspecting electrical systems for safety.",
      points: [
        "Electrical System Design and Installation",
        "Lighting Solutions",
        "Power Cabling and Networking",
        "Panel Upgrades",
      ],
      image: elc,
      images: [
        elc1,
       elc2,
        elc3,
        elc4,
        elc5,
        elc6,
      ]
    },
    {
      id: 2,
      title: "Infrastructure Development",
      description: "Electrical Infrastructure development in which electrical poles, towers and above or below-ground wires and cables, and all necessary foundations, line switches, transformers, panels, meters and other appliances, appurtenances and fixtures related to the foregoing.",
      points: [
        "Hydraulic Press Machine",
        "Shearing Machine",
        "Power Coating Plant",
        "Assemby Area",
      ],
      image: infra,
      images: [
        infra1,
        infra2,
        infra3,
        infra4,
        infra5,
        infra6
        
      ]
    },
  ]);

  const [expandedService, setExpandedService] = useState(null);

  const handleServiceClick = (service) => {
    setExpandedService(service.id);
  };

  const handleCollapseClick = () => {
    setExpandedService(null);
  };

  return (
    <div className="bg-gray-100 font-spacegrotesk min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-1 md:grid-2 gap-8 lg:mx-40 ">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <img src={service.image} alt={service.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <button onClick={() => handleServiceClick(service)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Learn More</button>
              </div>
              {expandedService === service.id && (
                <div className="p-6 bg-gray-200">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg mb-4">{service.description}</p>
                  <ul className="list-disc list-inside mb-4">
                    {service.points.map((point, index) => (
                      <li key={index} className="text-lg">{point}</li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Service Image ${index + 1}`}
                        className="rounded-lg shadow-lg h-40 w-full object-cover"
                      />
                    ))}
                  </div>
                  <button onClick={handleCollapseClick} className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition-colors">Close</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
