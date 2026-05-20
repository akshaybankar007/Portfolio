import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Message could not be sent.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: data.message });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner contact-inner">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-sub">
          Open to internships, full-time roles, and research collaborations in
          backend systems, distributed infrastructure, and MERN applications.
        </p>

        <div className="contact-layout">
          <div className="contact-cards">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <Mail size={22} />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-card">
              <Phone size={22} />
              <span>{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Linkedin size={22} />
              <span>linkedin.com/in/akshay--bankar</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Github size={22} />
              <span>github.com/akshaybankar007</span>
            </a>
            <p className="contact-location">
              <MapPin size={18} />
              {profile.location}
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={updateField}
                minLength="2"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                minLength="10"
                rows="5"
                required
              />
            </label>
            <button className="btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
