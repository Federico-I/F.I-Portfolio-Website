import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home({ textData }) {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full  pt-10 bg-transparent text-center">
      <div className="py-8 w-full font-titleFont text-white rounded-t-lg  md:bg-black md:opacity-75 capitalize">
        <h2 className="py-3 text-6xl ">Some of my work</h2>
        <p className="text-left text-5xl pl-10 pt-20 underline decoration-red-200">
          Most relevant projects
        </p>
      </div>
      <ItemList />
      {textData.map((item) => (
        <About key={item.id} itemData={item}/>
      ))}
    </div>
  );
}

export default Home;
