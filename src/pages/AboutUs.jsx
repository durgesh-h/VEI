import React from 'react';
import bulbg from '../assets/bulbg.jpg'
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Who We Are</h2>
          <p className="text-lg mb-6">
            Vaibhav Electricals and Infrastructure is a leading provider of
            electrical services and infrastructure solutions. With over 20
            years of experience in the industry, we have established ourselves
            as a trusted partner for residential, commercial, and industrial
            projects.
          </p>
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to deliver high-quality, innovative, and sustainable
            solutions to meet the evolving needs of our clients. We are
            committed to excellence, integrity, and customer satisfaction in
            every project we undertake.
          </p>
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-lg mb-6">
            Our vision is to be a market leader in the electrical and
            infrastructure industry, recognized for our professionalism,
            expertise, and dedication to delivering exceptional results. We
            strive to exceed expectations and set new standards of excellence
            in everything we do.
          </p>
          <h2 className="text-xl font-bold mb-2">Meet Our Founder</h2>
          <div className="flex items-center mb-6">
            <img
              src={bulbg} // Replace with your founder's image URL
              alt="Founder Image"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>
          </div>
          <p className="text-lg mb-6">
            John Doe is the founder and CEO of Vaibhav Electricals and
            Infrastructure. With a background in electrical engineering and a
            passion for innovation, John has led the company to become a
            respected name in the industry.
          </p>
          <p className="text-lg mb-6">
            Under John's leadership, Vaibhav Electricals and Infrastructure has
            completed numerous successful projects, earning a reputation for
            reliability, quality, and professionalism.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={bulbg} // Replace with your image URL
            alt="About Us Image"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <iframe
            title="About Us Video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
            width="100%"
            height="315"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
