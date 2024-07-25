import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import { useNavigate } from 'react-router-dom'; 
import faculty1 from "../assets/faculty1.png";
import faculty2 from "../assets/faculty2.jpg";
import faculty3 from "../assets/faculty3.jpg";
import faculty4 from "../assets/faculty4.jpg";
import faculty5 from "../assets/faculty5.jpg";
import faculty6 from "../assets/faculty6.jpg";



function Faculty() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="flex flex-col min-h-screen">
                <main className="flex-grow container mx-auto px-6 py-48 bg-gradient-to-b from-gray-50 to-gray-100">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Meet Our Faculty</h1>
                        <p className="text-lg text-gray-600">
                            Our exceptional faculty members are dedicated to providing high-quality education and fostering a supportive learning environment.
                        </p>
                    </div>

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Faculty Member 1 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty1}
                                alt="John Doe" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">John Doe</h2>
                                <p className="text-gray-700 font-medium">Principal</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> M.Ed</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 20 years in educational administration</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        {/* Faculty Member 2 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty2}
                                alt="Jane Smith" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Jane Smith</h2>
                                <p className="text-gray-700 font-medium">Vice Principal</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> M.Sc. in Physics</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 15 years of teaching experience</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        {/* Faculty Member 3 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty3} 
                                alt="Emily Johnson" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Emily Johnson</h2>
                                <p className="text-gray-700 font-medium">English Teacher</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> M.A. in English</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 10 years of teaching experience</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        {/* Faculty Member 4 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty4}
                                alt="Michael Brown" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Michael Brown</h2>
                                <p className="text-gray-700 font-medium">Mathematics Teacher</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> M.Sc. in Mathematics</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 8 years of teaching experience</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        {/* Faculty Member 5 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty5} 
                                alt="Sophia Davis" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Sophia Davis</h2>
                                <p className="text-gray-700 font-medium">Science Teacher</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> M.Sc. in Chemistry</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 12 years of teaching experience</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>

                        {/* Faculty Member 6 */}
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
                            <img 
                                src={faculty6}
                                alt="David Wilson" 
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Danny Wilson</h2>
                                <p className="text-gray-700 font-medium">Computer Science Teacher</p>
                                <p className="text-gray-600 mt-2"><strong>Qualification:</strong> B.Tech in Computer Science</p>
                                <p className="text-gray-600"><strong>Experience:</strong> 5 years of teaching experience</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>
                    </section>
                </main>

                <Footer /> {/* Add the Footer component */}
            </div>
        </>
    );
}

export default Faculty;
