import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import IntroScreen from './components/IntroScreen.jsx';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <CustomCursor />
      
      {!introDone && <IntroScreen onComplete={() => setIntroDone(true)} />}
      
      {/* Main app fades in right as the intro text lands in the navbar position */}
      <div className={`transition-opacity duration-700 ease-in ${introDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="pt-24 min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}