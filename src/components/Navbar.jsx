import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <Link to='/'>  <img src={logo} alt="Springdale Public School Logo" className="w-24 h-auto" /> </Link>
          <h1 className="text-3xl font-extrabold">
            <Link to="/" className="hover:text-yellow-300">
              Springdale Public School
            </Link>
          </h1>
        </div>
        <nav className="flex space-x-6 text-lg font-medium">
          <Link to="/Academics" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Academics
          </Link>
          <Link to="/aboutus" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            About Us
          </Link>
          <Link to="/admission" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Admissions
          </Link>
          <Link to="/faculty" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Faculty
          </Link>
          <Link to="/students" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Students
          </Link>
          <Link to="/Gallery" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
