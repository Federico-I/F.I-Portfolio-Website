import React from "react";
import firstProject from "../Data/Images/FirstProject-HTM-CSS.jpg";

function CardItem( { defa } ) {

  const FedeProject = firstProject;

  const cardInfo = defa.CardProjects;

  return (
    <>
      {cardInfo.map((infoItems, keyIndex) => (
            <div key={infoItems.id} className="px-7 py-8 bg-slate-500 m-4 text-white hover:text-yellow-400 rounded">
              <div>
                <a href={infoItems.link} target="_blank" rel="noreferrer">
                  <img src={infoItems.imageUrl === "null" ? `${infoItems.imageLocal}` : infoItems.imageUrl} alt="project" className="h-40 w-70 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750 opacity-75 hover:opacity-100 "></img>
                </a>
              </div>
              <div className="pt-4 ">
                <p className=" font-sans font-bold text-2xl rounded">{infoItems.projectLable}</p>
              </div>
            </div>
      ))}
    </>
  ) 
}

export default CardItem;


// src={infoItems.imageUrl === "null" ? `${infoItems.imageLocal}` : infoItems.imageUrl}