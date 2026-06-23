import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 min-h-screen flex items-center" id="contact">
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Establish Uplink
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">Send payload to server.</p>
        </div>

        <div 
          onMouseMove={handleMouseMove}
          className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-10 relative group rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors"
        >
          {/* Spotlight Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,211,238,0.08), transparent 40%)` }}
          />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {status === 'success' && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-20 border border-cyan-500">
                <p className="text-cyan-400 font-mono text-lg animate-pulse">Payload delivered successfully.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan-500 uppercase">Variable: Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#030303] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm relative z-20"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan-500 uppercase">Variable: Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#030303] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm relative z-20"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-500 uppercase">Variable: Message</label>
              <textarea 
                rows="5"
                required
                className="w-full bg-[#030303] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none rounded-sm relative z-20"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-[#030303] border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] disabled:opacity-50 rounded-sm relative z-20"
            >
              {status === 'loading' ? 'Transmitting...' : 'Execute POST Request'}
            </button>
            
            {status === 'error' && <p className="text-red-500 font-mono text-xs mt-4">System fault: Packet drop detected. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}