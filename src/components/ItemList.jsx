import React from "react";
import CardItem from "./CardItem";
import { informationData } from "../Data/infoData.js";

function ItemList() {

  const defaultI = informationData;

  return (
    <div className="flex place-items-center grid grid-cols-1 w-full bg-stone-100 rounded-t-lg">
      <h1 className="felx p-5 text-5xl md:text-5xl underline decoration-green-500 font-titleFont">
        Projects
      </h1>
      {defaultI.map((itemData, listIndex) => (
        <div className="flex grid grid-cols-1 lg:grid-cols-2 place-items-center justify-space-around w-full p-10" key={listIndex}>
          <CardItem defa={itemData} key={listIndex}/>
        </div>
      ))}
    </div>
  );
}

//<CardItem  defa={itemData} />

export default ItemList;
