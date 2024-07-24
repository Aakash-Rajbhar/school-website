import React from 'react';

const admissionsSteps = [
  {
    title: 'Admission Form Available',
    description: 'Admission forms are available for download.',
    bgColor: '#4F9D8F',
    textColor: '#fff',
  },
  {
    title: 'Submit Form and Documents',
    description: 'Submit the completed form along with required documents at the school office.',
    bgColor: '#6BAED6',
    textColor: '#fff',
  },
  {
    title: 'Entrance Test (if applicable)',
    description: 'Entrance tests may be conducted for certain grades.',
    bgColor: '#FFD700',
    textColor: '#000',
  },
  {
    title: 'Evaluation of Applications',
    description: 'Applications are reviewed and evaluated based on merit and availability of seats.',
    bgColor: '#FF6347',
    textColor: '#fff',
  },
  {
    title: 'Announcement of Results',
    description: 'Results are announced, and selected candidates are notified.',
    bgColor: '#32CD32',
    textColor: '#fff',
  },
  {
    title: 'Admission Complete',
    description: 'Final admission steps are completed and students are officially enrolled.',
    bgColor: '#8A2BE2',
    textColor: '#fff',
  }
];

const importantDates = [
  {
    date: 'March 1st',
    event: 'Admission Form Availability'
  },
  {
    date: 'March 31st',
    event: 'Last Date for Submission'
  },
  {
    date: 'April 15th',
    event: 'Entrance Test'
  },
  {
    date: 'April 30th',
    event: 'Announcement of Results'
  }
];

const Admissions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-[70px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Admissions</h1>

          {/* Admissions Process */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Admissions Process</h2>
            <div className="space-y-4">
              {admissionsSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-md border border-gray-300"
                  style={{ backgroundColor: step.bgColor, color: step.textColor }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notice Board for Important Dates */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Dates</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <div className="p-4 border-4 border-yellow-400 bg-yellow-100 rounded-lg shadow-inner">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Notice Board</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  {importantDates.map((date, index) => (
                    <li key={index}>
                      <span className="font-bold">{date.date}</span> - {date.event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Admission Details */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Admission Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Process</h3>
              <p className="text-lg text-gray-700 mb-4">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Criteria</h3>
              <p className="text-lg text-gray-700 mb-4">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
