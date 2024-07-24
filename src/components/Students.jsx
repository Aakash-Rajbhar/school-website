import React from 'react';

// Data Arrays
const extracurricularActivities = [
  'Music',
  'Dance',
  'Drama',
  'Art',
  'Sports',
  'Robotics',
  'Debate Club',
  'Science Club',
];

const clubsAndSocieties = [
  'Literary Society',
  'Environmental Club',
  'Astronomy Club',
  'Coding Club',
];

const achievements = [
  { name: 'John Smith', achievement: 'National Level Math Olympiad Winner' },
  {
    name: 'Sarah Lee',
    achievement: 'Gold Medalist in State Swimming Championship',
  },
  {
    name: 'Tech Innovators Club',
    achievement: 'Winners of Inter-School Robotics Competition',
  },
];

const studentCouncil = [
  {
    position: 'President',
    name: 'Amy Parker',
    grade: 'Grade 12',
    imgSrc: 'https://via.placeholder.com/400x300?text=Amy+Parker',
  },
  {
    position: 'Vice President',
    name: 'Rajiv Mehta',
    grade: 'Grade 11',
    imgSrc: 'https://via.placeholder.com/400x300?text=Rajiv+Mehta',
  },
  {
    position: 'Secretary',
    name: 'Lisa Wong',
    grade: 'Grade 10',
    imgSrc: 'https://via.placeholder.com/400x300?text=Lisa+Wong',
  },
];

const Students = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-[70px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Students
          </h1>

          {/* Extracurricular Activities */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Extracurricular Activities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {extracurricularActivities.map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {activity}
                  </h3>
                  <p className="text-lg text-gray-700">
                    Engage in various activities to enhance skills and
                    creativity outside the classroom.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Clubs and Societies */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Clubs and Societies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubsAndSocieties.map((club, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {club}
                  </h3>
                  <p className="text-lg text-gray-700">
                    Join a club or society to connect with like-minded peers and
                    pursue your interests.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {achievement.name}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {achievement.achievement}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Student Council */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Student Council
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentCouncil.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {member.position}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Grade:</strong> {member.grade}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Students;
