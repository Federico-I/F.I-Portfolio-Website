import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className=" flex flex-col items-center xl:flex-row sm:justify-between bg-stone-100 h-full w-full rounded-b-lg font-personalText text-3xl">
      <div className="w-full flex flex-col justify-items-center">
      <h1 className="flex self-center py-8 hover:text-blue-500 text-5xl md:text-6xl sm:p-5 transition-all duration-1000 cursor-pointer">
        Contact
      </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" flex flex-col items-center justify-items-center lg:flex-row ">
          <h1 className="flex text-4xl p-3 sm:p-3 sm:selfcenter ">Email:</h1>
          <p className="flex font-planeText sm:p-3 hover:underline hover:decoration-green-500 transition-all duration-1000 cursor-pointer">fede.izzi33@gmail.com</p>
        </div>
        <div className="p-3">
          <ul className=" flex flex-col lg:flex-row md:pr-8">
            <li className="p-5">
              <a
                href="https://github.com/Federico-I"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="h-20 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750" />
              </a>
            </li>
            <li className="p-5">
              <a
                href="https://linkedin.com/in/federico11izzi11"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-20 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
