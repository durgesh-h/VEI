import React, { useState } from 'react';

// Projects Component
const Projects = ({ projects, onProjectClick }) => {
  return (
    <div className="container mx-auto mb-16 mt-10">
      <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">Type of Work: {project.type}</p>
            <p className="text-lg mb-4">{project.description}</p>
              <button onClick={() => onProjectClick(project)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProjectDetail Component
const ProjectDetail = ({ project, onBack }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
      <button onClick={onBack} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Back to Projects</button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Location:</h2>
          <p className="text-lg mb-4">{project.location}</p>
          <h2 className="text-xl font-bold mb-2">Type of Work:</h2>
          <p className="text-lg mb-4">{project.type}</p>
          <h2 className="text-xl font-bold mb-2">Description:</h2>
          <p className="text-lg mb-4">{project.description}</p>
        </div>
        {/* Project images */}
        <div className="col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Project Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

// Dummy data
const projectsData = [
  {
    id: 1,
    title: "Residential Project",
    location: "New York, USA",
    type: "Electrical Installation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
    image: "https://via.placeholder.com/500",
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ]
  },
  {
    id: 1,
    title: "Residential Project",
    location: "New York, USA",
    type: "Electrical Installation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
    image: "https://via.placeholder.com/500",
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ]
  },
  {
    id: 1,
    title: "Residential Project",
    location: "New York, USA",
    type: "Electrical Installation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
    image: "https://via.placeholder.com/500",
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ]
  }
  // Add more project objects as needed
];

// Projects Page Component
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null); // Clear selected project
  };

  return (
    <div>
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
      ) : (
        <Projects projects={projectsData} onProjectClick={handleProjectClick} />
      )}
    </div>
  );
};

export default ProjectsPage;
