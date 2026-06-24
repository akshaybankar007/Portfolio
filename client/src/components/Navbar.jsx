import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#030303] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-widest hover:text-cyan-400 transition-colors" onClick={closeMenu}>
          AKSHAY BANKAR<span className="text-cyan-500">_</span>
        </Link>
        
        <button className="md:hidden text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-[60px] left-0 w-full md:w-auto bg-[#030303] items-center gap-8 py-8 md:py-0 border-b md:border-none border-gray-800`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => `text-sm uppercase font-semibold tracking-widest transition-all ${isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-gray-500 hover:text-white'}`}
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
               className="px-6 py-2 bg-transparent border-2 border-cyan-500 text-cyan-500 text-sm font-bold uppercase rounded hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
            >Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}