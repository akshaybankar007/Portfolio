import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-black text-gray-200 font-sans selection:bg-red-500 selection:text-white">
        <Routes>
          <Route path="/" element= { <Home />} />
          <Route path="/about" element= { <About />} />
          <Route path="/experience" element= { <Experience />} />
          <Route path="/projects" element= { <Projects />} />
          <Route path="/skills" element= { <Skills />} />
          <Route path= " /contact" element = { <Contact/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
