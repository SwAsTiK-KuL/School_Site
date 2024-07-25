import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4010/Contacts', {
        name,
        email,
        message
      });
      alert('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12 mt-32">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">We’d love to hear from you. Please reach out with any questions or concerns.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Details</h2>
            <div className="mb-4 flex items-center">
              <i className="fas fa-map-marker-alt text-teal-500 text-2xl mr-3"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
                <p className="text-gray-600">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-phone-alt text-teal-500 text-2xl mr-3"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-teal-500 text-2xl mr-3"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
                <p className="text-gray-600">info@springdale.edu</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                  <i className="fas fa-user text-teal-500 text-xl mr-2"></i>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                  <i className="fas fa-envelope text-teal-500 text-xl mr-2"></i>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                  <i className="fas fa-comment-dots text-teal-500 text-xl mr-2"></i>
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Find Us Here</h2>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.233493692603!2d-122.41941808468139!3d37.77492927975809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816c19a35cbd%3A0x1c26a4c9c4e13d7d!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1625136748055!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
