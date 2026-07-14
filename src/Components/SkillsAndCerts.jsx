import React, { useEffect } from "react";
import BgImg from "../assets/112.jpg";
import "./Skills.css";
const skillsData = [
  {
    category: "Udemy Complete Data Science DL, NLP bootcamp",
    icon: (
      <svg
      className="w-6 h-6 text-violet-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: ["Python", "Deep Learning", "CNN-LSTM", "GRU-RNN", "Pandas","LLM"],
    color: "group-hover:border-violet-500/50",
  },
  {
    category: "NPTEL Introduction to Machine Learning",icon: (
      <svg
        className="w-6 h-6 text-orange-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    
    skills: ["Top %5", "Silver Certificate", "Model Evaluation", "ML maths"],
    color: "group-hover:border-amber-500/50",
  },
  {
      category: "NPTEL Getting Started with Competitive Programming",
    icon: (
      <svg
        className="w-6 h-6 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
      </svg>
    ),
    skills: [
      "Silver Certificate",
      "Problem Solving",
      "coding",
      "DSA",
    ],
    color: "group-hover:border-orange-500/50",
  },
];

const achievementsData = [
  {
    id: 1,
    title: "GATE 2025 Qualified",
    
    issuer: "Graduate Aptitude Test in Engineering",
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "300+ Problems Solved",
    issuer: "LeetCode",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "2-Star Rating",
    issuer: "CodeChef",
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const SkillsAndCerts = () => {
  useEffect(() => {
    const rightDivList = document.querySelectorAll(".rightDivObserver");
    const leftDivList = document.querySelectorAll(".leftDivObserver");

    if (!rightDivList || !leftDivList) return;

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rightDivObserverAnimate");
        } else {
          entry.target.classList.remove("rightDivObserverAnimate");
        }
      });
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("leftDivObserverAnimate");
        } else {
          entry.target.classList.remove("leftDivObserverAnimate");
        }
      });
    });
    rightDivList.forEach((element) => {
      observer1.observe(element);
    });
    leftDivList.forEach((element) => {
      observer2.observe(element);
    });
    return () => observer1.disconnect();
  }, []);
  return (
    <section
      id="skills"
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-center bg-cover bg-blend-multiply bg-fixed relative py-20 bg-neutral-800 text-white overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-125 h-125 bg-violet-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="D3font text-4xl md:text-5xl  tracking-tight mb-4">
            Technical Arsenal & Achievements
          </h2>
          <p className="bitfont-200 text-slate-100 max-w-2xl mx-auto text-lg">
            Core competencies across the stack, paired with milestones in
            competitive programming and engineering assessments.
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Skills Domains (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            {skillsData.map((domain, index) => (
              <div
                key={index}
                className={`group leftDivObserver relative p-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-3xl transition-all duration-500 hover:bg-slate-800/40 ${domain.color}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-200">
                    {domain.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {domain.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm bitfont-200 text-slate-300 bg-slate-950/50 border border-slate-700/50 rounded-xl hover:text-white hover:border-slate-500 hover:scale-105 hover:bg-slate-800 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Ranks (Takes up 1 column on large screens) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2 lg:mb-6 pl-2 hidden lg:block border-b border-slate-800/80 pb-4">
              Milestones
            </h3>

            {achievementsData.map((cert) => (
              <div
                key={cert.id}
                className="group rightDivObserver flex items-center gap-5 p-5 bg-linear-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(251,191,36,0.2)] transition-all duration-300 ease-out"
              >
                <div className="shrink-0 p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-100 group-hover:text-amber-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm bitfont-400 text-slate-200">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCerts;
