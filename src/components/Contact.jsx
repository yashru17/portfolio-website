import React, {useState} from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter1.png";

const Contact = () => {

  const [email, setEmail] = useState('')
  const [textarea, setTextarea] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setTextarea('')
  };

  return (
    <div
      id="contact"
      className=" bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-white w-full h-full overflow-x-hidden flex justify-center items-center"
    >
      <div className="md:w-[70%] w-[85%] md:my-32 my-14 flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-start w-full gap-6">
          <h1 className="border-b-2 border-red-200 pb-1 md:text-4xl text-2xl text-slate-300 tracking-wider exo-2-regular text-center ">
            CONTACT - ME
          </h1>
        </div>
        <div className="w-full flex md:flex-row flex-col flex-wrap justify-between items-center md:gap-0 gap-10">
          <form
            onSubmit={onSubmit}
            className=" md:w-1/2 w-full flex flex-col justify-center items-center gap-2 border-2 border-gray-600 p-4 rounded-lg "
          >
            <input
              type="email"
              id="email"
              placeholder="Enter Email address*"
              className="w-full h-10 rounded-sm p-2 text-lg text-black outline-none border-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              id="text-area"
              placeholder="What can we help with? *"
              className="w-full h-56 rounded-sm p-2 text-lg text-black outline-none border-none text-start"
              onChange={(e) => setTextarea(e.target.value)}
              value={textarea}
            />
            <button className="hover:bg-cyan-700 text-xl bg-cyan-600 p-2 w-full rounded-md mt-4">
              Send
            </button>
          </form>
          <div className="flex flex-col justify-start items-end gap-10 shadow-sm p-14 rounded-lg shadow-gray-700">
            <div>
              <h1 className="text-2xl text-lime-300 font-semibold drop-shadow-xl shadow-rose-600">
                👋 You can follow me on Socials 🫶
              </h1>
              <p className="text-center">
                <a href="mailto:yashrumap@gmail.com" className="text-blue-400 underline">
                  yashrumap@gmail.com
                </a>
              </p>
            </div>
            <ul className="flex flex-col justify-center items-end gap-6 text-xl text-gray-400 ">
              <li className="flex gap-4 font-semibold">
                <a
                  className="hover:drop-shadow-md duration-300 hover:text-white"
                  href="https://www.linkedin.com/in/yashumap/"
                >
                  LinkedIn
                </a>
                <img src={linkedin} alt="linkedin" width="30px" />
              </li>
              <li className="flex gap-4 font-semibold">
                <a
                  className="hover:drop-shadow-md duration-300 hover:text-white"
                  href="https://github.com/yashru17"
                >
                  GitHub
                </a>
                <img src={github} alt="github" width="30px" />
              </li>
              <li className="flex gap-4 font-semibold">
                <a
                  className="hover:drop-shadow-md duration-300 hover:text-white"
                  href="https://twitter.com/UmapYash"
                >
                  X.com
                </a>
                <img
                  src={twitter}
                  alt="twitter"
                  width="30px"
                  className="invert"
                />
              </li>
              <li className="flex gap-4 font-semibold ">
                <a
                  className="hover:drop-shadow-md duration-300 hover:text-white"
                  href="https://www.instagram.com/yash_umap17/"
                >
                  Instagram
                </a>
                <img src={instagram} alt="instagram" width="30px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
