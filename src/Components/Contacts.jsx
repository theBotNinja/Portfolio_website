import React from 'react';
import BgImg from "../assets/120.jpg";

const socialLinks = [
  {
    name: 'GitHub',
    url: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    hoverColor: 'hover:text-slate-100 hover:bg-slate-800',
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverColor: 'hover:text-blue-400 hover:bg-blue-900/30',
  },
  {
    name: 'LeetCode',
    url: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    hoverColor: 'hover:text-amber-400 hover:bg-amber-900/30',
  },
  {
    name: 'CodeChef',
    url: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    hoverColor: 'hover:text-orange-400 hover:bg-orange-900/30',
  }
];

const Contact = () => {
  return (
    <section id='contact'
     style={{ backgroundImage: `url(${BgImg})` }} className="bg-cover bg-blend-multiply relative py-24 bg-neutral-900 text-white overflow-hidden">
      {/* Final Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl rubikfont tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
              Let's Build Something.
            </h2>
            <p className="text-slate-100 bitfont-200 text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:your.email@example.com" className="group flex items-center gap-4 w-max">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm bitfont-600 text-slate-500 uppercase tracking-wider mb-0.5">Email Me At</p>
                  <p className="text-slate-200 font-medium group-hover:text-indigo-300 transition-colors">
                    your.email@example.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social & Coding Profiles */}
            <div>
              <p className="text-sm bitfont-600 text-slate-300 uppercase tracking-widest mb-4">
                Connect & View Code
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 ${link.hoverColor} hover:-translate-y-1`}
                  >
                    {link.icon}
                    <span className="font-medium text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;