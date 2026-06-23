import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About'},
  { href: '/experience', label: 'Experience'},
  { href: '/projects', label: 'Projects'},
  { href: '/skills', label: 'Skills'},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          {/* Put your icon back if you want, but this looks cleaner */}
          <span className="text-2xl font-extrabold text-white tracking-tight">
            Akshay <span className="text-red-600">Bankar</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-[73px] left-0 w-full md:w-auto bg-black md:bg-transparent items-center gap-8 py-8 md:py-0 border-b md:border-none border-gray-800 transition-all`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => `text-sm font-semibold uppercase tracking-wider transition-colors ${isActive ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link 
              to="/contact" 
              onClick={closeMenu} 
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}