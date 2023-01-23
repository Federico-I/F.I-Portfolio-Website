import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home() {
  return (
    <>
      <div className=" w-full bg-slate-300 self-center">
        <h2>Some of my work</h2>
        <p>Most relevant projects.</p>
        <ItemList />
      </div>
      <About />
    </>
  );
}

export default Home;
