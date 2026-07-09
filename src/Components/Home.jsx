import React from "react";
import BgImg from "../assets/115.png";
import FgImg from "../assets/fg.png";
import MyImg from "../assets/myimg200kb.jpg";
import "./Home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const academic = document.getElementById("Academic");
    const fgimg = document.getElementById("fgimg");
    const herotext = document.getElementById("herotext");
    const intro = document.getElementById("Intro");
    const introInnerDiv = document.getElementById("introInfo")
    if (!academic || !fgimg ) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fgimg.classList.add("displayimg");
          herotext.classList.add("heroclass");
          intro.classList.add("introClass")
          introInnerDiv.classList.add("introClasschildren")
        } else {
          fgimg.classList.remove("displayimg");
          herotext.classList.remove("heroclass");
          intro.classList.remove("introClass")
          introInnerDiv.classList.remove("introClasschildren")
        }
      });
    });

    observer.observe(academic);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className={`relative w-screen h-screen bg-blend-multiply  bg-neutral-400 flex flex-col gap-100 items-center justify-center bg-no-repeat bg-cover bg-center`}
      id="home"
    >
      <div id="star">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <img
        id="fgimg"
        className="w-full md:scale-100 scale-200 md:-bottom-11/12 -bottom-11/12"
        src={FgImg}
        alt=""
        srcSet=""
      />
      <h1
        id="herotext"
        className="transition-all duration-1000 text-5xl md:text-7xl md:pt-28 max-w-4xl text-center opacity-80 font-extrabold tracking-tight text-white mb-6"
      >
        Do it {" "}
        <span className="text-transparent rubikfont bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
           with passion 
        </span>{" "}
        or not at all.
      </h1>
      <span className="w-screen h-30 text-center">
        <p className="text-neutral-100 text-3xl z-40 bitfont-400 fixed bottom-0 w-screen blinkAndVanish">
          Scroll slow
        </p>
        <div id="Intro" className="transition-all duration-700 flex items-end justify-center opacity-0 bg-linear-to-b from-transparent to-neutral-950 from-5%  to-80% z-7 w-screen h-screen absolute -bottom-1/12">
          <div id="introInfo" className="opacity-0  my-15 p-2 flex md:flex-row flex-col items-center justify-evenly w-screen h-50">
            <img
              className="md:h-50 md:w-50 h-35 w-35 rounded-full backdrop-blur-xl border-white/10 shadow-xl border"
              src={MyImg}
              alt=""
              srcSet=""
            />
            <p className="text-neutral-200 bitfont-200">
              Hey, I'm{" "}
              <span className="text-lg text-blue-300 font-bold rubikfont">
                Devansh Kumar joshi
              </span>
              ,<br></br>Computer Science graduate who{" "}
              <span className="text-blue-100 bitfont-400">
                loves solving problems
              </span>
              ,<br></br>
              <span className="text-blue-100 bitfont-400">
                learning new technologies
              </span>
              ,<br></br> and building software that makes a difference.
            </p>
          </div>
        </div>
      </span>
    </section>
  );
}
