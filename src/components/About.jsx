import React from "react";
import ProfileImage from "./ProfileImage";
import PropTypes from "prop-types";
import { infoData } from "../Data/infoData.js";

function About(props) {
  const displayPersonal = infoData.map((data) => {
    return <p>{data.personal}</p>;
  });

  const displayMoreover = infoData.map((data) => {
    return <p>{data.moreover}</p>;
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-stone-300">
      <div className=" w-full leading-relaxed font-titleFont text-3xl">
        <div className=" flex flex-col xl:flex-row pt-10 items-center justify-between">
          <ProfileImage />
          <div className="flex flex-col items-center justify-center p-10 xl:w-1/2 ">
            <h1 className="felx p-5 text-4xl md:text-5xl underline decoration-orange-600">
              Personal
            </h1>
            <p className="text-xl lg:text-3xl">{displayPersonal}</p>
          </div>
        </div>
        <div className="p-10">
          <h1 className="felx p-5 text-4xl md:text-5xl underline decoration-orange-600">
            Moreover
          </h1>
          <p className="text-xl lg:text-3xl">{displayMoreover}</p>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  personal: PropTypes.string,
  moreover: PropTypes.string,
};

export default About;
