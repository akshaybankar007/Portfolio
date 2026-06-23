import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const links = [
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
  { href: profile.instagram, label: 'Instagram', Icon: Instagram },
  { href: profile.github, label: 'GitHub', Icon: Github },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {links.map(({ href, label, Icon }) => (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-500/10 hover:-translate-y-1 transition-all"
          aria-label={label}
          key={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
