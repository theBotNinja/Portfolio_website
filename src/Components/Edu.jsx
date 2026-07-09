import React from "react";
import "./Edu.css";
import { useEffect } from "react";
import BgImg from "../assets/114.jpg";
const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    duration: "2022 - 2026 (Final Year)",
    grade: "CGPA: 8.26", // Replace with your actual grade
    description: `Specializing in advanced software development, machine learning, and full-stack engineering.`,
    icon: (
      <svg
        className="w-6 h-6 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    degree: "Higher Secondary (12th Grade)",
    institution: "Aditya Birla Public School",
    duration: "2020 - 2021",
    grade: "Percentage: 82%", // Replace with your actual grade
    description:
      "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in analytical thinking and mathematics.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
        />
      </svg>
    ),
  },
  {
    id: 3,
    degree: "Secondary School (10th Grade)",
    institution: "Aditya Birla Public School",
    duration: "2019 - 2020",
    grade: "Percentage: 90%", // Replace with your actual grade
    description:
      "Built core academic foundations with distinction. Active participant in science fairs and mathematics olympiads.",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const Education = () => {
  useEffect(() => {
    const div = document.querySelectorAll(".animationdiv");
    if (!div) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("niamee");
        } else {
          entry.target.classList.remove("niamee");
        }
      });
    });

    div.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="academic"
      style={{ backgroundImage: `url(${BgImg})` }}
      className="observerClass z-6 bg-center bg-cover bg-blend-multiply relative py-20 bg-neutral-900 text-white overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl D3font tracking-tight  mb-4">
            Academic Journey
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg bitfont-200">
            A timeline of my educational background.
          </p>
        </div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`animationdiv transition-all duration-800 opacity-50  scale-50 relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } group`}
              >
                {/* Center dot/icon */}
                <div className=" absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] ease-out">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div
                  className={` ml-20 md:ml-0 w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] transition-all duration-500 ease-out">
                    {/* Duration Badge */}
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                      {item.duration}
                    </span>

                    <h3 className="text-2xl font-extrabold text-slate-100 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-colors duration-300">
                      {item.degree}
                    </h3>

                    <h4 className="bitfont-400 text-lg text-slate-50 mb-3">
                      {item.institution}
                    </h4>

                    <p className= "bitfont-400 text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div
                      className={`inline-flex items-center px-4 py-1.5 rounded-lg bg-slate-950/50 border border-slate-700/50 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <span className="text-sm font-bold text-emerald-400">
                        {item.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
