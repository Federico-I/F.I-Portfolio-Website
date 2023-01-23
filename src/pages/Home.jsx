import React from "react";
import ItemList from "../components/ItemList";
import About from "../components/About";

function Home() {
  return (
    <>
      <div className="container">
        <ItemList />
      </div>
      <About />
    </>
  );
}

export default Home;
