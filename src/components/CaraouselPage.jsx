import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bulbg from '../assets/bulbg.jpg';
import house from '../assets/house.jpg';
import trans from '../assets/trans.jpg';
import infraa from '../assets/infraa.jpg'
import ParticlesComponent from "./particles";

function CaraouselPage() {
  return (
    <div className="relative font-spacegrotesk">
      <ParticlesComponent id="particles" />
      <Carousel>
        {[bulbg, infraa, house, trans].map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-full" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="absolute bottom-0  left-0 right-0 text-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="font-bold pt-10 sm:text-2xl lg:text-4xl">Vaibhav Electricals & Infra</h1>
        <p className="text-1xl pb-14">Call us today for assistance: <br></br>  <a href="tel:+91 7007208556" className="hover:text-gray-700">+91 7007208556</a></p>
      </div>
    </div>
  );
}

export default CaraouselPage;
