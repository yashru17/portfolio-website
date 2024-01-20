import React from "react";

export default function Footer() {
  return (
    <div
      id="footer"
      className=" bg-black text-white w-full h-full overflow-x-hidden flex justify-center items-center"
    >
      <div className="md:w-[70%] w-[85%]  my-14 flex flex-col justify-center items-center text-gray-400 text-center">
        <p>&copy; Copyright with 2023-24. All rights reserved</p>
        <p>
          <em>Presented by - </em><span className="font-bold">Yash Umap</span>
        </p>
      </div>
    </div>
  );
}
