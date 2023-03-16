import React from "react";
import GitHubProfilePhoto from "../Data/Images/Git-Hub-Profile-Item.jpg";

function CardItem() {

  const GitProfileItem = GitHubProfilePhoto;

  return <div className="px-7 py-8 bg-green-500 m-4 rounded">
    <div><a href="https://github.com/Federico-I" target="_blank" rel="noreferrer"><img src={GitProfileItem} alt="project" className="h-40 w-60 bg-blue-500 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750"></img></a></div>
    <div className="pt-4" >
      
      <p className="bg-yellow-500 rounded">git hub repo</p>
    </div>
  </div>;
}

export default CardItem;
