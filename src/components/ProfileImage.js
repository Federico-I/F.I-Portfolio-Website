import React from "react";
import ProfilePhoto from "../Data/Images/IMG_51562.jpg";

function ProfileImage() {
  const profilePicture = ProfilePhoto;

  return (
    <div className=" flex flex-col items-center justify-items-center md:flex-row justify-evenly bg-black-500 sm:px-20">
      <img
        src={profilePicture}
        alt="profilePhoto"
        className="flex rounded-full h-40 w-40 md:h-45 md:w-45 lg:h-50 lg:w-50 xl:h-60 xl:w-60 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 "
      />
      <h1 className=" felx p-10 text-4xl md:text-5xl">Federico Izzi</h1>
    </div>
  );
}

export default ProfileImage;
