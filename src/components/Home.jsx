import React from "react";
import HeroImage from "../assets/yash4.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import Github from "../assets/github.svg";
import Gmail from "../assets/gmail.svg";
import Leetcode from "../assets/leetcode.svg";
import Linkedin from "../assets/linkedin.svg";
import Social from "./Social";

const Home = () => {
  return (
    <div
      id="home-container"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white w-full md:h-[calc(100vh-80px)] flex  justify-center items-center overflow-x-hidden mt-20"
    >
      <div className="w-[75%] md:flex justify-between items-center ">
        <div className=" md:w-[50%] flex flex-col justify-center items-left gap-8 md:p-10 relative lg:pb-0">
          <div className="w-full">
            <h1 className="exo-2-regular md:text-5xl text-4xl font-bold tracking-wide">
              I'm a Full Stack Developer...
            </h1>
          </div>
          <div>
            <p className="montserrat-alternates-medium text-md text-wrap text-gray-400 text-justify">
              Passionate about creating exceptional digital solutions, I'm a
              Full Stack Web Developer with expertise in React, NodeJS, and the
              MERN stack. And I love to make responsive and dynamic websites.
            </p>
          </div>
          <div className="">
            <button className="flex gap-2 items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-3 group hover:scale-105 duration-500 shadow-[5px_10px_20px_rgba(8,_112,_184,_0.7)]">
              Resume
              <span>
                <FaArrowCircleRight className="inline-block group-hover:hidden" />
                <CiLocationArrow1 className="hidden group-hover:inline-block" />
              </span>
            </button>
          </div>
          <Social />
        </div>
        <div className=" md:w-[50%] md:p-20 p-8 md:flex justify-center items-center">
          <div className=" md:h-80 md:w-80 h-40 w-full rounded-full  m-auto  p-3 border-sky-400 border-solid md:border-4">
            <div className="  md:h-80 md:w-80 h-full w-full rounded-full  m-auto  p-3 border-green-400 border-solid md:border-4">
              <img
                src={HeroImage}
                alt="hero-image"
                className="md:-translate-x-2 md:-translate-y-2 rounded-full w-full h-full object-cover scale-110  shadow-red-400 shadow-md p-1 border-2 border-solid border-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
