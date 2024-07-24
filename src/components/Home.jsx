// src/components/HomePage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { FaAward, FaCertificate, FaTrophy } from 'react-icons/fa';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';

const HomePage = () => {
  return (
    <div className="mt-[70px] ">
      {/* Carousel */}
      <div className='relative mt-[70px]'>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div>
            <img className='relative' src={carousel_1} alt="Slide 1" />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
          </div>
          <div>
            <img className='relative' src={carousel_2} alt="Slide 2" />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
          </div>
          <div>
            <img className='relative' src={carousel_3} alt="Slide 3" />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
          </div>
      </Carousel>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-4 text-white text-center" >
            <h1 className=' text-2xl sm:text-4xl lg:text-6xl font-bold'>Welcome to <br /> Springdale Public School</h1>
            <p className='hidden w-[70%] md:block  text-center'>
              Springdale Public School is committed to providing a safe,
              welcoming, and inclusive environment for all students. Our mission
              is to inspire and empower students to succeed through a strong
              foundation in education, creativity, and personal growth.

            </p>
          </div>
      </div>
          

      {/* Programs Section */}
      <section id="programs" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all ease-in 300ms">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x250"
                alt="Program 1"
              />
              <h3 className="text-xl font-semibold mt-4">Program Title 1</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
            </div>

            {/* Program 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all ease-in 300ms">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x250"
                alt="Program 2"
              />
              <h3 className="text-xl font-semibold mt-4">Program Title 2</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
            </div>

            {/* Program 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all ease-in 300ms">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x250"
                alt="Program 3"
              />
              <h3 className="text-xl font-semibold mt-4">Program Title 3</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:translate-y-[-10px] transition-all ease-in 300ms">
              <FaAward className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Top Performing School
              </h3>
              <p className="text-gray-600">
                Awarded as the top-performing school in the region for three
                consecutive years.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:translate-y-[-10px] transition-all ease-in 300ms">
              <FaCertificate className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Accreditation Excellence
              </h3>
              <p className="text-gray-600">
                Received accreditation excellence for our comprehensive
                curriculum and faculty development.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:translate-y-[-10px] transition-all ease-in 300ms">
              <FaTrophy className="text-4xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                National Championship
              </h3>
              <p className="text-gray-600">
                Our students won the national championship in the annual science
                and technology competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal and School Details Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Principal and School Details
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Principal Details */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="https://via.placeholder.com/600x400"
                alt="Principal"
              />
              <h3 className="text-2xl font-semibold mt-4 text-center lg:text-left">
                Dr. John Doe
              </h3>
              <p className="text-gray-600 mt-2 text-center lg:text-left">
                Principal
              </p>
              <p className="mt-4 text-gray-700 text-justify">
                Dr. John Doe has been leading our school with dedication and
                vision for over a decade. His leadership has been instrumental
                in driving academic excellence and fostering a nurturing
                environment for both students and staff.
              </p>
            </div>

            {/* School Details */}
            <div className="lg:w-1/2 lg:pl-8">
              <h3 className="text-2xl font-semibold mb-4">About Our School</h3>
              <p className="text-gray-700 mb-4 text-justify">
                Our school is committed to providing quality education and
                fostering holistic development for students. With a range of
                academic programs, extracurricular activities, and a focus on
                inclusive education, we aim to equip students with the skills
                and knowledge needed to excel in their future endeavors.
              </p>
              <p className="text-gray-700 text-justify">
                Located in the heart of Education City, our state-of-the-art
                facilities and experienced faculty create an environment
                conducive to learning and growth. We take pride in our
                achievements and continuously strive to enhance our programs and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <img
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:border-orange-300 hover:border-2 hover:translate-y-[-10px] transition-all ease-in 300ms"
              src="https://via.placeholder.com/400x250"
              alt="Gallery  1"
            />
            <img
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:border-orange-300 hover:border-2 hover:translate-y-[-10px] transition-all ease-in 300ms"
              src="https://via.placeholder.com/400x250"
              alt="Gallery  2"
            />
            <img
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:border-orange-300 hover:border-2 hover:translate-y-[-10px] transition-all ease-in 300ms"
              src="https://via.placeholder.com/400x250"
              alt="Gallery Imge 3"
            />
            <img
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:border-orange-300 hover:border-2 hover:translate-y-[-10px] transition-all ease-in 300ms"
              src="https://via.placeholder.com/400x250"
              alt="Gallery  4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
