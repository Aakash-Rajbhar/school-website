import React from 'react';

const Sections = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg my-4">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul>
          <li>Annual Sports Day - Celebrating Excellence in Sports</li>
          <li>Science Exhibition - Showcasing Student Innovations</li>
          <li>Cultural Fest - Embracing Diversity and Creativity</li>
        </ul>
      </div>
    </div>
  );
};

export default Sections;
