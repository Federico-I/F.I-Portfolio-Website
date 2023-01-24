import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-slate-300 h-full">
      <h2>Some of my work</h2>
      <p>Most relevant projects.</p>
      <ItemList />
      <About />
    </div>
  );
}

export default Home;
