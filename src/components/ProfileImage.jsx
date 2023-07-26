import React from "react";
import ProfilePhoto from "../Data/Images/IMG_51562.jpg";

function ProfileImage() {
  const profilePicture = ProfilePhoto;

  return (
    <div className=" flex flex-col items-center justify-items-center justify-evenly sm:mx-20 text-decoration  hover:underline hover:decoration-blue-400 ">
      <img
        src={profilePicture}
        alt="profilePhoto"
        className="flex rounded-full h-40 w-40 sm:h-50 sm:w-50 lg:h-50 lg:w-50 xl:h-60 xl:w-60 transition-all duration-1000 cursor-pointer filter grayscale hover:grayscale-0 shadow hove:shadow-lg"
      />
      <h1 className="flex m-10 text-4xl md:text-6xl">Federico Izzi</h1>
    </div>
  );
}

export default ProfileImage;
