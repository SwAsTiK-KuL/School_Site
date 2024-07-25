import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'; 
import science from "../assets/science.png";
import cultural from "../assets/Cultural-Activities.jpg";
import sports from "../assets/sports.jpg";
import backgroundImage from "../assets/school.jpg"; 

function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main
        className={`relative flex items-center justify-center min-h-screen`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isVisible ? 'blur(8px)' : 'none',
          transition: 'filter 0.5s ease-in-out',
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark semi-transparent overlay
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            backdropFilter: 'blur(8px)', // Optional: to enhance the blur effect
          }}
        >
          <div className="text-center">
            <div className="text-4xl font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              "Welcome to Springdale Public School, where we nurture young minds for a brighter future."
            </div>
          </div>
        </div>
      </main>

      <section className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} container mx-auto px-6 py-12`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Cultures</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 transform hover:shadow-xl">
            <img src={sports} alt="Annual Sports Day" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
            <div className="p-6 bg-blue-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Annual Sports Day</h3>
              <p className="text-gray-600">"Celebrating Excellence in Sports"</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 transform hover:shadow-xl">
            <img src={science} alt="Science Exhibition" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
            <div className="p-6 bg-blue-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Science Exhibition</h3>
              <p className="text-gray-600">"Showcasing Student Innovations"</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 transform hover:shadow-xl">
            <img src={cultural} alt="Cultural Fest" className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"/>
            <div className="p-6 bg-blue-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Cultural Fest</h3>
              <p className="text-gray-600">"Embracing Diversity and Creativity"</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default HomePage;
