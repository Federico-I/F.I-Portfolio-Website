import React from "react";
import ProfileImage from "./ProfileImage";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-stone-300">
      <div className=" w-full leading-relaxed font-titleFont text-3xl">
        <h1 className="text-5xl p-10 underline decoration-red-200">About</h1>
        <div className=" flex flex-col sm:flex-row items-center justify-between">
          <ProfileImage />
          <div className="bg-orange-500">
            <h1>Personal</h1>
            <p></p>
          </div>
        </div>
        <div>
          <h1>Moreover</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;
