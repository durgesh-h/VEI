import React, { useState } from 'react';

const ServicesPage = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
      points: [
        "Point 1",
        "Point 2",
        "Point 3",
      ],
      image: "https://via.placeholder.com/500",
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
      ]
    },
    {
      id: 2,
      title: "Service 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
      points: [
        "Point 1",
        "Point 2",
        "Point 3",
      ],
      image: "https://via.placeholder.com/500",
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
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
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-1 md:grid-2 gap-8 lg:mx-40 ">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
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
                        className="rounded-lg shadow-lg"
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
