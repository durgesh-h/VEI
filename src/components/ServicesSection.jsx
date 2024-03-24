function ServicesSection() {
    return (
      <div className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-md mt-4 text-gray-600">Dedicated to providing top-notch electrical solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example Service Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Residential Electrical Services</h3>
              <p className="text-gray-700">From installations to repairs, ensuring your home's electrical system is safe and efficient.</p>
            </div>
            {/* Repeat for other services */}
          </div>
        </div>
      </div>
    );
  }
  
  export default ServicesSection;
  