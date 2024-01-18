import React from "react";
import Skillcard from "./Skills/Skillcard";

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
      className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white w-full h-full flex  justify-center items-center overflow-x-hidden"
    >
      <div className="w-[65%] h-full flex flex-col justify-center items-center mt-44 gap-10">
        {/* top */}
        <div className="flex flex-col justify-center items-start w-full gap-4">
          <h1 className="border-b-4 border-red-200 pb-1 text-4xl text-slate-300 tracking-wider exo-2-regular text-center ">
            SKILLS
          </h1>
          <p className="text-lg">these are my skills i have mastered</p>
        </div>
        <div className="w-full flex flex-col gap-20 py-10">
          {/* development */}
          <div className="flex flex-col gap-8 ">
            <h1 className="text-orange-500 text-3xl tracking-wide exo-2-regular">
              WEB DEVELOPMENT
            </h1>
            <div className="flex justify-center flex-wrap  items-center gap-14">
              <Skillcard url={Html} name="HTML" style="shadow-orange-600"/>
              <Skillcard url={Css} name="CSS" style="shadow-sky-400"/>
              <Skillcard url={Javascript} name="JavaScript" style="shadow-yellow-400"/>
              <Skillcard url={Reactjs} name="React" style="shadow-sky-500"/>
              <Skillcard url={Nodejs} name="NodeJS" style="shadow-lime-400"/>
              <Skillcard url={Express} name="Express" style="shadow-gray-500"/>
              <Skillcard url={Mongodb} name="MongoDB" style="shadow-lime-600"/>
              <Skillcard url={Tailwind} name="Tailwind" />
            </div>
          </div>
          {/* other */}
          <div className="flex flex-col gap-8 ">
            <h1 className="text-orange-500 text-3xl tracking-wide exo-2-regular">OTHER</h1>
            <div className="flex justify-center flex-wrap  items-center gap-14">
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
