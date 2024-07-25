import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Students from './pages/Students';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/students" element={<Students />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
     );
}

export default App;
