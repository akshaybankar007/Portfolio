import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const links = [
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: profile.instagram, label: 'Instagram', Icon: Instagram },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
  { href: profile.github, label: 'GitHub', Icon: Github },
];

export default function SocialLinks() {
  return (
    <div className="hero-socials">
      {links.map(({ href, label, Icon }) => (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="social-icon"
          aria-label={label}
          key={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
