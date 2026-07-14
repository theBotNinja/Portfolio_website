import React from 'react';
import BgImg from "../assets/111.jpeg";
import { useEffect } from 'react';
import "./Exp.css"
const experienceData = [
  {
    id: 1,
    role: 'Summer Intern (Frontend & Digital Tools)',
    company: 'Hindalco, Renusagar',
    duration: 'June 2025 - July 2025',
    description:
      'Engineered responsive frontend interfaces and dynamic digital survey tools for power plant operations and enhancing user interaction.',
    technologies: ['React', 'Node.js', 'UI/UX Design', 'Python'],
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    role: 'Ethical Hacking & Penetration Testing Intern',
    company: 'CDAC Noida',
    duration: 'June 2024 - July 2024',
    description:
      'Conducted in-depth Windows forensics. Developed custom automated scripts to analyze vulnerabilities, enhancing system security and threat detection.',
    technologies: ['Python', 'Windows Forensics', 'Scripting', 'Security Analysis'],
    icon: (
      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const Experience = () => {
  useEffect(() => {
      const divList = document.querySelectorAll(".animateDivBoxExp");
      if (!divList ) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animeObserver")
          } else {
            entry.target.classList.remove("animeObserver")
          }
        });
      });  
      divList.forEach(element => {
        observer.observe(element);
      });
      return () => observer.disconnect();
    }, []);
    return (
      <section id="experience" className=" bg-stone-950  relative py-20 bg-fixed text-white overflow-hidden">
      <div className='backgrounditems'>
        <div style={{ backgroundImage: `url(${BgImg})` }} className='bg-cover bg-center bg-fixed toplazer'></div>
        <div style={{ backgroundImage: `url(${BgImg})` }} className='bg-cover bg-center bg-fixed middlelazer'></div>
        <div style={{ backgroundImage: `url(${BgImg})` }} className='bg-cover bg-center bg-fixed bottomlazer'></div>
      </div>
      {/* Background ambient glows matching the education section */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-emerald-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="D3font text-4xl md:text-5xl tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="bitfont-200 text-slate-100 max-w-2xl text-lg">
            Real-world applications of my engineering skills, spanning full-stack development to cybersecurity.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="animateDivBoxExp group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 rounded-3xl bg-slate-950/60 backdrop-blur-sm border border-slate-800/60 hover:bg-slate-800/40 hover:border-teal-500/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(20,184,166,0.2)]"
            >
              {/* Left Side: Duration & Icon (Desktop) */}
              <div className="md:w-1/4 shrink-0 pt-1">
                <div className="flex items-center gap-2 mb-2 text-slate-400 group-hover:text-teal-400 transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-teal-500/50 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wide uppercase">
                    {item.company}
                  </span>
                </div>
                <div className="bitfont-400 text-slate-50 text-sm font-medium">
                  {item.duration}
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="md:w-3/4">
                <h3 className="text-2xl font-extrabold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all duration-300">
                  {item.role}
                </h3>
                
                <p className="bitfont-200 text-slate-100 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-full hover:bg-cyan-900/50 hover:text-cyan-200 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;