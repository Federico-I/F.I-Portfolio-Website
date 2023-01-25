import React from "react";
import CardItem from "./CardItem";

function ItemList() {
  return (
    <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center w-full rounded-t-lg md:rounded-none bg-stone-100">
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}

export default ItemList;
