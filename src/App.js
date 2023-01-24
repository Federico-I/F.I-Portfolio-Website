"strict mode";

import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className=" flex flex-col items-center justify-center bg-gray-200 h-full w-8/12">
        <Header />
        <div className=" flex flex-col items-center justify-center h-1/2 w-full">
          <Home />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
