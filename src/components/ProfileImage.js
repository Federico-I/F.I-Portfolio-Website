import React from "react";
import ProfilePhoto from "../Data/Images/IMG_51562.jpg";

function ProfileImage() {
  const profilePicture = ProfilePhoto;

  return (
    <div className=" flex sm:flex-row items-center justify-evenly bg-black-500 sm:px-20">
      <img
        src={profilePicture}
        alt="profilePhoto"
        className="rounded-full h-60 w-60 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 "
      />
      <h1 className="p-10 text-5xl">Federico Izzi</h1>
    </div>
  );
}

export default ProfileImage;
