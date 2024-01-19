import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      id="project-card"
      className="hover:shadow-md hover:shadow-black duration-300 bg-gray-800 h-[376px] rounded-xl w-[20rem] flex flex-col justify-start items-center overflow-hidden my-6 "
    >
      <div className="w-[20rem] h-44 overflow-hidden hover:scale-105 duration-500">
        <img
          src={props.image}
          alt="project-pic"
          className="object-cover object-center h-[176px]"
        />
      </div>
      <div className=" w-full h-[200px] flex flex-col justify-start items-start gap-2 p-4 ">
        <p className=" text-2xl">{props.title}</p>
        <p className=" text-md text-gray-300">{props.info}</p>
        <div className=" h-full mt-4 w-full flex justify-around items-end">
          <p className="bg-sky-500 px-2 p-1 rounded-md cursor-pointer hover:bg-sky-600">
            <a href={props.source} target="_blank">Source Code</a>
          </p>
          <p className="bg-sky-500 px-2 p-1 rounded-md cursor-pointer hover:bg-sky-600">
            <a href={props.demo} target="_blank">Live Demo</a>
          </p>
        </div>
      </div>
    </div>
  );
}
