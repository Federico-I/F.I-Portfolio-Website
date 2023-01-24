"strict mode";

import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MountainImage from "./mountain2.jpg";

function App() {
  const backgroundImg = {
    backgroundImage: `url("${MountainImage}")`,
  };

  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-top bg-fixed scroll-smooth"
      style={backgroundImg}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className=" flex flex-col items-center justify-center bg-transparent h-full w-8/12">
          <Header />
          <div className="flex flex-col items-center justify-center h-1/2 w-full mb-28">
            <Home />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
