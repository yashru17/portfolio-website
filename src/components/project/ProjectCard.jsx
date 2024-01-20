import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      id="project-card"
      className="hover:shadow-md hover:shadow-black duration-300 shadow-[0_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gray-800 rounded-xl md:h-[376px] md:w-[20rem] w-[120px] h-[176px] flex flex-col justify-start items-center overflow-hidden md:my-6  gap-2 md:gap-0"
    >
      <div className="md:w-[20rem] md:h-44 h-44 overflow-hidden hover:scale-105 duration-500">
        <img
          src={props.image}
          alt="project-pic"
          className=" object-cover object-center md:h-[176px] h-full"
        />
      </div>
      <div className=" w-full md:h-[200px] h-full flex flex-col md:justify-start justify-between md:items-start items-center md:gap-2 gap-1 md:p-4 p-1">
        <p className=" md:text-2xl text-[14px]">{props.title}</p>
        <p className="hidden md:block text-base text-gray-300">{props.info}</p>
        <div className=" h-full md:mt-4 w-full flex flex-col md:flex-row md:justify-around justify-center items-center md:items-end gap-1">
          <p className="text-center md:w-auto w-full text-[12px] md:text-base bg-sky-500 px-2 md:p-1 p-[2px] rounded-md cursor-pointer hover:bg-sky-600">
            <a href={props.source} target="_blank">Source Code</a>
          </p>
          <p className="text-center md:w-auto w-full text-[12px] md:text-base bg-sky-500 px-2 md:p-1 p-[2px] rounded-md  cursor-pointer hover:bg-sky-600">
            <a href={props.demo} target="_blank">Live Demo</a>
          </p>
        </div>
      </div>
    </div>
  );
}
