import React from "react";
import ProjectCard from "./project/ProjectCard";
import texture from "../assets/texture.jpg";
import weatherAppSS from "../assets/weatherSS.png";
import portfolioSS from "../assets/portfolioSS.png";

const Projects = () => {
  const projectsArray = [
    {
      title: "Portfolio Website",
      info: "I have created this website using react to showcase my skills knowledge.",
      image: portfolioSS,
      source: "https://github.com/yashru17/portfolio-website",
      demo: "https://portfolio-website-yu.netlify.app/",
    },
    {
      title: "Weather App",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatibus.",
      image: weatherAppSS,
      source: "https://github.com/yashru17/weather-app-react",
      demo: "https://weather-app-yu.netlify.app/",
    },
    {
      title: "Weather App",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatibus.",
      image: weatherAppSS,
      source: "https://github.com/yashru17/weather-app-react",
      demo: "https://weather-app-yu.netlify.app/",
    },
    {
      title: "Weather App",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatibus.",
      image: weatherAppSS,
      source: "https://github.com/yashru17/weather-app-react",
      demo: "https://weather-app-yu.netlify.app/",
    },
    {
      title: "Weather App",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatibus.",
      image: weatherAppSS,
      source: "https://github.com/yashru17/weather-app-react",
      demo: "https://weather-app-yu.netlify.app/",
    },
    {
      title: "Weather App",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, voluptatibus.",
      image: weatherAppSS,
      source: "https://github.com/yashru17/weather-app-react",
      demo: "https://weather-app-yu.netlify.app/",
    },
  ];

  return (
    <div
      id="projects-container"
      className=" bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-white w-full h-full overflow-x-hidden flex justify-center items-center "
    >
      <div
        className="md:w-[70%] w-[85%] md:mt-32 mt-14 flex flex-col flex-wrap  justify-center items-start gap-6"
      >
        <div>
          <h1 className="border-b-2 border-red-200 pb-1 md:text-4xl text-2xl text-slate-300 tracking-wider exo-2-regular">
            PROJECTS
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 ">
          {projectsArray.map(({ title, info, image, source, demo }, index) => (
            <ProjectCard
              key={index}
              title={title}
              info={info}
              image={image}
              source={source}
              demo={demo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
