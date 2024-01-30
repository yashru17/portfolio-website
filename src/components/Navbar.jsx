import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "HOME",
      path: "#",
    },
    {
      id: 2,
      link: "ABOUT",
      path: "#about-container",
    },
    {
      id: 3,
      link: "SKILLS",
      path: "#skills-container",
    },
    {
      id: 4,
      link: "PROJECTS",
      path: "#projects-container",
    },
    {
      id: 5,
      link: "CONTACT",
      path: "#contact",
    },
  ];

  return (
    <div
      id="navbar"
      className="z-50 w-full bg-black text-white fixed top-0 left-0 flex justify-center items-center"
    >
      <div className="flex lg:flex-row md:flex-col justify-between items-center w-full md:w-[75%] h-20">
        <div className="mx-10 ">
          <h1 className="fredericka-the-great-regular lg:text-4xl md:text-3xl text-xl   tracking-widest md:text-red-400 lg:text-white ">
            Yash Umap
          </h1>
        </div>
        <ul className="md:flex justify-between lg:gap-10 lg:text-xl mx-8 hidden md:py-4 md:text-lg md:gap-6 lg:py-0 ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className=" oxygen-regular duration-75 capitalize cursor-pointer hover:text-slate-400 text-center "
            >
              <a href={path}>{link}</a>
            </li>
          ))}
        </ul>

        <div
          className="z-50 cursor-pointer lg:hidden md:hidden text-xl mr-4 "
          onClick={() => setMenu(!menu)}
        >
          {menu ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>

        {menu && (
          <div
            id="navbar-for-small-devices"
            className=" absolute top-0 right-0 w-screen h-screen bg-gradient-to-b from-black via-black to-gray-800"
            style={{
              animation: "navbar-animation 500ms",
            }}
          >
            <ul className="h-full flex flex-col items-center justify-center text-2xl gap-10">
              {links.map(({ id, link, path }) => (
                <li
                  key={id}
                  className="hover:text-slate-400 capitalize cursor-pointer  text-center duration-75"
                  onClick={() => setMenu(!menu)}
                >
                  <a href={path}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
