import React from 'react';

const About = () => {

  const facilities = [
    {
      name: "Science Labs",
      description: "Our state-of-the-art science labs are equipped with modern apparatus for hands-on learning in Chemistry, Physics, and Biology.",
      imgSrc: "https://via.placeholder.com/400x300?text=Science+Lab"
    },
    {
      name: "Computer Labs",
      description: "Our computer labs feature the latest technology to support computer science education and digital learning.",
      imgSrc: "https://via.placeholder.com/400x300?text=Computer+Lab"
    },
    {
      name: "Library",
      description: "A vast collection of books and digital resources available for students to enhance their learning and research.",
      imgSrc: "https://via.placeholder.com/400x300?text=Library"
    },
    {
      name: "Sports Facilities",
      description: "Includes a playground, gymnasium, and swimming pool to promote physical fitness and sportsmanship.",
      imgSrc: "https://via.placeholder.com/400x300?text=Sports+Facilities"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-[70px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img src="https://via.placeholder.com/1500x500" alt="School Campus" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
          </div>
        </div>

        <div className="p-6">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Springdale Public School</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Springdale Public School, we are dedicated to fostering a supportive and engaging learning environment. Our experienced educators and state-of-the-art facilities provide students with the tools they need to excel both academically and personally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Infrastructure and Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility) => (
                <div key={facility.name} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={facility.imgSrc} alt={facility.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mission</h3>
                <p className="text-gray-700">
                  Our mission is to provide a high-quality education that prepares students for success in a rapidly changing world. We are dedicated to nurturing their intellectual curiosity, creativity, and emotional well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-700">
                  Our vision is to be a beacon of educational excellence, recognized for our innovative approach and commitment to student success. We aim to inspire our students to become lifelong learners and responsible global citizens.
                </p>
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </div>
  );
};

export default About;
