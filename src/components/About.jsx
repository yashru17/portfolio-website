import React from "react";

const About = () => {
  return (
    <div
      id="about-container"
      className=" bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-white w-full h-full overflow-x-hidden flex justify-center items-center"
    >
      <div className="lg:w-[65%] md:w-[65%] w-[95%] mt-32 flex flex-col justify-center items-start gap-10">
        <h1 className="border-b-4 border-red-200 pb-1 text-4xl text-slate-300 tracking-wider exo-2-regular">
          ABOUT
        </h1>
        <p className="leading-relaxed max-w-5xl lg:text-xl md:text-xl text-md text-gray-400 text-justify montserrat-alternates-medium">
          &emsp;&emsp;&emsp;<span className="text-6xl text-blue-800">L</span>orem ipsum dolor sit amet
          consectetur adipisicing elit. Natus recusandae exercitationem eligendi
          eum maxime molestiae unde excepturi est omnis reprehenderit,
          laboriosam quo magni incidunt molestias voluptates temporibus vero id
          deleniti doloribus? Dolor porro, dicta, deleniti repellat amet itaque
          blanditiis veritatis voluptas corrupti odio culpa ratione molestias
          molestiae sunt vitae iusto. Eius eligendi obcaecati incidunt vitae
          pariatur corporis doloremque laudantium ipsa? eligendi eum maxime molestiae unde excepturi est omnis reprehenderit, laboriosam quo magni incidunt molestias voluptates temporibus vero id deleniti doloribus? Dolor porro, dicta, deleniti repellat amet itaque blanditiis veritatis voluptas corrupti odio culpa ratione molestias molestiae sunt vitae iusto. Eius eligendi obcaecati incidunt vitae pariatur corporis doloremque laudantium ipsa? 
        </p>
      </div>
    </div>
  );
};

export default About;
