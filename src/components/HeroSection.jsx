import { Link } from "react-router-dom";

function HeroSection() {
    return (
      <div className="bg-blue-600 text-white text-center p-12" id="touch">
        <h1 className="text-4xl font-bold mb-2">Empowering Your World with Electrical Excellence</h1>
        <p className="text-xl mb-4">High-quality electrical services for your home and business needs.</p>
        <Link to="/ContactUs" className="inline-block bg-white text-blue-600 font-bold py-2 px-4 rounded">Contact Us</Link>
      </div>
    );
  }
  
  export default HeroSection;