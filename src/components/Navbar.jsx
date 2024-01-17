import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "About",
      path: "about",
    },
    {
      id: 3,
      link: "Skills",
      path: "skills",
    },
    {
      id: 4,
      link: "Projects",
      path: "projects",
    },
    {
      id: 5,
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <div
      id="navbar"
      className=" w-full bg-black text-white fixed top-0 left-0 flex justify-center items-center"
    >
      <div className="flex lg:flex-row md:flex-col justify-between items-center w-[85%] h-20">
        <div className="mx-10">
          <h1 className="lg:text-3xl md:text-3xl text-xl italic font-mono tracking-widest md:text-red-400 lg:text-white ">
            Yash Umap
          </h1>
        </div>
        <ul className="md:flex justify-between lg:gap-14 lg:text-xl mx-8 hidden md:py-4 md:text-lg md:gap-10 lg:py-0 ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="hover:underline capitalize cursor-pointer hover:scale-x-105 text-center duration-300"
            >
              {link}
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
          <div className=" z-40 absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-black via-black to-gray-800">
            <ul className="h-full flex flex-col items-center justify-center text-2xl gap-10">
              {links.map(({ id, link, path }) => (
                <li
                  key={id}
                  className="hover:underline capitalize cursor-pointer hover:scale-x-105 text-center duration-300"
                >
                  {link}
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
