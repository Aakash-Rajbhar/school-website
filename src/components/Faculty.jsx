import React from 'react';

const facultyMembers = [
  {
    name: "John Doe",
    title: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration",
    imgSrc: "https://via.placeholder.com/400x300?text=John+Doe"
  },
  {
    name: "Jane Smith",
    title: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
    imgSrc: "https://via.placeholder.com/400x300?text=Jane+Smith"
  },
  {
    name: "Emily Johnson",
    title: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience",
    imgSrc: "https://via.placeholder.com/400x300?text=Emily+Johnson"
  },
  {
    name: "Michael Brown",
    title: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
    imgSrc: "https://via.placeholder.com/400x300?text=Michael+Brown"
  },
  {
    name: "Sophia Davis",
    title: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
    imgSrc: "https://via.placeholder.com/400x300?text=Sophia+Davis"
  },
  {
    name: "David Wilson",
    title: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
    imgSrc: "https://via.placeholder.com/400x300?text=David+Wilson"
  }
];

const Faculty = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-[70px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Faculty</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-md">
                <img src={member.imgSrc} alt={member.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                <p className="text-lg text-gray-700"><strong>Title:</strong> {member.title}</p>
                <p className="text-lg text-gray-700"><strong>Qualifications:</strong> {member.qualifications}</p>
                <p className="text-lg text-gray-700"><strong>Experience:</strong> {member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
