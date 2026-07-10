import React from "react";
import BgImg from "../assets/115.png";
import FgImg from "../assets/fg.png";
import MyImg from "../assets/myimg200kb.jpg";
import MyImgBg2 from "../assets/resume.png";
import MyImgBg3 from "../assets/algorithm.png";
import MyImgBg4 from "../assets/api.png";
import "./Home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const academic = document.getElementById("academic");
    const fgimg = document.getElementById("fgimg");
    const herotext = document.getElementById("herotext");
    const intro = document.getElementById("Intro");
    const introInnerDiv = document.getElementById("introInfo");
    const midimgdiv = document.getElementById("midimgdiv");
    if (!academic || !fgimg) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fgimg.classList.add("displayimg");
          herotext.classList.add("heroclass");
          intro.classList.add("introClass");
          introInnerDiv.classList.add("introClasschildren");
          midimgdiv.style.opacity = "0%";
        } else {
          midimgdiv.style.opacity = "100%";
          fgimg.classList.remove("displayimg");
          herotext.classList.remove("heroclass");
          intro.classList.remove("introClass");
          introInnerDiv.classList.remove("introClasschildren");
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
      <div className="flex mt-52 flex-col">
        <h1
          id="herotext"
          className="transition-all p-4 flex-1 duration-1000 text-5xl md:text-7xl md:pt-28 max-w-4xl text-center opacity-80 font-extrabold tracking-tight text-white mb-6"
        >
          Do it{" "}
          <span className="text-transparent rubikfont bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            with passion
          </span>{" "}
          or not at all.
        </h1>
        <div id="midimgdiv" className="transition-all duration-800 flex items-center justify-evenly">
          <img
            src={MyImgBg2}
            className="frontImg1 h-50 w-50"
            alt=""
            srcSet=""
          />
          <span className="flex-col text-neutral-100 text-3xl  blinkAndVanish flex self-end items-center justify-center">
            <p className="bitfont-400 animate-pulse">Scroll slow</p>
            <p className="">↓</p>
          </span>
          <img
            src={MyImgBg4}
            className="frontImg3 h-50 w-50"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <span className="w-screen h-30 text-center">
        <div
          id="Intro"
          className="transition-all duration-700 flex items-end justify-center opacity-0 bg-linear-to-b from-transparent to-neutral-950 from-5%  to-80% z-7 w-screen h-screen absolute -bottom-1/12"
        >
          <div
            id="introInfo"
            className="opacity-0  my-15 p-2 flex md:flex-row flex-col items-center justify-center w-screen h-90"
          >
            <span className="flex-1 flex items-center justify-center">
              
            <img
              className="md:h-60 md:w-60 h-35 w-35 hover:saturate-115 transition-all duration-200 hover:scale-105 rounded-full backdrop-blur-xl border-white/10 shadow-xl border"
              src={MyImg}
              alt=""
              srcSet=""
            />
              </span>
            <p className="text-neutral-200 flex-1 md:text-2xl text-lg bitfont-200">
              Hey, I'm{" "}
              <span className=" text-blue-300 font-bold rubikfont">
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
