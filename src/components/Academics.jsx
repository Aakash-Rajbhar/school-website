import React from 'react';

const Academics = () => {
  const curriculumData = [
    {
      grade: "Primary (Grades 1-5)",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
      imgSrc: "https://via.placeholder.com/400x300?text=Primary+Education"
    },
    {
      grade: "Secondary (Grades 6-10)",
      subjects: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"],
      imgSrc: "https://via.placeholder.com/400x300?text=Secondary+Education"
    },
    {
      grade: "Senior Secondary (Grades 11-12)",
      subjects: ["Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English", "Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English"],
      imgSrc: "https://via.placeholder.com/400x300?text=Senior+Secondary+Education"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-[70px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Academics</h1>
          
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Curriculum</h2>
            <div className="space-y-8">
              {curriculumData.map((curriculum) => (
                <div key={curriculum.grade} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={curriculum.imgSrc} alt={curriculum.grade} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{curriculum.grade}</h3>
                  <p className="text-lg text-gray-700">
                    {curriculum.subjects.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Teaching Methodologies</h2>
            <p className="text-lg text-gray-700">
              We use a blend of traditional and modern teaching techniques to cater to different learning styles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-700">
              Digital classrooms, interactive learning modules, and access to online educational platforms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academics;
