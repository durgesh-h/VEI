// Home.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsGallery from '../components/ProjectsGallery';
import ContactCTA from '../components/ContactCTA';
import CaraouselPage from '../components/CaraouselPage';




function Home() {
  return (
    <div>
    
      <main>
        <HeroSection />
        <CaraouselPage/>
        <ServicesSection />
        <ContactCTA />
      </main>
      
    </div>
  );
}

export default Home;
