import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">
        Feel free to reach out to us for any inquiries or questions.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 relative">
          {/* Shadow behind the map */}
          <div className="absolute  bg-black opacity-25 rounded-lg shadow-lg"></div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158976.31901797914!2d-0.24168093310546874!3d51.52855829787783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b16040e04df%3A0x4aafc9a7a4b88bf1!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1634856231020!5m2!1sen!2suk"
            width="100%"
            height="700"
            style={{ border: '0' }}
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
              <p>+1 123 456 7890</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Email</h3>
              <p>info@example.com</p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold">Location</h3>
              <p>123 Main Street, City, Country</p>
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
