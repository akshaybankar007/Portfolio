'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo-container" onClick={closeMobileMenu}>
        <img 
          src="/icon.png" 
          alt="Engineer Icon" 
          className="nav-icon" 
        />
        <span className="nav-logo-text"><span>Ak</span>shay Bankar</span>
      </Link>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" onClick={closeMobileMenu}>
        <button className="nav-cta">Contact</button>
      </Link>
    </nav>
  );
}