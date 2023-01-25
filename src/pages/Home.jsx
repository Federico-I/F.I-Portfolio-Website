import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-slate-300 h-96 rounded-t-lg">
      <div className="mb-10 capitalize">
        <h2>Some of my work</h2>
        <p className="decoration-cyan-400">Most relevant projects</p>
      </div>
      <ItemList />
      <About />
    </div>
  );
}

export default Home;
