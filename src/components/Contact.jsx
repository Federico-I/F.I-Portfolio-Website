import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className=" flex flex-col items-center xl:flex-row sm:justify-between bg-stone-100 h-full w-full rounded-b-lg font-personalText text-3xl">
      <h1 className="flex py-8 text-4xl md:text-5xl sm:p-5">Contact</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className=" flex flex-col items-center justify-items-center lg:flex-row ">
          <h1 className="flex text-4xl p-3 sm:p-3 sm:selfcenter">Email:</h1>
          <p className="flex font-planeText sm:p-3">fede.izzi33@gmail.com</p>
        </div>
        <div className="p-3">
          <ul className=" flex flex-col lg:flex-row sm:pr-8">
            <li className="p-5">
              <a
                href="https://github.com/Federico-I"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              </a>
            </li>
            <li className="p-5">
              <a
                href="https://linkedin.com/in/federico11izzi11"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
