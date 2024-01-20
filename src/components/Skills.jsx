import React from "react";
import Skillcard from "./skillSection/Skillcard";

import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Javascript from "../assets/javascript.svg";
import Reactjs from "../assets/react.svg";
import Nodejs from "../assets/node-js.svg";
import Mongodb from "../assets/mongodb.svg";
import Cplusplus from "../assets/cplusplus.svg";
import Java from "../assets/java.svg";
import Python from "../assets/python.svg";
import Tailwind from "../assets/tailwind-css.svg";
import Express from "../assets/express.svg";

const Skills = () => {
  return (
    <div
      id="skills-container"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 text-white w-full h-full flex  justify-center items-center overflow-x-hidden"
    >
      <div className="md:w-[70%] w-[90%] h-full flex flex-col justify-center items-center md:mt-32 mt-14 gap-2">
        {/* top */}
        <div className="flex flex-col justify-center items-start w-full gap-6">
          <h1 className="border-b-2 border-red-200 pb-1 md:text-4xl text-2xl text-slate-300 tracking-wider exo-2-regular text-center ">
            SKILLS
          </h1>
          <p className="text-lg montserrat-alternates-medium text-gray-400">Explore the skills that make my digital toolkit unique. From coding to design, these are the building blocks of my expertise. Dive in and discover what sets my work apart.</p>
        </div>
        <div className="w-full flex flex-col gap-20 py-10">
          {/* development */}
          <div className="flex flex-col gap-8 ">
            <h1 className="text-orange-500 md:text-3xl text-xl tracking-wide exo-2-regular">
              WEB DEVELOPMENT
            </h1>
            <div className="flex justify-center flex-wrap  items-center md:gap-14 gap-6">
              <Skillcard url={Html} name="HTML" style="shadow-orange-600"/>
              <Skillcard url={Css} name="CSS" style="shadow-sky-400"/>
              <Skillcard url={Javascript} name="JavaScript" style="shadow-yellow-400"/>
              <Skillcard url={Reactjs} name="React" style="shadow-sky-500"/>
              <Skillcard url={Nodejs} name="NodeJS" style="shadow-lime-400"/>
              <Skillcard url={Express} name="Express" style="shadow-gray-500"/>
              <Skillcard url={Mongodb} name="MongoDB" style="shadow-lime-600"/>
              <Skillcard url={Tailwind} name="Tailwind" style="shadow-slate-600"/>
            </div>
          </div>
          {/* other */}
          <div className="flex flex-col gap-8 ">
            <h1 className="text-orange-500 md:text-3xl text-xl tracking-wide exo-2-regular">OTHER</h1>
            <div className="flex justify-center flex-wrap  items-center md:gap-14 gap-6">
            <Skillcard url={Java} name="JAVA" style="shadow-red-500"/>
            <Skillcard url={Cplusplus} name="C++" style="shadow-blue-600"/>
            <Skillcard url={Python} name="Python" style="shadow-yellow-600"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
