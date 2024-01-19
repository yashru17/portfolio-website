import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      id="project-card"
      className="shadow-lg bg-gray-800  rounded-xl max-w-[20rem] flex flex-col justify-center items-center overflow-hidden my-6"
    >
      <div className="w-[20rem] h-44 overflow-hidden ">
        <img
          src={props.image}
          alt="project-pic"
          className="object-contain object-center"
        />
      </div>
      <div className=" w-full flex flex-col justify-center items-start gap-2 p-4 ">
        <p className=" text-2xl">{props.title}</p>
        <p className=" text-md text-gray-300">{props.info}</p>
        <div className="mt-4 w-full flex justify-around items-center">
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
