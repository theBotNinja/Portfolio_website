import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="y relative bg-black pt-16 pb-8 overflow-hidden border-t border-slate-800/50">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand / Logo */}
        <div className="mb-6 group cursor-pointer" onClick={scrollToTop}>
          <h2 className="text-2xl bitfont-400 tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-slate-500 group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
            &lt; Devansh Kumar Joshi /&gt;
          </h2>
        </div>

        {/* Tagline */}
        <p className="bitfont-200 text-slate-100 text-sm max-w-md mb-8">
          Full-Stack Developer & Machine Learning Engineer. Building scalable web architectures, intelligent models, and seamless user experiences.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {['Home', 'Academic', 'Experience', 'Projects', 'Skills'].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-500 hover:text-indigo-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <span>Crafted with</span>
            <svg className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.485l-8.828-8.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-6 md:right-12 p-3 bg-slate-900 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>

      </div>
    </footer>
  );
};

export default Footer;