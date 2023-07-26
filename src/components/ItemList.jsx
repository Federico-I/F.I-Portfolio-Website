import React from "react";
import CardItem from "./CardItem";

function ItemList() {
  return (
    <div className="flex place-items-center grid grid-cols-1 w-full md:rounded-none bg-stone-100">
      <h1 className="felx p-5 text-4xl md:text-5xl underline decoration-orange-600">
        Projects
      </h1>
      <div className="flex grid grid-cols-1 lg:grid-cols-2 place-items-center justify-space-around w-full p-10 rounded-t-lg ">
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default ItemList;
