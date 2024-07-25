import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Make sure to import Footer component

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-48 bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">About Us</h1>
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-200">
            Discover our history, vision, mission, and the exceptional facilities we offer.
          </p>
        </div>

        <section
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card
            title="History"
            content="Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
            bgColor="from-blue-50 to-blue-100"
            textColor="text-blue-800"
            delay={200}
            isVisible={isVisible}
          />
          <Card
            title="Vision"
            content="To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
            bgColor="from-green-50 to-green-100"
            textColor="text-green-800"
            delay={400}
            isVisible={isVisible}
          />
          <Card
            title="Mission"
            content="To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
            bgColor="from-yellow-50 to-yellow-100"
            textColor="text-yellow-800"
            delay={600}
            isVisible={isVisible}
          />
          <Card
            title="Principal's Message"
            content="At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
            bgColor="from-purple-50 to-purple-100"
            textColor="text-purple-800"
            delay={800}
            isVisible={isVisible}
          />
          <Card
            title="Infrastructure and Facilities"
            content={
              <ul className="list-disc pl-6 space-y-2">
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
              </ul>
            }
            bgColor="from-red-50 to-red-100"
            textColor="text-red-800"
            delay={1000}
            isVisible={isVisible}
          />
        </section>
      </main>

      <Footer /> {/* Footer component added */}

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slide-in {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        .animate-delay-400 {
          animation-delay: 400ms;
        }
        .animate-delay-600 {
          animation-delay: 600ms;
        }
        .animate-delay-800 {
          animation-delay: 800ms;
        }
        .animate-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  );
}

const Card = ({ title, content, bgColor, textColor, delay, isVisible }) => (
  <div
    className={`bg-gradient-to-r ${bgColor} shadow-lg rounded-lg p-8 border border-gray-200 transform transition-transform duration-500 hover:scale-105 ${isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{title}</h2>
    <p className="text-base text-gray-800">{content}</p>
  </div>
);

export default AboutPage;
