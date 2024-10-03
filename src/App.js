import React from "react";
import Header from "./components/Header.jsx";
import CoreComp from "./components/CoreComp.jsx";
import Contact from "./components/Features/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MountainImage from "./data/Images/mountain2.jpg";
import { informationData } from "./data/infoData.js";
import MainComp from "./components/MainComp.jsx";
import MesosComp from "./components/MesosComp.jsx";

function App() {

  const InfoData = informationData;

  const backgroundImg = {
    backgroundImage: `url("${MountainImage}")`,
  };

  return (
    <div className="flex flex-col items-center justify-between h-full bg-no-repeat bg-cover bg-top bg-fixed" style={backgroundImg}>
      <MesosComp className=" flex flex-col items-center justify-center bg-transparent h-full w-8/12">
        <Header />
        <MainComp>
          <CoreComp dataText={InfoData}/>
          <Contact />
        </MainComp>
      </MesosComp>
      <Footer />
    </div>
  );
}

export default App;



/*

  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-top bg-fixed"
      style={backgroundImg}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className=" flex flex-col items-center justify-center bg-transparent h-full w-8/12">
          <Header />
          <div className="flex flex-col items-center justify-center h-1/2 w-full mb-28 ">
            <CoreComp dataText={InfoData}/>
            <Contact />
          </div>
        </div>
        <Footer />
      
    </div>
  );
  
*/