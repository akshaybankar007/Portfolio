import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/portfolio.js';

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-greeting">
          Hi, I&apos;m <span className="hero-greeting-script">Akshay</span>
        </p>
        <h1 className="hero-title">{profile.role}</h1>
        <p className="hero-desc">
          Full Stack Developer with expertise in React.js, Node.js, Express.js,
          MongoDB, REST APIs, and cloud deployment. I build scalable web
          applications with clean interfaces and reliable backend systems.
        </p>

        <SocialLinks />

        <div className="hero-actions">
          <Link to="/contact">
            <button className="btn-primary" type="button">
              Inquire
            </button>
          </Link>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            <button className="btn-secondary" type="button">
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrapper">
          <div className="orb-photo-main" />
          <div className="orb-photo-small-tl" />
          <div className="orb-photo-small-br" />
          <img src="/Photo.png" alt="Akshay Bankar" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}
