import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bulbg from '../assets/bulbg.jpg';
import blb from '../assets/blb.jpg';
import ParticlesComponent from "./particles";
import house from '../assets/house.jpg'
import trans from '../assets/trans.jpg'
function CaraouselPage() {
  return (
    <div>
              
<div>
<ParticlesComponent id="particles"/>
<Carousel id="">
        <Carousel.Item>
      
          <img
            className="d-block w-100"
            src={bulbg}
            alt="first slide"
          ></img>
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={house}
            alt="second slide"
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trans}
            alt="third slide"
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
      
    </div>
  );
}

export default CaraouselPage;
