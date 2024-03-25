import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
// Certificates Component
const Certificates = ({ Certificates, onCertificateClick }) => {
  return (
    <>

    
    

      {/* kkl/lfd;glgndfsLL */}
      <div className="container mx-auto p-8">
      {/* Description section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          About Vaibhav Electricals & Infra
        </h2>
        <p className="text-lg mb-4">
          Vaibhav Electricals & Infra is a sole proprietorship firm having its
          registered office & manufacturing workshop located in Jaunpur Utter
          Pradesh. It is associated with manufacturing of electrical control
          panels of low & medium voltage ranges & electrical turn key projects.
          Products manufactured by Pathak Electricals Noida are widely used by
          real estate developers, electrical EPC contractors and mining
          agencies. It aimed to create a customer base in Jharkhand, Utter
          Pradesh Bihar, Rajasthan Chhattisgarh and other Easter states of
          India.
        </p>
        <p className="text-lg mb-4">
          We are also targeting the governmental project, state owned companies
          like railways, power generation & distribution units, iron & steel
          plants, privately owned real estate developers and EPC companies. And
          are trying to extend its customer base in nearby Areas and striving
          hard to get its objectives.
        </p>
        <h2 className="text-3xl font-bold mb-4">Our product and service offerings include:</h2>
        
        <ul className="list-disc pl-8">
          <li>Automatic power factor correction panels</li>
          <li>HT & LT (UG & OH) cabling work in distribution sector</li>
          <li>
            Installation of PTR accommodation & new work (5 MVA to 10 MVA) in
            Rajasthan & Bihar State
          </li>
          <li>Electrification & cabling works</li>
          <li>OHE transmission works and substations</li>
          <li>Turnkey projects and solutions</li>
          <li>Feeder pillars</li>
          <li>GPS survey & GIS coding work in MVVNL & PUVVNL Uttar Pradesh</li>
          <li>Meter installation work in Bihar Meter Project</li>
        </ul>
      </div>

      {/* Images and Videos section */}
      <div className="mb-8 flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={logo}
            alt="Business Image 1"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          {/* <video controls className="w-full h-auto rounded-lg shadow-lg">
            <source src="/business_video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={logo}
            alt="Business Image 2"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          {/* <video controls className="w-full h-auto rounded-lg shadow-lg">
            <source src="/business_video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>

      {/* Purchasers section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Purchasers of the Product</h2>
        <ul className="list-disc pl-8">
          <li>Textile industries</li>
          <li>Petrochemical/refinery</li>
          <li>Hospitals</li>
          <li>Pharmaceuticals</li>
          <li>Food & packaging industries</li>
          <li>Chemical industries</li>
          <li>Telecom & IT companies</li>
          <li>EPC companies</li>
          <li>Turnkey contractors</li>
          <li>Real estate developers (commercial/residentials)</li>
          <li>Electricity distribution companies</li>
          <li>Iron & steel plants</li>
          <li>Mining companies</li>
          <li>And other manufacturing facilities</li>
        </ul>
      </div>

      {/* Proprietor section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Proprietor</h2>
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="Manish Kumar Pathak"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold">Manish Kumar Pathak</p>
            <p className="text-lg">Director/Proprietor</p>
            <p className="text-lg">
              With more than 11 years of experience in electrical works,
              business development, contracts, and tendering, Manish Kumar
              Pathak is a seasoned professional in the industry. He has been
              instrumental in establishing strategic alliances for large Indian
              construction companies in the infrastructure sector, including
              highways, buildings, water, metro, and railways.
            </p>
          </div>
        </div>
      </div>
    </div>
      
      {/* khjgfdsfL */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-28 mx-4 my-32 lg:px-14">
        {Certificates.map(Certificate => (
          <div key={Certificate.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Certificate.image} alt={Certificate.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{Certificate.title}</h3>
              <p className="text-lg mb-4">Type of Work: {Certificate.type}</p>
            <p className="text-lg mb-4">{Certificate.description}</p>
              <button onClick={() => onCertificateClick(Certificate)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    
    
    </>
   
  );
};

// CertificateDetail Component
const CertificateDetail = ({ Certificate, onBack }) => {
  if (!Certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{Certificate.title}</h1>
      <button onClick={onBack} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Back to Certificates</button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Certificate details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">License/Reg. No:</h2>
          <p className="text-lg mb-4">{Certificate.Lno}</p>
          <h2 className="text-xl font-bold mb-2">GSTIN:</h2>
          <p className="text-lg mb-4">{Certificate.GSTIN}</p>
          <h2 className="text-xl font-bold mb-2">Issued by:</h2>
          <p className="text-lg mb-4">{Certificate.type}</p>
          <h2 className="text-xl font-bold mb-2">Description:</h2>
          <p className="text-lg mb-4">{Certificate.description}</p>
        </div>
        {/* Certificate images */}
        <div className="col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Certificate Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Certificate.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Certificate Image ${index + 1}`}
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
const CertificatesData = [
  {
    id: 1,
    title: "MSME Certificate",
    Lno: "",
    GSTIN:"",
    type: "Govt of India",
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
    title: "License",
    Lno: "New York, USA",
    GSTIN:"",
    type: "UP Govt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mi eu elit vehicula, eu volutpat nisi ullamcorper.",
    image: "https://via.placeholder.com/500",
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ]
  },

  // Add more Certificate objects as needed
];

// Certificates Page Component
const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (Certificate) => {
    setSelectedCertificate(Certificate);
  };

  const handleBackToCertificates = () => {
    setSelectedCertificate(null); // Clear selected Certificate
  };

  return (
    <div>
      {selectedCertificate ? (
        <CertificateDetail Certificate={selectedCertificate} onBack={handleBackToCertificates} />
      ) : (
        <Certificates Certificates={CertificatesData} onCertificateClick={handleCertificateClick} />
      )}
    </div>
  );
};

export default CertificatesPage;
