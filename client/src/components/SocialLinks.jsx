import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-8">
      <a href="https://github.com/akshaybankar007" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(34,211,238,0)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        <Github size={28} />
      </a>
      <a href="https://www.linkedin.com/in/akshay--bankar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(34,211,238,0)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        <Linkedin size={28} />
      </a>
      <a href="mailto:akshaybankar076@gmail.com" className="text-gray-600 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(34,211,238,0)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        <Mail size={28} />
      </a>
    </div>
  );
}