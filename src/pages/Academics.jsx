import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'; 
import stem_program from "../assets/stem_program.jpg";
import sports_excellence from "../assets/sports_excellence.jpg";
import arts_humanities from "../assets/arts_humanities.jpg";

export const Academics = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-40 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Academics</h1>
          <p className="text-lg text-gray-600">
            Explore our dynamic curriculum, innovative teaching methodologies, and cutting-edge educational resources.
          </p>
        </div>

        <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 mb-12 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Primary (Grades 1-5)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Secondary (Grades 6-10)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-700">Senior Secondary (Grades 11-12)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Teaching Methodologies</h2>
          <p className="text-gray-700">
            We blend traditional and modern teaching techniques to cater to diverse learning styles and ensure effective education.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Educational Resources</h2>
          <p className="text-gray-700">
            Our facilities include digital classrooms, interactive learning modules, and access to various online educational platforms.
          </p>
        </section>

        {/* Featured Programs */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12 animate__animated animate__fadeIn animate__delay-5s">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-lg text-gray-600">
              Discover some of our standout programs that offer unique learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 transition-transform duration-300">
              <img src={stem_program} alt="STEM Program" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-3">STEM Program</h3>
              <p className="text-gray-700">
                Our STEM program emphasizes hands-on learning and problem-solving in science, technology, engineering, and mathematics.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:bg-green-100 hover:scale-105 transition-transform duration-300">
              <img src={arts_humanities} alt="Arts and Humanities" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">Arts and Humanities</h3>
              <p className="text-gray-700">
                Offering a creative curriculum with a focus on visual arts, music, and literature.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:bg-yellow-100 hover:scale-105 transition-transform duration-300">
              <img src={sports_excellence} alt="Sports Excellence" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Sports Excellence</h3>
              <p className="text-gray-700">
                Our sports program provides exceptional training and opportunities in various athletic disciplines.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Academics;
