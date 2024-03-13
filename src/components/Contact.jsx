import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {

  const emailDieStrhal = "diestrahl7@gmail.com";

  return (
    <div className=" flex flex-col items-center xl:flex-row justify-around bg-stone-100 h-full w-full rounded-b-lg font-personalText text-3xl">
      <div className="flex flex-col items-center xl:flex-row items-stretch w-full pl-20">
        <h1 className="flex py-8 text-5xl md:text-6xl sm:p-5 ">
          Contact
        </h1>
        <h1 className="flex items-center text-5xl sm:p-3 sm:selfcenter hover:text-blue-500 md:text-6xl transition-all duration-1000 cursor-pointer"><a href={`mailto:${emailDieStrhal}`}>Email</a></h1>
      </div>
      <div className=" p-3">
        <ul className="w-full flex flex-col justify-around lg:flex-row">
          <li className="p-5">
            <a href="https://github.com/Federico-I" target="_blank" rel="noreferrer">
              <FaGithub className="h-20 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-750"/>
            </a>
          </li>
          <li className="p-5">
            <a href="https://linkedin.com/in/federico11izzi11" target="_blank" rel="noreferrer">
              <FaLinkedin className="h-20 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-750" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
