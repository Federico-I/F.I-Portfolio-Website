import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full  pt-10 bg-transparent capitalize text-center">
      <div className="py-8 w-full font-titleFont text-white rounded-t-lg text-3xl md:bg-black md:opacity-75">
        <h2 className="py-3 ">Some of my work</h2>
        <p className="text-left p-7 underline decoration-cyan-600">
          Most relevant projects
        </p>
      </div>
      <ItemList />
      <About />
    </div>
  );
}

export default Home;
