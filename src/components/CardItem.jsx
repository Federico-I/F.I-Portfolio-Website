import React from "react";
import GitHubProfilePhoto from "../Data/Images/Git-Hub-Profile-Item.jpg";

function CardItem() {

  const GitProfileItem = GitHubProfilePhoto;

  return <div className="px-7 py-8 bg-slate-500 m-4 rounded">
    <div><a href="https://github.com/Federico-I" target="_blank" rel="noreferrer"><img src={GitProfileItem} alt="project" className="h-40 w-70 bg-blue-500 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750 opacity-75 hover:opacity-100"></img></a></div>
    <div className="pt-4">
      <p className=" font-sans font-bold text-2xl text-yellow-400 rounded">LATEST PROJECTS</p>
    </div>
  </div>;
}

export default CardItem;
