import React from "react";
import CardItem from "./CardItem";

function ItemList() {
  return (
    <div className="flex grid grid-cols-1 lg:grid-cols-2 place-items-center justify-space-around w-full rounded-t-lg md:rounded-none bg-stone-100">
      <CardItem />
      <CardItem />
    </div>
  );
}

export default ItemList;
