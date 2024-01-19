import React from "react";

const About = () => {
  return (
    <div
      id="about-container"
      className=" bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-white w-full h-full overflow-x-hidden flex justify-center items-center"
    >
      <div className="lg:w-[70%] md:w-[70%] w-[85%] mt-32 flex flex-col justify-center items-start gap-10">
        <h1 className="border-b-4 border-red-200 pb-1 text-4xl text-slate-300 tracking-wider exo-2-regular">
          ABOUT
        </h1>
        <p className="leading-relaxed max-w-5xl lg:text-xl md:text-xl text-md text-gray-400 text-justify montserrat-alternates-medium">
          &emsp;&emsp;&emsp;<span className="text-6xl text-blue-800">H</span>ey
          there! I'm{" "}
          <b className="text-orange-500 text-xl fredericka-the-great-regular">
            Yash Umap
          </b>
          , a web developer pursuing a Bachelor's degree in Computer Science. My
          passion is turning ideas into incredible web experiences.
          <br />
          <br />
          &emsp;&emsp;&emsp;In coding, I specialize in the MERN stack (
          <span className="text-lime-600">
            MongoDB, Express.js, React, and Node.js
          </span>
          ). If you have a vision for a user-friendly website, consider it done!
          I thrive on making things work seamlessly, be it clever algorithms or
          efficient code.
          <br />
          <br />
          &emsp;&emsp;&emsp;My tech toolbox includes{" "}
          <span className="text-lime-600">
            JavaScript, HTML, CSS, and Java.
          </span>{" "}
          I navigate <span className="text-lime-600">Git and GitHub</span>{" "}
          effortlessly. Databases like{" "}
          <span className="text-lime-600">MongoDB and MySQL</span>? Yep, I've
          got those covered too. I believe in creating websites that not only
          work well but also look amazing.
          <br />
          <br />
          &emsp;&emsp;&emsp;Having worked on various projects, from e-commerce
          platforms to interactive web applications, I've applied and expanded
          my skills. Thanks for taking the time to get to know me—I'm eager to
          explore new opportunities and contribute my passion for web
          development to exciting projects!
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
