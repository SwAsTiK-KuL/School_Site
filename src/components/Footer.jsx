import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2"><Link to='/'>Springdale Public School </Link></h2>
            <p className="text-gray-400 max-w-sm">Committed to nurturing young minds and empowering students to reach their full potential.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300"><Link to='/'> Home </Link></a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300"><Link to='/aboutus'>About </Link></a>
            <a href="/academics" className="text-gray-400 hover:text-white transition-colors duration-300"><Link to='/academics'> Academics </Link></a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300"><Link to='/contact'>  Contact </Link></a>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="text-center text-gray-500 mt-6">
          <p>&copy; 2024 Springdale Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
