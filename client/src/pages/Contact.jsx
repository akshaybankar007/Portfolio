import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      // Directing this to your actual backend port
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Message vanished into the void.');

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Transmission successful.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#050505]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open to full-time roles, internships, and recruiters who appreciate developers that don't just center divs, but actually build systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
              { icon: Linkedin, text: 'linkedin.com/in/akshay--bankar', href: profile.linkedin },
              { icon: Github, text: 'github.com/akshaybankar007', href: profile.github },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/50 hover:bg-red-600/5 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full group-hover:bg-red-600/20 group-hover:text-red-500 text-gray-400 transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
              </a>
            ))}
            <div className="flex items-center gap-6 p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full text-red-500">
                <MapPin size={20} />
              </div>
              <span className="text-gray-300 font-medium">{profile.location}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Name</label>
              <input type="text" name="name" value={form.name} onChange={updateField} required minLength="2" className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Email</label>
              <input type="email" name="email" value={form.email} onChange={updateField} required className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Message</label>
              <textarea name="message" value={form.message} onChange={updateField} required minLength="10" rows="5" className="w-full bg-[#111] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-y" placeholder="State your business..."></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Transmitting...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`text-center font-bold text-sm mt-4 ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}