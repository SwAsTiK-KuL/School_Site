import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import { FaFileDownload, FaEnvelope, FaClipboardList, FaBullhorn } from 'react-icons/fa';

function Admission() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-6 py-40 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Admission Information</h1>
            <p className="text-lg text-gray-600">
              Follow these steps for a smooth admission process.
            </p>
          </div>

          <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admission Process</h2>
            <div className="space-y-8">
              {[
                { icon: FaFileDownload, color: 'bg-blue-500', title: 'Download Admission Form', description: 'Admission forms are available for download on our website.' },
                { icon: FaEnvelope, color: 'bg-green-500', title: 'Submit Completed Form', description: 'Submit the completed form along with required documents at the school office.' },
                { icon: FaClipboardList, color: 'bg-yellow-500', title: 'Entrance Test (if applicable)', description: 'For certain grades, an entrance test may be conducted. Details will be provided upon form submission.' },
                { icon: FaBullhorn, color: 'bg-red-500', title: 'Results Announcement', description: 'Results will be announced on the specified date. Check your status on our website or at the school office.' },
              ].map((step, index) => (
                <div key={index} className={`flex items-start space-x-4 border-l-4 ${step.color} pl-4 py-4 bg-opacity-10 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-pointer`}>
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${step.color} text-white rounded-full text-2xl`}>
                    <step.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-700 mt-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Important Dates</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li><strong>Admission Form Availability:</strong> March 1st</li>
              <li><strong>Last Date for Submission:</strong> March 31st</li>
              <li><strong>Entrance Test:</strong> April 15th</li>
              <li><strong>Announcement of Results:</strong> April 30th</li>
            </ul>
          </section>
        </main>

        <Footer /> {/* Add the Footer component */}
      </div>
    </>
  );
}

export default Admission;
