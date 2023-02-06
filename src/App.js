"strict mode";
import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.js";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MountainImage from "./Data/Images/mountain2.jpg";
import { informationData } from "./Data/infoData.js";

function App() {

  const [infoData, setInfoData] = useState(informationData);

  const backgroundImg = {
    backgroundImage: `url("${MountainImage}")`,
  };

  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-top bg-fixed"
      style={backgroundImg}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className=" flex flex-col items-center justify-center bg-transparent h-full w-8/12">
          <Header />
          <div className="flex flex-col items-center justify-center h-1/2 w-full mb-28 ">
            <Home textData={infoData} />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
