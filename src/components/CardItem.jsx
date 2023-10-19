import React from "react";

function CardItem( { defa } ) {

  const cardInfo = defa.CardProjects;

  return (
    <>
      {cardInfo.map((infoItems, keyIndex) => (
            <div key={infoItems.id} className="flex flex-col justify-center px-7 py-8 h-80 w-80 bg-slate-500 m-4 text-white hover:text-yellow-400 rounded">
              <a href={infoItems.link} target="_blank" rel="noreferrer" className="flex justify-center">
                  <img src={infoItems.imageUrl === "null" ? infoItems.imageLocal : infoItems.imageUrl} alt="project" className="h-40 w-70 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750 opacity-75 hover:opacity-100 "></img>
              </a>
              <p className="pt-10 font-sans font-bold text-2xl rounded">{infoItems.projectLable}</p>
            </div>
      ))}
    </>
  ) 
}

export default CardItem;
