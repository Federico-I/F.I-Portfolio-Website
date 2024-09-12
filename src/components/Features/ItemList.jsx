import React from "react";
import CardItem from "./CardItem";

function ItemList( { itemData } ) {

  return (
    <div className="flex place-items-center grid grid-cols-1 w-full bg-stone-100 rounded-t-lg">
      <h1 className="p-5 text-6xl md:text-7xl underline decoration-green-500 font-titleFont">
        Projects
      </h1>
      <div className="flex grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center justify-space-around bg-slate-400 w-full pb-10">
      {itemData.map((itemInfo, i) => (
        <CardItem key={i} defa={itemInfo}/>
      ))}
      </div>
    </div>
  );
};

export default ItemList;

