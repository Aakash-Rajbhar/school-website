import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 bg-gray-100 mt-[70px]">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          We would love to hear from you! Whether you have questions, feedback, or just want to get in touch, feel free to reach out using the contact form below.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg mx-auto">
          <form action="#" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className=' flex flex-col items-center justify-between md:flex-row-reverse gap-8'>
        <div className="mt-12  w-full lg:w-[30%] flex flex-col gap-2 items-center text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 w-full lg:text-left">Contact Information</h3>
          <p className="text-lg text-gray-600 mb-2 w-full  lg:text-left">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a></p>
          <p className="text-lg text-gray-600 mb-2  w-full lg:text-left">Email: <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a></p>
          <p className="text-lg text-gray-600 mb-4 ">Address: 1234 Springdale Avenue, Springfield, IL 62704</p>
        </div>
        {/* Map Section */}
        <div className="w-full mt-8">
          <div className="w-full h-64 md:h-80 lg:h-[500px] rounded-lg p-6 overflow-hidden border-2 border-gray-300 shadow-lg">
            <h3 className='text-2xl font-semibold capitalize'>find us</h3>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.132846411662!2d-77.03530858467924!3d38.89875197957017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7cfd0df4baf%3A0x19c3403e43a05e4!2s1600%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020050!5e0!3m2!1sen!2sus!4v1633461416096!5m2!1sen!2sus"
              className="w-full h-[95%] border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Contact;
