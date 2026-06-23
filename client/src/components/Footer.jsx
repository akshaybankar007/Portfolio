import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black py-8 text-center">
      <p className="text-gray-500 font-medium text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Akshay Bankar. Built with MERN, styled with hostility.
      </p>
    </footer>
  );
}