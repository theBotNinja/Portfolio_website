import React from 'react';
import BgImg from "../assets/122.jpg"
import { useEffect } from 'react';
import './Project.css'
const projectsData = [
  {
    id: 1,
    title: 'Machine Learning-Based Intrusion Detection in EVs',
    category: 'Final Year Research Project',
    description:
      'A robust security framework for Electric Vehicles utilizing a Hybrid Deep Neural Network architecture. Implements CNN-LSTM models to detect and mitigate anomalous behaviors and network intrusions in real-time.',
    technologies: ['Python', 'CNN-LSTM', 'Deep Learning', 'Data Security'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'Her Shield',
    category: 'Full-Stack Web Application',
    description:
      'A comprehensive women\'s safety platform providing real-time safety alerts. Engineered with active AI model integration for threat detection and live location tracking capabilities.',
    technologies: ['MERN Stack', 'Socket.IO', 'Google Maps API', 'AI Integration'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'BotByte - Asset Price Predictor',
    category: 'ML Challenge 2025 Submission',
    description:
      'Developed a highly accurate Gated Recurrent Unit (GRU)-based Recurrent Neural Network for dynamic price prediction and market analysis. Built in collaboration with a cross-functional team.',
    technologies: ['Python', 'GRU-RNN', 'Data Science', 'Pandas'],
    githubLink: '#',
    liveLink: '#',
  },
];

const Projects = () => {
  useEffect(() => {
        const divList = document.querySelectorAll(".observerDivProject");
        if (!divList ) return;
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("observerDivProjectAnimation")
            } else {
              entry.target.classList.remove("observerDivProjectAnimation")
            }
          });
        });  
        divList.forEach(element => {
          observer.observe(element);
        });
        return () => observer.disconnect();
      }, []);
  return (
    <section id='projects' style={{ backgroundImage: `url(${BgImg})` }} className="bg-center bg-cover bg-blend-multiply relative py-20 bg-neutral-900 text-white overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-150 h-150 bg-fuchsia-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-rose-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="D3font text-4xl md:text-5xl tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="bitfont-200 text-slate-100 max-w-2xl mx-auto text-lg">
            A showcase of my technical architecture, focusing on machine learning integrations, full-stack development, and real-world problem solving.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group observerDivProject relative flex flex-col h-full bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/80 hover:border-rose-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)]"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="text-xs bitfont-600 tracking-wider uppercase text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-extrabold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-300 group-hover:to-rose-300 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 bitfont-400 text-sm leading-relaxed mb-8 grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-semibold text-slate-300 bg-slate-800 rounded-md border border-slate-700 group-hover:border-slate-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links (GitHub & Live) */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80 mt-auto">
                <a
                  href={project.githubLink}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-rose-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-rose-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;