import React from "react";
import ProfilePhoto from "../../data/Images/IMG_51562.jpg";

function ProfileImage() {
  const profilePicture = ProfilePhoto;

  return (
    <div className=" flex flex-col items-center justify-items-center justify-evenly sm:mx-20 text-decoration hover:underline hover:decoration-blue-400 ">
      <img
        src={profilePicture}
        alt="profilePhoto"
        className="flex rounded-full h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 transition-all duration-1000 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-md hover:drop-shadow-2xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000"
      />
      <h1 className="flex m-10 text-4xl md:text-6xl">Federico Izzi</h1>
    </div>
  );
}

export default ProfileImage;
