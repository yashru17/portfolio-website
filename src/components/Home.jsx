import React from "react";
import HeroImage from "../assets/yash4.png";
import { FaArrowCircleRight, FaGithub, FaLinkedin,  } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { SiGmail, SiLeetcode } from "react-icons/si";
import Github from "../assets/github.svg"
import Gmail from "../assets/gmail.svg"
import Leetcode from "../assets/leetcode.svg"
import Linkedin from "../assets/linkedin.svg"

const Home = () => {
  return (
    <div
      id="home-container"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white w-full lg:h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex  justify-center items-center overflow-x-hidden mt-20"
    >
      <div className="w-[75%] lg:flex md:flex justify-between items-center ">
        <div className=" lg:w-[50%] md:w-[50%] flex flex-col justify-center items-left gap-8 lg:p-10 md:p-10 relative lg:pb-0">
          <div className="w-full">
            <h1 className="exo-2-regular lg:text-5xl md:text-5xl text-4xl font-bold tracking-wide">
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
              Portfolio
              <span>
                <FaArrowCircleRight className="inline-block group-hover:hidden" />
                <CiLocationArrow1 className="hidden group-hover:inline-block" />
              </span>
            </button>
          </div>
          <ul className="flex gap-12 text-2xl mt-10 ">
            <a href="https://www.linkedin.com/in/yashumap/"><img src={Linkedin} className="w-6 cursor-pointer  "/></a>
            <a href="https://github.com/yashru17"><img src={Github} className="w-6 cursor-pointer  "/></a>
            <a href="https://leetcode.com/yashrumap/"><img src={Leetcode} className="w-6 cursor-pointer "/></a>
            <a href="mailto:yashrumap@gmail.com"><img src={Gmail} className="w-6 cursor-pointer  "/></a>
          </ul>
        </div>
        <div className=" lg:w-[50%] lmd:w-[50%] lg:p-20 md:p-20 p-8 lg:flex md:flex justify-center items-center">
          <div className=" lg:h-80 lg:w-80 md:h-80 md:w-80 h-44 w-44 rounded-full  m-auto  p-3 border-sky-400 border-solid border-4">
            <div className=" lg:h-80 lg:w-80 md:h-80 md:w-80 h-44 w-44 rounded-full  m-auto  p-3 border-green-400 border-solid border-4">
              <img
                src={HeroImage}
                alt="hero-image"
                className="-translate-x-2 -translate-y-2 rounded-full w-full h-full object-cover scale-110  shadow-red-400 shadow-md p-1 border-2 border-solid border-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
