import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'; 
import science from "../assets/science.png";
import cultural from "../assets/Cultural-Activities.jpg";
import sports from "../assets/sports.jpg";
import classroom1 from "../assets/classroom1.jpg";
import classroom2 from "../assets/classroom2.jpeg";

const collections = {
  sports: {
    title: "Sports Events",
    items: [
      { src: sports, alt: "Sports Day", description: "Students participating in various sports events." },
    ]
  },
  science: {
    title: "Science Projects",
    items: [
      { src: science, alt: "Science Exhibition", description: "Students presenting their science projects." },
    ]
  },
  cultural: {
    title: "Cultural Activities",
    items: [
      { src: cultural, alt: "Cultural Fest", description: "Students performing in the cultural fest." },
    ]
  },
  classroom: {
    title: "Classroom Life",
    items: [
      { src: classroom1, alt: "Classroom", description: "A glimpse of our interactive classrooms." },
      { src: classroom2, alt: "Library", description: "Students reading and studying in the school library." },
    ]
  },
  videos: {
    title: "Videos",
    items: [
      { src: "https://www.youtube.com/embed/UjqnAecXmRM", alt: "School Tour", description: "Virtual tour of Springdale Public School.", type: "video" },
      { src: "https://www.youtube.com/embed/NB3Mik0fOhY", alt: "Annual Function", description: "Highlights from the Annual Function 2023.", type: "video" },
    ]
  }
};

function Gallery() {
  const [activeCollection, setActiveCollection] = useState('all');
  const navigate = useNavigate(); // This should be inside the component function

  const allItems = Object.values(collections).flatMap(collection => collection.items);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-40 bg-gray-900 text-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6">Gallery Collection</h1>
          <p className="text-lg mb-12">Explore our vibrant school life through various collections.</p>
        </div>

        <div className="mb-8 flex justify-center space-x-4">
          {['all', ...Object.keys(collections)].map((key) => (
            <button
              key={key}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                activeCollection === key
                  ? 'bg-blue-700 text-gray-100 shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveCollection(key)}
            >
              {key === 'all' ? 'All' : collections[key].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCollection === 'all' ? allItems : collections[activeCollection]?.items || []).map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {item.type === 'video' ? (
                <div className="w-full h-64">
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.src}
                    title={item.alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
