import React from "react";
import HeroImage from "../assets/yash4.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Home = () => {
  return (
    <div
      id="home-container"
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-500 text-white w-full h-screen flex  justify-center items-center overflow-x-hidden mt-20"
    >
      <div className="w-[85%] lg:flex md:flex justify-between items-center ">
        <div className=" lg:w-[50%] md:w-[50%] flex flex-col justify-center items-left gap-8 lg:p-10 md:p-10">
          <div className="w-full">
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold tracking-wide">
              I'm a Full Stack Developer...
            </h1>
          </div>
          <div>
            <p className="text-md text-wrap text-gray-300 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              debitis quos modi est minus, eaque odio, quaerat natus amet
              quibusdam porro esse, libero tempore officia sapiente architecto
              ratione eius quasi!
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
        </div>
        <div className=" lg:w-[50%] lmd:w-[50%] lg:p-20 md:p-20 p-8 lg:flex md:flex justify-center items-center">
          <div className=" lg:h-80 lg:w-80 md:h-80 md:w-80 h-44 w-44 rounded-full overflow-hidden m-auto">
            <img
              src={HeroImage}
              alt="hero-image"
              className=" w-full h-full object-cover scale-110 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
