import logo from '../assets/logo.jpg'

function ProjectsGallery() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example Project Card */}
          <div className="overflow-hidden shadow-lg rounded-lg">
            <img
              src={logo}
              alt="Project Name"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold">Project Name</h3>
              <p>Description of the project, its goals, and achievements.</p>
            </div>
          </div>
          {/* Repeat for other projects */}
          <div className="overflow-hidden shadow-lg rounded-lg">
            <img
              src={logo}
              alt="Project Name"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold">Project Name</h3>
              <p>Description of the project, its goals, and achievements.</p>
            </div>
          </div>
          <div className="overflow-hidden shadow-lg rounded-lg">
            <img
              src={logo}
              alt="Project Name"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold">Project Name</h3>
              <p>Description of the project, its goals, and achievements.</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default ProjectsGallery;
