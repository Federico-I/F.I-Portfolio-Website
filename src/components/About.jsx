import React from "react";
import ProfileImage from "./ProfileImage";

function About({ itemData }) {

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-stone-300 rounded-t-lg">
        <div className=" w-full leading-relaxed font-titleFont text-3xl">
          <h1 className="flex justify-center xl:justify-start xl:pl-40 p-5 text-5xl md:text-5xl underline decoration-green-400 text-white bg-black font-titleFont rounded-t-lg">
            About
          </h1>
          <div className=" flex flex-col xl:flex-row pt-10 items-center justify-between">
            <ProfileImage />
            <div className="flex flex-col items-center justify-center p-10 xl:w-1/2 ">
              <h1 className="felx p-5 text-4xl md:text-5xl underline decoration-orange-600">
                Personal
              </h1>
              <p className="text-xl lg:text-3xl">{itemData.personal}</p>
            </div>
          </div>
          <div className="p-10">
            <h1 className="felx p-5 text-4xl md:text-5xl underline decoration-orange-600">
              Moreover
            </h1>
            <p className="text-xl lg:text-3xl">{itemData.moreover}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
