import React from 'react';

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
      ]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
      ]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
      images: [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
      ]
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <img src={project.images[1]} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
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

export default ProjectPage;
