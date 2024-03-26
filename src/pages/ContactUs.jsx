import React from "react";

const ContactUs = () => {
  return (
    <div className="container font-spacegrotesk mx-auto px-4 py-8" id="contact">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">
        Have a question or need assistance? Contact us using the form below or
        reach out to us directly.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 relative">
          {/* Shadow behind the map */}
          <div className="absolute  bg-black opacity-25 rounded-lg shadow-lg"></div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16331.13407144421!2d82.66297470134158!3d25.732679501074163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903bb96e1192c9%3A0xebf93fea2a1f4a2b!2sSadhbhawana%20Colony!5e0!3m2!1sen!2sin!4v1711367734701!5m2!1sen!2sin"
            width="100%"
            height="700"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Phone</h3>
             <a href="tel:+91 7007208556" className="hover:text-gray-700">+91 7007208556</a>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:vaibhavelectricalsinfra@gmail.com" className="hover:text-gray-700">vaibhavelectricalsinfra@gmail.com</a>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold">Location</h3>
              <p>
                {" "}
               60, Sadbhawana Colony Umarpur, HaribandhPur Jaunpur, Utter
                Pradesh -222002
              </p>
            </div>
            <form>
              <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


