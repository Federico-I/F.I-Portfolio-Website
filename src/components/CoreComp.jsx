"strict mode";
import React from "react";
import ItemList from "./ItemList";
import MainSlider from "./MainSlider";
import About from "./About";

function CoreComp( { dataText } ) {

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full pt-10 bg-transparent text-center">
        <div className="py-8 w-full font-titleFont text-white rounded-lg md:bg-black md:opacity-75 capitalize">
          <h2 className="py-3 mb-20 text-6xl">To the</h2>
          <div className="w-full flex flex-row justify-center xl:justify-start">
            <p className="xl:ml-10 text-blue-600 text-5xl underline decoration-red-300 hover:text-white hover:decoration-red-500 transition-all duration-1000 cursor-pointer">
            Most relevant
            </p>
          </div>
        </div>
        <MainSlider imgData={dataText}/>
        <ItemList itemData={dataText}/>
        {dataText.map((item) => (
          <About key={item.id} itemData={item}/>
        ))}
      </div>
    </>
  );
}

export default CoreComp;