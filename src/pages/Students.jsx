import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faDumbbell, faPaintBrush, faRobot, faTheaterMasks, faBook, faTrophy, faSwimmer, faMedal, faStar, faUserTie, faUserShield } from '@fortawesome/free-solid-svg-icons';

function Students() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-6 py-40 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Student Life at Springdale</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the vibrant and enriching experiences our students enjoy through various activities and achievements.
            </p>
          </div>

          <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Extracurricular Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: faMusic, color: 'bg-blue-500', text: 'Music' },
                { icon: faDumbbell, color: 'bg-green-500', text: 'Dance' },
                { icon: faTheaterMasks, color: 'bg-yellow-500', text: 'Drama' },
                { icon: faPaintBrush, color: 'bg-red-500', text: 'Art' },
                { icon: faRobot, color: 'bg-purple-500', text: 'Robotics' },
                { icon: faBook, color: 'bg-orange-500', text: 'Debate Club' },
                { icon: faBook, color: 'bg-gray-500', text: 'Science Club' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                  <div className={`w-14 h-14 flex items-center justify-center ${activity.color} text-white rounded-full mr-4`}>
                    <FontAwesomeIcon icon={activity.icon} className="text-2xl" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{activity.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: faMedal, color: 'bg-blue-500', name: 'John Smith', achievement: 'National Level Math Olympiad Winner' },
                { icon: faSwimmer, color: 'bg-green-500', name: 'Sarah Lee', achievement: 'Gold Medalist in State Swimming Championship' },
                { icon: faTrophy, color: 'bg-yellow-500', name: 'Tech Innovators Club', achievement: 'Winners of Inter-School Robotics Competition' }
              ].map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 flex items-center justify-center ${achievement.color} text-white rounded-full mr-4`}>
                      <FontAwesomeIcon icon={achievement.icon} className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{achievement.name}</h3>
                      <p className="text-gray-700 text-sm">{achievement.achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Student Council</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faStar, color: 'bg-blue-500', title: 'President: Amy Parker', grade: 'Grade 12' },
                { icon: faUserTie, color: 'bg-green-500', title: 'Vice President: Rajiv Mehta', grade: 'Grade 11' },
                { icon: faUserShield, color: 'bg-yellow-500', title: 'Secretary: Lisa Wong', grade: 'Grade 10' }
              ].map((council, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-gray-300 transition-colors duration-300 flex flex-col items-center relative">
                  <div className={`w-16 h-16 flex items-center justify-center ${council.color} text-white rounded-full mb-4`}>
                    <FontAwesomeIcon icon={council.icon} className="text-3xl" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{council.title}</h3>
                    <p className="text-gray-700 text-sm">{council.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        <Footer /> {/* Add the Footer component */}
      </div>
    </>
  );
}

export default Students;
