import React from "react";
import pdp1 from "../assets/pdp1.png";
import pdp2 from "../assets/pdp2.png";
import fp1 from "../assets/fp1.png";
import fp2 from "../assets/fp2.png";
import pcc1 from "../assets/pcc1.png";
import pcc2 from "../assets/pcc2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Power distribution panel",
      description:
        "A power distribution panel is the main source of a large set of electrical circuits. Distribution panels work by combining circuits from many different locations into one central hub. This allows you to access the entire electrical grid for your home from one spot.",
      images: [pdp1, pdp2],
    },
    {
      id: 2,
      title: "Feeder pillars",
      description:
        "A feeder pillar, also known as a power box, a distribution pillar, or a feeder pillar box, is a container that is used to house electrical equipment's. It acts as a central course that controls and distributes electricity to outgoing circuits.",
      images: [fp1, fp2],
    },
    {
      id: 3,
      title: "Power control center",
      description:
        "A Power Control Centre (PCC) is a main power control panel that contains feeder breakers and supply breakers, monitoring devices, control devices, switching devices, protection devices, and instrumentation devices. Alternatively, it is called the Main Switchboard.",
      images: [pcc1, pcc2],
    },
  ];

  return (
    <div className="bg-gray-100 font-spacegrotesk min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Products & Work orders
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <img
                  src={project.images[1]}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
