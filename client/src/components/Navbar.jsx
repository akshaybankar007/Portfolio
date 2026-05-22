import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) setMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-container" onClick={closeMobileMenu}>
        <img src="/icon.png" alt="Engineer Icon" className="nav-icon" />
        <span className="nav-logo-text">Akshay Bankar
        </span>
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        aria-label="Menu"
        type="button"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              to={link.href}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/contact" onClick={closeMobileMenu}>
        <button className="nav-cta" type="button">
          Contact
        </button>
      </Link>
    </nav>
  );
}
