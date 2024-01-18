import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";


export default function Social() {
  const links = [
    {
      link: "https://www.linkedin.com/in/yashumap/",
      name: "LinkedIn",
      key: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      link: "https://github.com/yashru17",
      name: "GitHub",
      key: "GitHub",
      icon: <FaGithub />,
    },
    {
      link: "https://leetcode.com/yashrumap/",
      name: "Leetcode",
      key: "Leetcode",
      icon: <SiLeetcode />,
    },
    {
      link: "mailto:yashrumap@gmail.com",
      name: "Gmail",
      key: "Gmail",
      icon: <SiGmail />,
    },
  ];
  return (
    <ul className="flex gap-12 text-2xl mt-10 ">
      {links.map(({ link, name, key, icon }) => (
        <li key={key} className="relative group w-6 cursor-pointer">
          <a href={link} target="_blank">
            {icon}
          </a>
          <p className=" text-lime-400 absolute group-hover:block hidden bottom-[-100%] left-[-50%] text-sm">
            {name}
          </p>
        </li>
      ))}
    </ul>
  );
}
